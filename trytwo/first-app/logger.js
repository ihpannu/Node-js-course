const url = "https://hello.com/log";

function log(message) {
  console.log("This is from logger " + message);
}
module.exports.log = log;
