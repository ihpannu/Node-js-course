const EventEmitter = require('events');

const myEmitter = new EventEmitter();

// Register a listner
myEmitter.on('messageLogged', arg => {
  console.log('listner called', arg);
});

// Raise an event
myEmitter.emit('messageLogged', 1, 'url');
