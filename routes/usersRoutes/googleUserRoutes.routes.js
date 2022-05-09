const express = require('express');
const googleUserRouter = express.Router();

const {
   httpGetAuthenticate,
   httpGetCallback
} = require('../../controllers/usersControllers/googleUserController.controller');

googleUserRouter.get('/', httpGetAuthenticate)
googleUserRouter.get('/callback', httpGetCallback)

module.exports = googleUserRouter;