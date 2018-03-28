const EventEmitter = require('events');
const emitter = new EventEmitter();

var url = 'http://example.com/log';

function log(message) {
  //send the HTTP request¯
  console.log('Hi ' + message);

  // Raise an event
  emitter.emit('messageLogged', {
    id: 1,
    url: 'http://'
  });
}
log('Harman');
module.exports = log;
