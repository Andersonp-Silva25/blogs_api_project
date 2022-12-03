const userService = require('../services/user.services');

const createUser = async (req, res) => {
  try {
    const user = req.body;
    const { type, message } = await userService.createUser(user);

    if (type) return res.status(type).json({ message });

    return res.status(201).json({ token: message });
  } catch (error) {
    console.log(error.message);
  }
};

const getAllUsers = async (_req, res) => {
  try {
    const users = await userService.getAllUsers();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = {
  createUser,
  getAllUsers,
};
