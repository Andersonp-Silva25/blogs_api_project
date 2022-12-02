const { createToken } = require('../auth/jwtFunctions');
const { User } = require('../models');

const createUser = async (user) => {
  const { email } = user;
  const getEmail = await User.findOne({ where: { email } });
  
  if (!getEmail) {
    const newUser = await User.create(user);

    const { password: _password, ...userWithoutPassword } = newUser.dataValues;
    const token = createToken(userWithoutPassword);
    
    return { type: null, message: token };
  }

  return { type: 409, message: 'User already registered' };
};

module.exports = {
  createUser,
};