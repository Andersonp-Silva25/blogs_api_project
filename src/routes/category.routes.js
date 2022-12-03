const express = require('express');
const categoryController = require('../controllers/category.controllers');
const { validateName } = require('../middlewares/validateCategory');
const { validateToken } = require('../middlewares/validateJWT');

const categoriesRouter = express.Router();

categoriesRouter.post('/', validateToken, validateName, categoryController.createCategory);
categoriesRouter.get('/', validateToken, categoryController.getAllCategories);

module.exports = categoriesRouter;