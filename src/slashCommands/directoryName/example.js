module.exports = {
    name: 'example',
    description: 'Very simple example of a command to understand how to use this template',
    usage: '<prefix>example [ping]', //OPTIONAL (for the help cmd)
    examples: ['example', 'example ping:true'], //OPTIONAL (for the help cmd)
    dir: "directoryName",
    cooldown: 1, // Cooldown in seconds, by default it's 2 seconds | OPTIONAL
    permissions: [], // OPTIONAL
    options: [
        {
            name: 'ping',
            description: "Get the bot's latency",
            type: 3, required: false,
            choices: [ { name: "yes", value: 'true' }, { name: "no", value: 'false' } ]
        }
    ], // OPTIONAL, (/) command options ; read https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure
    
    run: async (client, interaction) => {
        if(interaction.options.getString('ping') === 'true') {
            interaction.reply({ content: `Hello world !\n> Bot's latency : **${Math.round(client.ws.ping)}ms**` });
        } else {
            interaction.reply({ content: 'Hello world !' });
        }
    }
}