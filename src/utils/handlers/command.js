const fs = require('fs');

module.exports = async (client) => {
    const commandDirectory = `${__dirname}/../../command`;

    // Command category loading
    fs.readdir(commandDirectory + '/', (err, files) => {
        if (err) client.logger.error(err);

        // Command loading
        files.forEach(dir => {
            fs.readdir(`${commandDirectory}/${dir}/`, (err, file) => {
                if (err) client.logger.error(err);
                file.forEach(f => {
                    const props = require(`${commandDirectory}/${dir}/${f}`);
                    client.commandes.set(props.name, props);
                    props.aliases.forEach(alias => {
                        client.aliases.set(alias, props.name);
                    });
                });

                client.logger.loader(`${client.color.chalkcolor.magenta(`${dir}`)} loaded with ${file.length} commands`)
            });
        });
    })
}