# Structure-Discord-Bot [![Stars](https://img.shields.io/github/stars/antoinemcx/Structure-Discord-Bot)](https://github.com/antoinemcx/Structure-Discord-Bot) [![Codefactor](https://www.codefactor.io/Content/badges/APlus.svg)](https://www.codefactor.io/repository/github/antoinemcx/structure-discord-bot)

Command, slash command &amp; event handler by [Melio](https://github.com/antoinemcx) - Bot Discord (v14.X.X)  
Moreover, the command and slash commands handlers contain a permissions checker and a cooldown checker ;  
For better referencing, please add a star on the repository  


## Setup the project

The configuration file named **config.js** have to content yout bot's token and prefix, and the IDs of all other owners (or just yours).
```js
module.exports = {
    token: 'THE_BOT_TOKEN',
    botID: 'THE_BOT_ID',
    prefix: 'THE_BOT_PREFIX',
    owner: [ "YOUR_DISCORD_ID" ],
};  
 ```

### Installation

```sh
$ npm install
```

### Register slash commands

```sh
$ npm run slash
```

### Start the bot

```sh
$ npm run start
```
‎ 

## More

For any errors found, please contact me [here](https://discord.com/invite/G6WQsMQShZ) for exemple or do a pull request. 

### License
This repository is licensed under the MIT License. See the `LICENSE` file ([here](https://github.com/antoinemcx/Structure-Discord-Bot/blob/master/LICENSE)) for more information.

  
###### Made with ❤️ by [meliooff](https://github.com/antoinemcx) in JavaScript.