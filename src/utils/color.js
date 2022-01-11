const {ChalkError} = require('./CustomError');
const chalk = require('chalk');
let chalkcolor ={
     red(message){
        if(!message) throw new ChalkError('Not text found !');
        return chalk.red(message)
    },
    black(message){
        if(!message) throw new ChalkError('Not text found !');
        return chalk.black(message)
    },
    green(message){
        if(!message) throw new ChalkError('Not text found !');
        return chalk.green(message)
    },
    yellow(message){
         if(!message) throw new ChalkError('Not text found !');
        return chalk.yellow(message)
    },
    magenta(message){
         if(!message) throw new ChalkError('Not text found !');
        return chalk.magenta(message)
    },
    blue(message){
         if(!message) throw new ChalkError('Not text found !');
        return chalk.blue(message)
    },
    cyanBright(message){
        if(!message) throw new ChalkError('Not text found !');
        return chalk.cyanBright(message)
    },
};

let messagecolor={
    red : 0xF52E2E,
    yellow: 0xF5F52E,
    orange: 0xF5AD2E,
    green: 0x76D813,
    cyan: 0x13D8CF,
    blue : 0x33A2FF,
    darkblue: 0x131CD8,
    purple:0x8A13D8,
    pink:0xD813D8,
    white: 0xFFFFFF,
    gray:0x9E9E9E,
    black:0x000000,
    blurple: 0x7289DA,
    greyple:0x99AAB5
};


module.exports= {
    chalkcolor,
    messagecolor
};
