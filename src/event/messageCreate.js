const { Collection } = require("discord.js");

module.exports = async (client, message) => {
    const prefix = client.config.prefix;
    const defaultCooldownAmount = 2;
    let cmd;
        
    if (!message.author.bot
        && message.content.match(new RegExp(`^<@!?${client.user.id}>( |)$`))) { // bot mentionned in chat

        message.channel.send(`Hi, I'm ${client.user.username}! In this server, my prefix is \`${prefix}\``);

    } else if (!message.author.bot && message.content.startsWith(prefix)) {
        const command = message.content.split(' ')[0].slice(prefix.length).toLowerCase();
        const args = message.content.split(' ').slice(1);

        if (client.commandes.has(command)) {
            cmd = client.commandes.get(command);
        } else if (client.aliases.has(command)) {
            cmd = client.commandes.get(client.aliases.get(command));
        }
        if (!cmd) return;

        const props = require(`../command/${cmd.dir}/${cmd.name}`);
        
        /* COOLDOWNS */
        if (!cooldowns.has(props.name)) {
            cooldowns.set(props.name, new Collection());
        }
        const now = Date.now();
        const timestamps = cooldowns.get(props.name);
        const cooldownAmount = (props.cooldown || defaultCooldownAmount) * 1000;
        
        if (timestamps.has(message.author.id)) {
            const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
            if (now < expirationTime) {
                const timeLeft = (expirationTime - now) / 1000;
                return message.reply(`Wait ${timeLeft.toFixed(1)} more second${timeLeft.toFixed(1)<2 ? '' : 's'} to use **${props.name}**`);
            }
        }
        timestamps.set(message.author.id, now);
        setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

        /* PERMISSION CHECKER */
        if (props.permissions && !message.member.permissions.has(props.permissions)) {
            message.reply(`You're missing permissions : ${props.permissions.map(p => `**${p}**`).join(', ')}`);
        } else {
            /* Loading command */
            cmd.run(client, message, args).catch(err => client.emit("error", err, message));
        }
    }
};