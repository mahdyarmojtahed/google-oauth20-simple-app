const {
   handleLogout,
} = require('../../config/passport/passport.config');

function httpGetLogout(req, res) {
   handleLogout(req, res);
}


module.exports = {
   httpGetLogout,
}