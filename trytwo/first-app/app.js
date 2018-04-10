const Logger = require("./logger");
const logger = new Logger();

// Register a listener
logger.on("messageLogged", event => {
  console.log("listener called", event);
});

logger.log("class");
