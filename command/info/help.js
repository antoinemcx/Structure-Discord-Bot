const { RichEmbed } = require("discord.js")
const db = require("quick.db");

        module.exports={
    conf:{
        name: 'help',
        description: 'Send help page and help command.',
        usage: '<prefix>help',
        aliases: ['h'],
    },
    run :async (bot, message, args) => {   
        let prefixes = db.fetch(`prefix_${message.guild.id}`);
        if(prefixes == null) {
        prefix = "b!"
        } else {
        prefix = prefixes;
        } 

        if(!args[0]){

        //EMBED D'AIDE
            let embed = new RichEmbed()
            .setColor('#36393f')
            .setAuthor(`${bot.user.username}'s doc`, bot.user.avatarURL)
            .setDescription(`● Commandes: \`${prefix}<command>\`\n● Commandes d'aide : \`${prefix}help <command>\``)
            .setThumbnail(bot.user.avatarURL)
            .addField("<:617policecarlight_100480:557916079595454474> Administration (6)", "`config`, `delconfig`, `setprefix`, `setchannel`, `setwelcome`, `setleave`")
            .addField("<:manpolice:557916094480777226> Modération  (9)", "`ban`, `kick`, `purge`, `warn`, `clearwarns`, `mute`, `unmute`, `lock`, `say`, `checkid`")
            .addField("<:673bowling_100924:557916087409180677> Amusantes  (11)", "`cat`, `dog`, `hug`, `cuddle`, `kiss`, `cry`, `punch`, `8ball`, `russian-roulette`, `pile-face`, `animegame`")
            .addField("<:manettes:601057618160779264> Jeux (5)", "`steam`, `fortnite`, `ftnshop`, `overwatch`, `skinmc`")
            .addField(":underage: Nsfw  (6)", "||`nude`, `ass`, `boobs`, `dick`, `lick`, `sexgif`||")
            .addField("<:2699:556786784047071233> Utilitaire  (19)", "`help`, `report`, `vwarns`, `serverinfo`, `membercount`, `roleinfo`, `userinfo`, `avatar`, `shorturl`, `bvn`, `remindme`,`meteo`, `googlesearch`, `emojilist`, `createinvite`, `embed`, `ascii`, `sayemoji`, `morse`")
            .addField("<:meliodas:706179454938120342> Méliodas  (13)", "`invite`, `debug`, `botinfo`, `support`, `credit`, `uptime`, `ping`\n:closed_lock_with_key:`deco`, `eval`, `reload`, `serv-list`, `addstaff`, `addbl`:closed_lock_with_key:\n\n**Nous rappelons que le serveur support est ouvert pour toute questions ou demandes de blacklist.**\n\n<a:redblob:571677053909336103> [`Ajoute-moi`](https://discord.com/oauth2/authorize?client_id=562571094947659783&permissions=8&scope=bot) ● [`Support`](https://discord.gg/XXRPnwt) ● [`Web`](https://5ec37f35f0c86.site123.me/) ● [`UpVote`](https://top.gg/bot/562571094947659783/vote) <a:redblob:571677053909336103>")

        const embed2 = new RichEmbed()
        .setAuthor(bot.user.username, bot.user.avatarURL)
        .setThumbnail(message.author.avatarURL)
        .setColor("#fd7003")
        .setDescription(`**Où voulez vous afficher les commandes ?**\n\n\`📥\` : En message privé\n\`📝\` : Dans ce salon\n\`❌\` : Annuler`)
        .setTimestamp()
        const msg = await message.channel.send(embed2)
        await msg.react("📥")
        await msg.react("📝")
        await msg.react("❌")
        
        const msg_res = msg.createReactionCollector((reaction, user) => user.id === message.author.id);
        msg_res.on("collect", async(reaction) => {
            if(reaction.emoji.name === "📥") {
                msg.delete()
                message.channel.send("<:yes:571632883945570324> Commandes envoyées en message privé avec succès")
                message.author.send(embed).catch((error) => {
                    message.channel.send("<:no:571632884369326106> Veuillez activer vos messages privés")
                })
            }
            if(reaction.emoji.name === "📝") {
                msg.delete()
                message.channel.send(embed)
            }
            if(reaction.emoji.name === "❌") {
                msg.delete()
                message.channel.send("<:yes:571632883945570324> Annulé avec succès")
            }
    })

        }else {
            let command = args[0];
            if (bot.commandes.has(command)) {
                command = bot.commandes.get(command);
            }else if(bot.aliases.has(command)){
                command = bot.commandes.get(bot.aliases.get(command));
            }
            var re = /<prefix>/gi;
            let tosend=[];
            if(command.conf.aliases.length === 0){
                tosend.push('Aucun alias')
            }else{
                for(var i = 0; i < command.conf.aliases.length; i++){
                    let alises = `<prefix>${command.conf.aliases[i]}`;
                    tosend.push(alises.replace(re, prefix))
                }
            }
            let usage = command.conf.usage;
            message.channel.send({
                embed: {
                    color: 0x36393f,
                    author: {
                        name: `Pannel d'aide avancé - ${command.conf.name}`,
                        icon_url: message.guild.iconURL,
                    },
                    description: `Préfix défini sur: \`${prefix}\`\n\`<>\` signifie le paramètre de commande requis\n\`[]\` signifie le paramètre de commande optionnel\n
                    **Nom de la commande:** \`${command.conf.name}\`\n**Description:** \`${command.conf.description}\`\n**Syntax:** \`${usage.replace(re, prefix)}\`
                    **Aliases:** \`${tosend.join('\`, \`')}\``,
                    thumbnail: {
                        url: bot.user.avatarURL,
                    },
                }
            }).catch(e => {
                bot.emit("error", e, message);

            });
        }
    }
}