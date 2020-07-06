    module.exports={
    conf:{
        name: 'commandName',
        description: 'commandDescription',
        usage: '<prefix>commandUsage',
        aliases: ['commandAlias1', "commandAlias2"],
    },
    run :async (bot, message, args) => {   
        
        //Quick exemple of a basic command, which will just reply "Hello world !"

        message.channel.send("Hello world !")
    }
}