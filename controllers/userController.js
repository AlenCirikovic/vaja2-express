const User = require('../models/userModel');

exports.user_list = async (req, res) => {
  res.send(await User.find());
};

exports.user_detail = async (req, res) => {
  res.send(await User.findById(req.params.id));
};

exports.user_create = async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.send(user);
};

exports.user_update = async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(user);
};

exports.user_delete = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.send({ message: 'Deleted' });
};
