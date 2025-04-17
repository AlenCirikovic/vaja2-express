var express = require('express');
var router = express.Router();

router.get('/new', (req, res) => {
    if (!req.session.user) return res.redirect('/login');
    res.render('new-question');
});

router.post('/', async (req, res) => {
    if (!req.session.user) return res.redirect('/login');
    const question = new Question({
        title: req.body.title,
        description: req.body.description,
        author: req.session.user._id,
        createdAt: new Date()
    });
    await question.save();
    res.redirect('/questions');
});

router.get('/', async (req, res) => {
    const questions = await Question.find().populate('author').sort({ createdAt: -1 });
    res.render('questions', { questions });
});

router.get('/:id', async (req, res) => {
    const question = await Question.findById(req.params.id).populate('author acceptedAnswer');
    const answers = await Answer.find({ question: question._id }).populate('author').sort({ createdAt: -1 });
    res.render('question', { question, answers });
});



