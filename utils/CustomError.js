function LoggerError(message) {
  this.name = this.constructor.name;
  this.message = message;
  Error.captureStackTrace(this, this.message)
}

function ChalkError(message){
  this.name = this.constructor.name;
  this.message = message;
  Error.captureStackTrace(this, this.message)
}

function SomeError(message){
  this.name = this.constructor.name;
  this.message = message;
  Error.captureStackTrace(this, this.message)
}


module.exports =  {
  LoggerError,
  ChalkError,
  SomeError
};
