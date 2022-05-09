const user = require('../../models/user.model.mongo');

async function checkDb(email) {
   return await user.findOne({
      email: email
   });
}

async function saveUserToDb(profile) {
   const userID = profile.id;
   const displayName = profile.displayName;
   const email = profile.emails[0].value;
   const photoURL = profile.photos[0].value;
   
   const newUser = {
      id: userID,
      createdAt: new Date(),
      name: displayName,
      email: email,
      photoURL: photoURL,
      status: 'Active'
   }

   user.create(newUser)
}

module.exports = {
   checkDb,
   saveUserToDb
}