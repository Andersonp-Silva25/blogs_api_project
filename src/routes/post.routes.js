const express = require('express');
const postControllers = require('../controllers/post.controllers');
const { validateEmptyFields, validateCategoryIds } = require('../middlewares/validateBlogPost');
const { validateToken } = require('../middlewares/validateJWT');

const postRouters = express.Router();

postRouters.post(
  '/', validateToken, validateEmptyFields, validateCategoryIds, postControllers.createBlogPost,
);
postRouters.get('/', validateToken, postControllers.getAllPosts);
postRouters.get('/search', validateToken, postControllers.getPostByQuery);
postRouters.get('/:id', validateToken, postControllers.getPostById);
postRouters.put('/:id', validateToken, validateEmptyFields, postControllers.putBlogPost);
postRouters.delete('/:id', validateToken, postControllers.deleteBlogPost);

module.exports = postRouters;