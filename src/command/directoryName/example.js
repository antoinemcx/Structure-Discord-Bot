module.exports = {
    name: 'example',
    description: 'Very simple example of a command to understand how to use this template',
    usage: '<prefix>example [ping]', //OPTIONAL (for the help cmd)
    examples: ['example', 'example ping'], //OPTIONAL (for the help cmd)
    aliases: ['eg'],
    dir: "directoryName",
    cooldown: 1, // Cooldown in seconds, by default it's 2 seconds | OPTIONAL
    permissions: [], // OPTIONAL
    
    run :async (client, message, args) => {   
        if(args[0] === 'ping') {
            message.reply(`Hello world !\n> Bot's latency : **${Math.round(client.ws.ping)}ms**`)
        } else {
            message.reply("Hello world !")
        }
    }
}