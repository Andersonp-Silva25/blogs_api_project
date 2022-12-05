const express = require('express');
const postControllers = require('../controllers/post.controllers');
const { validateEmptyFields } = require('../middlewares/validateBlogPost');
const { validateToken } = require('../middlewares/validateJWT');

const postRouters = express.Router();

postRouters.post('/', validateToken, validateEmptyFields, postControllers.createBlogPost);
postRouters.get('/', validateToken, postControllers.getAllPosts);
postRouters.get('/:id', validateToken, postControllers.getPostById);

module.exports = postRouters;