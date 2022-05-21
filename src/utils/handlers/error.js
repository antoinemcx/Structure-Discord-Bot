module.exports = async (client) => {

    process.on('unhandledRejection', err => {
        if(!err) return
            
        if(err instanceof Error) {
            if (err.stack.includes('An invalid token was provided.')) {
                return client.logger.error('Bad token see config.js for set the token')
            } else {
                return client.logger.error(err.stack)
            }
        }
    
        client.logger.error(err)
    });
   
    process.on('uncaughtException', err =>{
        if (err.stack.includes('Promise { <pending> }')) return;
        return client.logger.error(err.stack)
    });
   
    process.on('warning', (err) => {
        client.logger.error(err.stack)
    })
}