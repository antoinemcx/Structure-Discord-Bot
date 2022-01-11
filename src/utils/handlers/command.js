const fs = require('fs');

module.exports = async (client) => {
    fs.readdir(`${__dirname}/../../command/`, (err, files) => {
        if (err) client.logger.error(err);
        files.forEach(dir => {
            fs.readdir(`${__dirname}/../../command/${dir}/`, (err, file) => {
                if (err) client.logger.error(err);
                file.forEach(f => {
                    const props = require(`${__dirname}/../../command/${dir}/${f}`);
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