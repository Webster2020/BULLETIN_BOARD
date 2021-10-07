const express = require('express');
const router = express.Router();

const isLogged = (req, res, next) => {
  if (req.user === undefined) {
    res.redirect('/user/no-permission');
    //console.log(req.user);
  } else {
    next();
  }
};

router.get('/logged', (req, res) => {
  req.user
    ? res.render('logged', {
        name: `${req.user.name.givenName} ${req.user.name.familyName}`,
        avatar: req.user.photos[0].value,
      })
    : res.redirect('no-permission');

  console.log('======================');
  console.log('====  user DATA:  ====');
  console.log('======================');
  console.log(req.user);
  console.log('======================');

});

// router.get('/logged', (req, res) => {
//   res.render('logged');
// });

router.get('/no-permission', (req, res) => {
  res.render('noPermission');
});

router.get('/profile', isLogged, (req, res) => {
  res.render('profile', {
    name: `${req.user.name.givenName} ${req.user.name.familyName}`,
    email: req.user.emails[0].value,
  });
});

module.exports = router;