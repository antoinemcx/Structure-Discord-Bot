module.exports = {

    name: 'commandName',

    description: 'commandDescription',

    usage: '<prefix>commandUsage',

    aliases: ['commandAlias1', "commandAlias2"],

    dir: "directoryName",

    cooldown: 1, // Cooldown in seconds, by default it's 2 seconds | OPTIONAL

    permissions: ['permission1', 'permission2'], // OPTIONAL

    

    run :async (client, message, args) => {   

message.reply(`Pong`);

  }

});
