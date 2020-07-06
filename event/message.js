const config = require("../config");
const db = require("quick.db"); // My database, yes i know there is better databases

module.exports = (bot, message) => {
    // PREFIXES
    let prefixes = db.fetch(`prefix_${message.guild.id}`);
    if(prefixes == null) {
    prefix = config.prefix
    } else {
    prefix = prefixes;
    }
        
   // BOT MENTION
   if(message.content.match(new RegExp(`^<@!?${bot.user.id}>( |)$`))){
    return message.channel.send(`My prefix in this server is \`${prefix}\``)
}

    if(message.author.bot){return}
    if(!message.content.startsWith(prefix)){return}

        const command = message.content.split(' ')[0].slice(prefix.length).toLowerCase();
        const args = message.content.split(' ').slice(1);
        let cmd;

        if (bot.commandes.has(command)){
            cmd = bot.commandes.get(command)
        }else if(bot.aliases.has(command)){
            cmd = bot.commandes.get(bot.aliases.get(command))
        }
        if(!cmd) return;

        //LOADING COMMANDS & LOGS (YOU CAN CHANGE THE EMBED BELLOW OFC)
        try {
            bot.channels.get(config.log_channel).send({embed: {
                color: 0xADD8E6,
                author: { 
                    name: message.author.tag,
                    icon_url: message.author.avatarURL, },
                thumbnail: { url: message.guild.iconURL, },
                description: `**User**: ${message.author}\n\n**Server**: ${message.guild.name}\n**Channel**: ${message.channel} (${message.channel.name})\n\n**Command**: ${command}`,
                footer: { text: `ID : ` + message.author.id, },
                timestamp: new Date(),
            }})
            cmd.run(bot, message, args);
        } catch (e) {
            bot.emit("error", e, message);
        }
};
