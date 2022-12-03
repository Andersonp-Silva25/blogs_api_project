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
    const { message } = await userService.getAllUsers();
    return res.status(200).json(message);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const { type, message } = await userService.getUserById(id);

    if (type) return res.status(type).json({ message });

    return res.status(200).json(message);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
};
