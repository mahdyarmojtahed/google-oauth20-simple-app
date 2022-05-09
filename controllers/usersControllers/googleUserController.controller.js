const passport = require('passport');

const {
   handleAuthenticate,
   handleCallback
} = require('../../config/passport/google.auth');

function httpGetAuthenticate(req, res) {
   handleAuthenticate(req, res)
}

function httpGetCallback(req, res) {
   handleCallback(req, res)
}



module.exports = {
   httpGetAuthenticate,
   httpGetCallback,
}