const express = require('express');
const router = express.Router();

const User = require('../models/user.model');

router.get('/all', async (req, res) => {
  try {
    const result = await User
      .find()
      .select('name email password')
      .sort({name: -1});
    if(!result) res.status(404).json({ user: 'Not found' });
    else res.json(result);
  }
  catch(err) {
    res.status(500).json(err);
  }
});

router.get('/login', async (req, res) => {
  try {
    const result = await User
      .findOne(
        {
          email: req.body.email,
          password: req.body.password
        }
      )
    if(!result) res.status(404).json({ user: 'Not found' });
    else res.json(result);
  }
  catch(err) {
    res.status(500).json(err);
  }
});

router.post('/register', async (req, res) => {
  try {
    const {name, email, password} = req.body;
    const newUser = new User({ 
      name: name,
      email: email,
      password: password,
    });
    const result = await User
      .findOne({email: req.body.email})
    if(!result) {
      await newUser.save();
      res.json({ message: 'REGISTER: <OK>' });
    } else {
      res.json({ message: 'REGISTER: <EMAIL EXITS>' });
    }
  } 
  catch(err) {
    console.log('ERROR WITH REGISTER 500');
    res.status(500).json({ message: err });
  }
});

module.exports = router;