const express = require('express');
const router = express.Router();

const Post = require('../models/post.model');

router.get('/posts', async (req, res) => {
  try {
    const result = await Post
      .find({status: 'published'})
      .select('author created updated title text photo')
      .sort({created: -1});
    if(!result) res.status(404).json({ post: 'Not found' });
    else res.json(result);
  }
  catch(err) {
    res.status(500).json(err);
  }
});

router.get('/posts/:id', async (req, res) => {
  try {
    const result = await Post
      .findById(req.params.id);
    if(!result) res.status(404).json({ post: 'Not found' });
    else res.json(result);
  }
  catch(err) {
    res.status(500).json(err);
  }
});

router.post('/posts', async (req, res) => {
  try {
    const { 
      author,
      // authorName,
      created,
      location,
      phone,
      photo,
      price,
      status,
      text,
      title,
      updated,
    } = req.body;
    const newPost = new Post({ 
      author: author,
      // authorName: authorName,
      created: created,
      location: location,
      phone: phone,
      photo: photo,
      price: price,
      status: status,
      text: text,
      title: title,
      updated: updated,
    });
    await newPost.save();
    res.json({ message: 'OK' });
  } 
  catch(err) {
    console.log('TU ERROR');
    res.status(500).json({ message: err });
  }
});

router.put('/posts/:id', async (req, res) => {
  const { 
    location,
    phone,
    photo,
    price,
    text,
    title,
    updated,
  } = req.body;
  try {
    const post = await Post.findById(req.params.id);
    if(post) {
      await Post.updateOne(
        {
          _id: req.params.id 
        }, 
        { 
          $set: { 
            location: location,
            phone: phone,
            photo: photo,
            price: price,
            text: text,
            title: title,
            updated: updated,
          }
        }
      );
      res.json({ message: 'OK', editedDocument: post });
    }
    else res.status(404).json({ message: 'Not found...' });
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
});

router.delete('/posts/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if(post) {
      await Post.deleteOne({ _id: req.params.id });
      res.json({ message: 'OK', deletedDocument: post });
    }
    else res.status(404).json({ message: 'Not found...' });
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
});

module.exports = router;
