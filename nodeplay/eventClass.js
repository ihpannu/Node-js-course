const EventEmitter = require('events')

class Logger extends EventEmitter {
  // methods

  log() {
    this.emit('messagelogger', {
      id: 123,
      name: 'This is from EventEmitter class'
    })
  }
}

module.exports = Logger