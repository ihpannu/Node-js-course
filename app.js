const EventEmitter = require('events');

const myEmitter = new EventEmitter();

// Register a listner
myEmitter.on('messageLogged', () => {
  console.log('listner called');
});

// Raise an event
myEmitter.emit('messageLogged');
