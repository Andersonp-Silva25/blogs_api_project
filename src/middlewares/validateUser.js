const Joi = require('joi');

const validateLength = (min, parameter) => {
  const schema = Joi.string().min(min).required();
  return schema.validate(parameter).error;
};

const validateName = (req, res, next) => {
  const { displayName } = req.body;
  const checkName = validateLength(8, displayName);
  if (checkName) {
    return res.status(400)
              .json({ message: '"displayName" length must be at least 8 characters long' });
  }

  return next();
};

const validateEmail = (req, res, next) => {
  const { email } = req.body;
  const emailRegex = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/;
  const checkEmail = emailRegex.test(email);

  if (!checkEmail) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }

  return next();
};

const validatePassword = (req, res, next) => {
  const { password } = req.body;
  const checkPassword = validateLength(6, password);
  if (checkPassword) {
    return res.status(400)
              .json({ message: '"password" length must be at least 6 characters long' });
  }

  return next();
};

module.exports = {
  validateName,
  validateEmail,
  validatePassword,
};