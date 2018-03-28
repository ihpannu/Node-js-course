const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('messageLogged', arg => {
  console.log('Listner Called', arg);
});

const log = require('./logger');
log('message');
