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

module.exports = {
  createBlogPost,
};