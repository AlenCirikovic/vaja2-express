const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
    title: String,
    description: String,
    createdAt: { type: Date, default: Date.now },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    acceptedAnswer: { type: mongoose.Schema.Types.ObjectId, ref: 'Answer' }
  });

  
  module.exports = mongoose.models.Question || mongoose.model('Question', QuestionSchema);