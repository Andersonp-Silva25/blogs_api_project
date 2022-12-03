const categoryService = require('../services/category.services');

const createCategory = async (req, res) => {
  try {
    const category = req.body;
    const { message } = await categoryService.createCategory(category);

    return res.status(201).json(message);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  createCategory,
};