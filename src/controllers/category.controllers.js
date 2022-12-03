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

const getAllCategories = async (_req, res) => {
  try {
    const { message } = await categoryService.getAllCategories();
    
    return res.status(200).json(message);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  createCategory,
  getAllCategories,
};