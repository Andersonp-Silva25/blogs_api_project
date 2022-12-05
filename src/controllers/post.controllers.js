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

module.exports = {
  createBlogPost,
  getAllPosts,
  getPostById,
};