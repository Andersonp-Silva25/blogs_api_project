const validateEmptyFields = async (req, res, next) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  return next();
};

const validateCategoryIds = async (req, res, next) => {
  const { categoryIds } = req.body;

  if (categoryIds === undefined) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  if (!categoryIds.length) {
    return res.status(400).json({ message: 'one or more "categoryIds" not found' });
  }

  return next();
};

module.exports = {
  validateEmptyFields,
  validateCategoryIds,
};