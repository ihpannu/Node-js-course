var url = 'http://example.com/log';

function log(message) {
  //send the HTTP request
  console.log('Hi ' + message);
}
// log(url);

module.exports.log = log;
// module.exports.endpoint = url;
