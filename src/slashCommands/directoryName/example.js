module.exports = {
    name: 'commandName',
    description: 'commandDescription',
    usage: '<prefix>commandUsage',
    examples: [],
    dir: "directoryName",
    cooldown: 1, // Cooldown in seconds, by default it's 2 seconds | OPTIONAL
    permissions: ['permission1', 'permission2'], // OPTIONAL
    options: [ ], // Optional, (/) command options ; read https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure
    
    run :async (client, interaction) => {   
        //Quick exemple of a basic command, which will just reply "Hello world !"

        interaction.reply({ content: "Hello world !" })
    }
}