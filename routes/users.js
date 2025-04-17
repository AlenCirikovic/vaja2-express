const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

router.get('/register', (req, res) => res.render('register'));
router.post('/register', async (req, res) => {
  const hashed = await bcrypt.hash(req.body.password, 10);
  const user = new User({ username: req.body.username, password: hashed });
  await user.save();
  res.redirect('/users/login');
});

router.get('/login', (req, res) => res.render('login'));
router.post('/login', async (req, res) => {
  const user = await User.findOne({ username: req.body.username });
  if (user && await bcrypt.compare(req.body.password, user.password)) {
    req.session.user = user;
    res.redirect('/questions');
  } else {
    res.redirect('/users/login');
  }
});

router.get('/logout', (req, res) => {
  req.session.destroy(() => res.redirect('/'));
});

module.exports = router;