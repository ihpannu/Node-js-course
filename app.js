const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('messageLogged', arg => {
  console.log('Listner Called', arg);
});
// Raise an event
emitter.emit('messageLogged', {
  id: 1,
  url: 'http://'
});
