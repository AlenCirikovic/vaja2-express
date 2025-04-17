const Answer = require('../models/answerModel');

exports.answer_list = async (req, res) => {
  res.send(await Answer.find().populate('author question').sort({ createdAt: -1 }));
};

exports.answer_detail = async (req, res) => {
  res.send(await Answer.findById(req.params.id).populate('author question'));
};

exports.answer_create = async (req, res) => {
  const answer = new Answer(req.body);
  await answer.save();
  res.send(answer);
};

exports.answer_update = async (req, res) => {
  const answer = await Answer.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(answer);
};

exports.answer_delete = async (req, res) => {
  await Answer.findByIdAndDelete(req.params.id);
  res.send({ message: 'Deleted' });
};
