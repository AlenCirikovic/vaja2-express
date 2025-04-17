const express = require('express');
const router = express.Router();
const Question = require('../models/Question');

/* GET home page. */
router.get('/', async function(req, res, next) {
  try {
    const questions = await Question.find().populate('user'); // ← pridobi vprašanja
    res.render('index', { title: 'Vsa vprašanja', questions }); // ← pošlji vprašanja v view
  } catch (err) {
    next(err);
  }
});

module.exports = router;
