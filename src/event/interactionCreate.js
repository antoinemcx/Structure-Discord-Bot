const { Collection } = require('discord.js');

module.exports = async (client, interaction) => {
    const defaultCooldownAmount = 2;

    if(interaction.isCommand() || interaction.isContextMenu()
       && interaction.guild // interaction's guild can be fetch
       && client.slash.has(interaction.commandName) /* valid slash command */) {

        const command = client.slash.get(interaction.commandName);
        try {
            /* Command cooldowns */
            if (!cooldowns.has(command.name)) {
                cooldowns.set(command.name, new Collection());
            }
            
            const now = Date.now();
            const timestamps = cooldowns.get(command.name);
            const cooldownAmount = (command.cooldown || defaultCooldownAmount) * 1000;
            
            if (timestamps.has(interaction.user.id)) {
                const expirationTime = timestamps.get(interaction.user.id) + cooldownAmount;
                if (now < expirationTime) {
                    const secondsLeft = ((expirationTime - now) / 1000).toFixed(1);
                    return interaction.reply({
                        content: `Wait ${secondsLeft} more second${secondsLeft < 2 ? '' : 's'} to use **${command.name}**`,
                        ephemeral: true
                    });
                }
            }
            timestamps.set(interaction.user.id, now); // reset user's cooldown
            setTimeout(() => timestamps.delete(interaction.user.id), cooldownAmount);

            /* Command permissions verification */
            if (command.permissions && !interaction.member.permissions.has(command.permissions)) {
                return interaction.reply({
                    content: `You're missing permissions : ${command.permissions.map(p => `**${p}**`).join(', ')}`,
                    ephemeral: true
                });
            }
            command.run(client, interaction);

        } catch (e) {
            console.log(e);
            await interaction.reply({ content: 'An error has occured', ephemeral: true });
        }
    }
};
