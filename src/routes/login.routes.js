const express = require('express');
const loginController = require('../controllers/login.controllers');
const { validateLogin } = require('../middlewares/validateLogin');

const loginRouter = express.Router();

loginRouter.post('/', validateLogin, loginController.getEmailAndPassword);

module.exports = loginRouter;