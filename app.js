const EventEmitter = require('events');

const myEmitter = new EventEmitter();

myEmitter.emit('messageLogged');
