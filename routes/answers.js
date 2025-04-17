const express = require('express');
const router = express.Router();
const Answer = require('../models/Answer');
const Question = require('../models/Question');

router.post('/:questionId', async (req, res) => {
  if (!req.session.user) return res.redirect('/users/login');
  const answer = new Answer({
    content: req.body.content,
    user: req.session.user._id,
    question: req.params.questionId
  });
  await answer.save();
  res.redirect('/questions/' + req.params.questionId);
});

router.post('/:id/accept', async (req, res) => {
  const answer = await Answer.findById(req.params.id);
  const question = await Question.findById(answer.question);
  if (question.user.toString() === req.session.user._id.toString()) {
    question.acceptedAnswer = answer._id;
    await question.save();
  }
  res.redirect('/questions/' + question._id);
});

module.exports = router;
