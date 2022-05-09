// Modules
const {checkLoggedIn} = require('./config/passport/passport.config');
const session = require('express-session');
const passport = require('passport');
const express = require('express');
const helmet = require('helmet');
const path = require('path');

// Routers :
const userRouter = require('./routes/usersRoutes/userRoute.routes');
const googleUserRouter = require('./routes/usersRoutes/googleUserRoutes.routes');

const app = express();


// Middlewares
app.use(express.json());
app.use(helmet());

// Session
app.use(session({
   secret: 'cookie_secret',
   resave: true,
   saveUninitialized: true,
   cookie: {
      maxAge: 1000 * 60 * 1,
   }
}));

app.use(passport.initialize());
app.use(passport.session());



// Routes :

// Generic Auth Routes
app.use('/auth', userRouter);

// Google Auth Routes
app.use('/auth/google', googleUserRouter);

// Facebook or any other provider Routes


app.get('failure', (req,res) => {
   res.send('failed to login !')
});

app.get('/secret', checkLoggedIn, (req,res) => {
   return res.send('some sensitive information');
});

app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname,'index.html'));
});


module.exports = app;