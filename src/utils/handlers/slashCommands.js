const fs = require('fs');

module.exports = async (client) => {
    fs.readdir(`${__dirname}/../../slashCommands/`, (err, files) => {
        if (err) client.logger.error(err);
        files.forEach(dir => {
            fs.readdir(`${__dirname}/../../slashCommands/${dir}/`, (err, file) => {
                if (err) client.logger.error(err);
                file.forEach(f => {
                    const props = require(`${__dirname}/../../slashCommands/${dir}/${f}`);
                    client.slash.set(props.name, props);
                });
    
                client.logger.loader(`${client.color.chalkcolor.red(`${dir}`)} loaded with ${file.length} (/) commands`)
            });
        });
    })
}