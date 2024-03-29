const { createToken, decodeToken } = require('../auth/jwtFunctions');
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
  return { type: null, message: usersWithoutPassword };
};

const getUserById = async (id) => {
  const user = await User.findByPk(id);
  
  if (!user) return { type: 404, message: 'User does not exist' };
  
  const { password: _password, ...userWithoutPassword } = user.dataValues;
  return { type: null, message: userWithoutPassword };
};

const deleteUser = async (token) => {
  const { date: { id } } = decodeToken(token);
  
  await User.destroy({
    where: {
      id,
    },
  });

  return { type: null, message: 'Success' };
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  deleteUser,
};