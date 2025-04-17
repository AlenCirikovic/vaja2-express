const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date },
  acceptedAnswer: { type: mongoose.Schema.Types.ObjectId, ref: 'Answer' }
});

module.exports = mongoose.model('Question', QuestionSchema);
