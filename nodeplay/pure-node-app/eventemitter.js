const Logger = require('./eventClass')
const logger = new Logger()

// This Registers an event
logger.on('messagelogger', (event) => {
  console.log('Logging data from EventEmitter class: ', event)
})
logger.log()

/*
This is without class

const EventEmitter = require('events')

const logger = new EventEmitter()

// Register an event
logger.on('logger', (event) => {
  console.log('Listener called ', event)
})

// Raise an event
logger.emit('logger', {
  id: 1,
  name: 'Logger'
})

*/