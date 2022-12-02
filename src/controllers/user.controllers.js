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

module.exports = {
  createUser,
};
