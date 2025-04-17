const express = require('express');
const router = express.Router();
const Question = require('../models/Question');
const Answer = require('../models/Answer');

router.get('/', async (req, res) => {
  const questions = await Question.find().populate('user').sort({ createdAt: -1 });
  res.render('questions/index', { questions });
});

router.get('/new', (req, res) => {
  if (!req.session.user) return res.redirect('/users/login');
  res.render('questions/new');
});

router.post('/', async (req, res) => {
  const question = new Question({
    title: req.body.title,
    description: req.body.description,
    user: req.session.user._id
  });
  await question.save();
  res.redirect('/questions');
});

router.get('/:id', async (req, res) => {
  const question = await Question.findById(req.params.id).populate('user acceptedAnswer');
  const answers = await Answer.find({ question: question._id }).populate('user').sort({ createdAt: 1 });
  res.render('questions/show', { question, answers });
});

module.exports = router;
