const fs = require('fs');

module.exports = async (client) => {
    fs.readdir(`${__dirname}/../../event/`, (err, files) => {
        if (err) client.logger.error(err);
        files.forEach(file => {
            const event = require(`${__dirname}/../../event/${file}`);
            let eventName = file.split(".")[0];
            client.on(eventName, event.bind(null, client));
        });
        client.logger.loader(`${client.color.chalkcolor.red('[FINISH]')} ${files.length} events loaded`)
    });
}