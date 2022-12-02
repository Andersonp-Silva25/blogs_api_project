const express = require('express');
const userController = require('../controllers/user.controllers');
const { validateName, validateEmail, validatePassword } = require('../middlewares/validateUser');

const userRouter = express.Router();

userRouter.post('/', validateName, validateEmail, validatePassword, userController.createUser);

module.exports = userRouter;