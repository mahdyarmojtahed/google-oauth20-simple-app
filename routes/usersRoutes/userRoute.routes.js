const express = require('express');
const userRouter = express.Router();

const {
   httpGetLogout
} = require('../../controllers/usersControllers/userController.contoller');


userRouter.get('/logout', httpGetLogout);

module.exports = userRouter;