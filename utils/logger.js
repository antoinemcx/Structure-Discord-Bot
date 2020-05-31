const chalk = require('chalk');
const moment = require("moment");
const {LoggerError} = require('./CustomError');
  const timestamp = `[${moment().format(" HH:mm:ss | DD-MM-YYYY")}]`;

   function log(content){
    if(!content) throw new LoggerError('No text found');
    console.log(`${chalk.cyan(timestamp)} ${chalk.blue.underline(('[LOG]'))} ${content}`)
  }

  function loader(content){
    if(!content) throw new LoggerError('No text found');
    console.log(`${chalk.cyan(timestamp)} ${chalk.green.underline(('[LOADER]'))} ${content}`)
  }

  function error(content){
    if(!content) throw new LoggerError('No text found');
    console.log(`${chalk.cyan(timestamp)} ${chalk.red.underline(('[ERROR]'))} ${content}`)
  }

  function warn(content){
    if(!content) throw new LoggerError('No text found');
    console.log(`${chalk.cyan(timestamp)} ${chalk.yellow.underline(('[WARN]'))} ${content}`)
  }

  function info(content){
    if(!content) throw new LoggerError('No text found');
    console.log(`${chalk.cyan(timestamp)} ${chalk.magenta.underline(('[INFO]'))} ${content}`)
  }

  function database(content){
    if(!content) throw new LoggerError('No text found');
    console.log(`${chalk.cyan(timestamp)} ${chalk.yellowBright.underline(('[DATABASE]'))} ${content}`)
  }

module.exports = {
  log,
  loader,
  error,
  warn,
  info,
  database
};
