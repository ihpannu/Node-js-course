const EventEmitter = require('events');

var url = 'http://example.com/log';

class Logger extends EventEmitter {
  log(message) {
    //send the HTTP request¯
    console.log(message);

    // Raise an event
    this.emit('messageLogged', {
      id: 1,
      url: 'http://'
    });
  }
}

module.exports = Logger;

const EventEmitter = require('events');

const Logger = require('./logger');
const logger = new Logger();

logger.on('messageLogged', arg => {
  console.log('Listner Called', arg);
});
logger.log('message');

// how to create a server

const http = require('http');
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('Hello World');
    res.end();
  }
  if (req.url === '/api/courses') {
    res.write(JSON.stringify([1, 2, 3, 4, 5]));
    res.end();
  }
  if (req.url === '/about') {
    res.write('This is a about page');
    res.end();
  }
});

server.on('connection', socket => {
  console.log('New Connection...');
});
server.listen(3000);
console.log('listening on port 3000...');
