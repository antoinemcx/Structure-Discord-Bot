const { Collection } = require("discord.js");

module.exports = async (client, message) => {
    if(message.author.bot) { return }
    const prefix = client.config.prefix
        
    if(message.content.match(new RegExp(`^<@!?${client.user.id}>( |)$`))){ return message.channel.send(`Hi, I'm ${client.user.username}! In this server, my prefix is \`${prefix}\``) }
    if(!message.content.startsWith(prefix)){ return }

    const command = message.content.split(' ')[0].slice(prefix.length).toLowerCase();
    const args = message.content.split(' ').slice(1);
    let cmd;

    if (client.commandes.has(command)) { cmd = client.commandes.get(command) }
    else if(client.aliases.has(command)) { cmd = client.commandes.get(client.aliases.get(command)) }
    if(!cmd) return;

    const props = require(`../command/${cmd.dir}/${cmd.name}`);
    
    // COOLDOWNS & ERREUR
    if (!cooldowns.has(props.name)) { cooldowns.set(props.name, new Collection()); }
    const now = Date.now();
    const timestamps = cooldowns.get(props.name);
    const cooldownAmount = (props.cooldown || 2) * 1000;
    
    if (timestamps.has(message.author.id)) {
        const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
        if (now < expirationTime) {
            const timeLeft = (expirationTime - now) / 1000;
            return message.reply(`Wait ${timeLeft.toFixed(1)} more second${timeLeft.toFixed(1)<2 ? '' : 's'} to use **${props.name}**`);
        }
    }
    timestamps.set(message.author.id, now);
    setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

    // PERMISSION CHECKER
    if (props.permissions) {
        if (!message.member.permissions.has(props.permissions)) {
            return message.reply(`You're missing permissions : ${props.permissions.map(p => `**${p}**`).join(', ')}`)
        }
    }

    //LOADING COMMANDS
    try {
        cmd.run(client, message, args);
    } catch (e) {
        client.emit("error", e, message);
    }
};
