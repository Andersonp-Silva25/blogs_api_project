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

const getAllUsers = async () => {
  const users = await User.findAll();
  const usersWithoutPassword = users.map((user) => {
    const { password: _password, ...deletePassword } = user.dataValues;
    return deletePassword;
  });
  return usersWithoutPassword;
};

module.exports = {
  createUser,
  getAllUsers,
};