const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'HakunaMatata';

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