const mongoose = require('mongoose');

const AnswerSchema = new mongoose.Schema({
  content: { type: String },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  question: { type: mongoose.Schema.Types.ObjectId, ref: 'Question' },
  createdAt: { type: Date }
});

module.exports = mongoose.model('Answer', AnswerSchema);
