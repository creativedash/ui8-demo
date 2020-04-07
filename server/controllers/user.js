const User = require("../models/user");

exports.single = async (req, res) => {
  // const { userId } = req.params;

  const user = await User.findOne({});

  return res.json(user);
};
