const db = require("quick.db");

module.exports = (bot, message) => {
    let prefixes = db.fetch(`prefix_${message.guild.id}`);
    if(prefixes == null) {
    prefix = "b!"
    } else {
    prefix = prefixes;
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
        try {
            cmd.run(bot, message, args);
        } catch (e) {
            bot.emit("error", e, message);
        }
};
