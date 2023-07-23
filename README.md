<h1 align="center">Structure-Discord-Bot</h1>
<p align="center">
    Discord.js command, slash command &amp; event handler by <a href="https://github.com/antoinemcx">Melio</a>.<br />
    If you like the project, feel free to put a ⭐ for better referencing ; If you need help, join the <a href="https://discord.gg/G6WQsMQShZ">server support</a>.
</p>

<p align="center">
    <a title="MIT Lisence" href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue" alt="MIT License"></a>
    <a title="CodeFactor" href="https://www.codefactor.io/repository/github/antoinemcx/structure-discord-bot">
        <img src="https://www.codefactor.io/repository/github/antoinemcx/structure-discord-bot/badge" alt="CodeFactor">
    </a>
    <a title="Version discord.js" href="https://www.npmjs.com/package/discord.js">
        <img src="https://img.shields.io/badge/discord.js-v14.7.1-blue.svg?logo=npm" alt="Version discord.js">
    </a>
    <a title="Stars" href="https://github.com/antoinemcx/Structure-Discord-Bot">
        <img src="https://img.shields.io/github/stars/antoinemcx/Structure-Discord-Bot" alt="Stars">
    </a>
    <a title="Support server" href="https://discord.gg/G6WQsMQShZ">
        <img src="https://img.shields.io/discord/738122381062832180.svg?&logo=discord&logoColor=ffffff&color=7389D8&labelColor=6A7EC2&label=Support" alt="Support server">
    </a>

   <br>
</p>

## Features
* 🚀 Ready to code Discord bot
* 🔨 Files and commands structure
* 📂 Classic and slash commands handler
* 🕐 The commands handlers contain permissions and cooldown checker
* 📋 A slash commands registration file
* 🎈 Event handler including error handler

<br>


## Starting the project


### Configuration
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

<br>

## More

For any errors found, please contact me [here](https://discord.com/invite/G6WQsMQShZ) or do a pull request.  
This repository is licensed under the MIT License. See the `LICENSE` file ([here](LICENSE)) for more information.