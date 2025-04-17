const Question = require('../models/questionModel');

exports.question_list = async (req, res) => {
  res.send(await Question.find().populate('author').sort({ createdAt: -1 }));
};

exports.question_detail = async (req, res) => {
  res.send(await Question.findById(req.params.id).populate('author acceptedAnswer'));
};

exports.question_create = async (req, res) => {
  const question = new Question(req.body);
  await question.save();
  res.send(question);
};

exports.question_update = async (req, res) => {
  const question = await Question.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(question);
};

exports.question_delete = async (req, res) => {
  await Question.findByIdAndDelete(req.params.id);
  res.send({ message: 'Deleted' });
};
