module.exports = async (bot) => {
  
    bot.logger.info('[!] Connexion effectuée !')
    bot.logger.info(`[!] Utilisateurs : ${bot.users.size}`)

    bot.user.setPresence({
          game: {
              name: "BETA BOT",
              type: "STREAMING",
              url: "https://www.twitch.tv/meliooff"
          }
      });
};
