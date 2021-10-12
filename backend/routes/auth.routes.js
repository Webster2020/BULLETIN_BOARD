const express = require('express');
const passport = require('passport');
const router = express.Router();

router.get('/google',
  passport.authenticate('google', { scope: ['email', 'profile'] }));

// router.get('/google', console.log('DUPA !!!'));

router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/post/del' }),
  (req, res) => {
    console.log('CALLBACK IS HERE');
    res.render('correct login');
  }
);

router.get('/auth/logout', (req, res) => {
  res.render('logout');
});

module.exports = router;