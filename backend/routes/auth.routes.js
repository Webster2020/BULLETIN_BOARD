const express = require('express');
const passport = require('passport');
const router = express.Router();

router.get('/google',
  passport.authenticate('google', { scope: ['email', 'profile'] }));

router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/user/no-permission' }),
  (req, res) => {
    // res.render('correct login');
    res.redirect('/user/logged');
  }
);

router.get('/auth/logout', (req, res) => {
  res.render('logout');
});

module.exports = router;