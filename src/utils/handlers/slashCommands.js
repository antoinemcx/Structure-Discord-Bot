const fs = require('fs');

module.exports = async (client) => {
    const slashCommandsDirectory = `${__dirname}/../../slashCommands`;

    // Command category loading
    fs.readdir(slashCommandsDirectory + '/', (err, files) => {
        if (err) client.logger.error(err);
        
        // Command loading
        files.forEach(dir => {
            fs.readdir(`${slashCommandsDirectory}/${dir}/`, (err, file) => {
                if (err) client.logger.error(err);
                file.forEach(f => {
                    const props = require(`${slashCommandsDirectory}/${dir}/${f}`);
                    client.slash.set(props.name, props);
                });
    
                client.logger.loader(`${client.color.chalkcolor.red(`${dir}`)} loaded with ${file.length} (/) commands`)
            });
        });
    })
}