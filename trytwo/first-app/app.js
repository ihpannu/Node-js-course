const EventEmitter = require("events");

const emitter = new EventEmitter();

// Register a listener
emitter.on("messageLogged", event => {
  console.log("listener called", event);
});

// Raise an event
emitter.emit("messageLogged", {
  id: 1,
  url: "https://harman.com"
});
