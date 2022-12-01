const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'Xablauzinho da Massa';

const jwtConfig = {
  algorithm: 'HS256',
  expiresIn: '15min',
};

const createToken = (userWithoutPassword) => {
  const token = jwt.sign({ date: userWithoutPassword }, secret, jwtConfig);

  return token;
};

module.exports = {
  createToken,
};