const EventEmitter = require('events');

const Logger = require('./logger');
const logger = new Logger();
logger.log('message');

logger.on('messageLogged', arg => {
  console.log('Listner Called', arg);
});
