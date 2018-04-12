// CUSTOM MIDDLEWARE FUNCTION TO AUTHENTICATE THE USER
function auth(req, res, next) {
  console.log("Authenticating the user.. ");
  next();
}
module.exports = auth;
