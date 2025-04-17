var express = require('express');
var router = express.Router();

router.post('/', async (req, res) => {
    if (!req.session.user) return res.redirect('/login');
    const answer = new Answer({
        content: req.body.content,
        author: req.session.user._id,
        question: req.body.questionId,
        createdAt: new Date()
    });
    await answer.save();
    res.redirect(`/questions/${req.body.questionId}`);
});

router.post('/:id/accept', async (req, res) => {
    const question = await Question.findById(req.params.id);
    if (question.author.toString() !== req.session.user._id.toString()) {
        return res.redirect(`/questions/${req.params.id}`);
    }
    question.acceptedAnswer = req.body.answerId;
    await question.save();
    res.redirect(`/questions/${req.params.id}`);
});