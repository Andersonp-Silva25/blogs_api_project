const userService = require('../services/login.services');

const getEmailAndPassword = async (req, res) => {
  try {
    const { email, password } = req.body;
    const { type, message } = await userService.getEmailAndPassword(email, password);

    if (type) return res.status(type).json({ message });

    return res.status(200).json({ token: message });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  getEmailAndPassword,
};
