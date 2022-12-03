const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'HakunaMatata';

const validateToken = async (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) return res.status(401).json({ message: 'Token not found' });

  try {
    const decoded = jwt.verify(token, secret);
    if (decoded) return next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = { validateToken };