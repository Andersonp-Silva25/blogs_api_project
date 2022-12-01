const { createToken } = require('../auth/jwtFunctions');
const { User } = require('../models');

const getEmailAndPassword = async (email, password) => {
  const emailAndPassword = await User.findOne({ where: { email, password } });
  
  if (!emailAndPassword) return { type: 400, message: 'Invalid fields' };
  
  const { password: _password, ...userWithoutPassword } = emailAndPassword.dataValues;
  const token = createToken(userWithoutPassword);

  return { type: null, message: token };
};

module.exports = {
  getEmailAndPassword,
};