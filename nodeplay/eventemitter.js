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