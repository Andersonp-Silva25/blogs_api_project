const { Category } = require('../models');

const createCategory = async (name) => {
  const { null: id } = await Category.create(name);
  const newCategory = await Category.findByPk(id);
  
  return { type: null, message: newCategory };
};

const getAllCategories = async () => {
  const categories = await Category.findAll();

  return { type: null, message: categories };
};

module.exports = {
  createCategory,
  getAllCategories,
};