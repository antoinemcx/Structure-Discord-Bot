const config = require("../config");

module.exports = async (bot) => {
  
    bot.logger.info(`[!] ${bot.user.username} is started...`)

    bot.user.setPresence({
          game: {
              name: `${config.prefix}help`,
              type: "PLAYING",
          }
      });
};
