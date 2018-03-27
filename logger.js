console.log(__filename);
console.log(__dirname);

var url = 'http://example.com/log';

function log(message) {
  //send the HTTP request¯
  console.log('Hi ' + message);
}
log('Harman');
module.exports = log;
