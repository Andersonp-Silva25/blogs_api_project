const postServices = require('../services/post.services');

const createBlogPost = async (req, res) => {
  try {
    const post = req.body;
    const { authorization: token } = req.headers;
    
    const { type, message } = await postServices.createBlogPost(token, post);

    if (type) return res.status(type).json({ message });

    return res.status(201).json(message);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const getAllPosts = async (_req, res) => {
  try {
    const { message } = await postServices.getAllPosts();
  
    return res.status(200).json(message);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const getPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const { type, message } = await postServices.getPostById(id);
  
    if (type) return res.status(type).json({ message });

    return res.status(200).json(message);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const putBlogPost = async (req, res) => {
  try {
    const { id } = req.params;
    const { authorization: idToken } = req.headers;
    const data = req.body;
    const { type, message } = await postServices.putBlogPost(idToken, id, data);
  
    if (type) return res.status(type).json({ message });

    return res.status(200).json(message);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const deleteBlogPost = async (req, res) => {
  try {
    const { id } = req.params;
    const { authorization: idToken } = req.headers;
    const { type, message } = await postServices.deleteBlogPost(idToken, id);
  
    if (type) return res.status(type).json({ message });

    return res.status(204).end();
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const getPostByQuery = async (req, res) => {
  try {
    const { q } = req.query;
    const { message } = await postServices.getPostByQuery(q);

    return res.status(200).json(message);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = {
  createBlogPost,
  getAllPosts,
  getPostById,
  putBlogPost,
  deleteBlogPost,
  getPostByQuery,
};