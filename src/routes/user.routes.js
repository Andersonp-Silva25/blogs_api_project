const express = require('express');
const userController = require('../controllers/user.controllers');
const { validateName, validateEmail, validatePassword } = require('../middlewares/validateUser');
const { validateToken } = require('../middlewares/validateJWT');

const userRouter = express.Router();

userRouter.post('/', validateName, validateEmail, validatePassword, userController.createUser);
userRouter.get('/', validateToken, userController.getAllUsers);
userRouter.get('/:id', validateToken, userController.getUserById);

module.exports = userRouter;