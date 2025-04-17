const mongoose = require('mongoose');

const AnswerSchema = new mongoose.Schema({
    content: String,
    createdAt: { type: Date, default: Date.now },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    question: { type: mongoose.Schema.Types.ObjectId, ref: 'Question' }
  });
  module.exports = mongoose.model('Answer', AnswerSchema);
  