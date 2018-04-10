const EventEmitter = require("events");

const url = "https://hello.com/log";

class Logger extends EventEmitter {
  log(message) {
    // Send and http request
    console.log(`This is from logger ${message}`);

    // Raise an event
    this.emit("messageLogged", {
      id: 1,
      url: "https://harman.com"
    });
  }
}

module.exports = Logger;
