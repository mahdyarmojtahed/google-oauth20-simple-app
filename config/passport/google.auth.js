const passport = require('passport');
const googleStrategy = require('passport-google-oauth20').Strategy;
require('dotenv').config();

const {
   checkDb,
   saveUserToDb
} = require('../db/mongo.worker');

const config = {
   CLIENT_ID: process.env.CLIENT_ID,
   CLIENT_SECRET: process.env.CLIENT_SECRET,
}

const AUTH_OPTIONS = {
   callbackURL: 'http://localhost:3000/auth/google/callback',
   clientID: config.CLIENT_ID,
   clientSecret: config.CLIENT_SECRET,
}

async function verifyCallback(accessToken, refreshToken, profile, done) {
   console.log('Google Profile : ', profile);
   if(await checkDb(profile.emails[0].value)) {
      console.log('A user with this email already exists in the database');
   } else {
      saveUserToDb(profile)
   }
   
   return done(null, profile);
}




passport.use(new googleStrategy(AUTH_OPTIONS, verifyCallback));

passport.serializeUser((user, cb) => {
   cb(null, user);
});

passport.deserializeUser((obj, cb) => {
   cb(null, obj);
});




function handleAuthenticate(req, res) {
   passport.authenticate('google', {
      scope: ['email', 'profile']
   })(req, res)
}

function handleCallback(req, res) {
   passport.authenticate('google', {
      failureRedirect: '/failure',
      successRedirect: '/',
      session: true
   })(req,res)
}


module.exports = {
   handleAuthenticate,
   handleCallback
}