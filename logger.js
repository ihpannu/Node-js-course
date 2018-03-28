const EventEmitter = require('events');
const emitter = new EventEmitter();

var url = 'http://example.com/log';

class Logger extends EventEmitter {
  log(message) {
    //send the HTTP request¯
    console.log(message);

    // Raise an event
    emitter.emit('messageLogged', {
      id: 1,
      url: 'http://'
    });
  }
}

module.exports = Logger;
