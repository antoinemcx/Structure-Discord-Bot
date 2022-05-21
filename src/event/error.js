// Errors from command execution

module.exports = (client, error, message) => {
    if(!error) return

    if(error instanceof Error) {
        if (error.stack.includes('Missing Permissions')) {
            return client.logger.error('Permission Error')
        } else {
            return client.logger.error(error.stack, message)
        }
    }

    return client.logger.error(error)
}