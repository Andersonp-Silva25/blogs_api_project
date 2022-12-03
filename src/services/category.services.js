const { Category } = require('../models');

const createCategory = async (name) => {
  const { null: id } = await Category.create(name);
  const newCategory = await Category.findByPk(id);
  
  return { type: null, message: newCategory };
};

module.exports = {
  createCategory,
};