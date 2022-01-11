module.exports = async (client) => {

    process.on('unhandledRejection', err => {
        if(err) {
            if (err.stack.includes('An invalid token was provided.')) {
                return client.logger.error('Bad token see config.js for set the token')
            } else if (err.stack.includes('Missing Permissions')) {
                return client.logger.error('Permission Error')
            } else {
                return client.logger.error(err.stack)
            }
        }
    });
   
    process.on('uncaughtException', err =>{
        if (err.stack.includes('Promise { <pending> }')) return;
        return client.logger.error(err.stack)
    });
   
    process.on('warning', (err) => {
        client.logger.error(err.stack)
    })
}