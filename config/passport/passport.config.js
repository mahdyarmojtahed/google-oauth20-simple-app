
function checkLoggedIn(req, res, next) {
   const isLoggedIn = req.isAuthenticated() && req.user;
   console.log('current user is ', req.user);

   if(!isLoggedIn) {
      return res.status(401).json({
         error : 'you must log in to see this resources !'
      })
   }
   next();
}



function handleLogout(req, res) {
   if(req.isAuthenticated()) {
      req.logout();
      res.json({notif:'user logged out'});
   } else {
      res.json({notif:'already logged out'});
   }
}

module.exports = {
   handleLogout,
   checkLoggedIn
};