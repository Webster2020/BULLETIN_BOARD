const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  author: { type: String, required: true },
  authorName: { type: String }, 
  created: { type: String, required: true },
  location: { type: String },
  phone: { type: String },
  photo: { type: String },
  price: { type: String },
  status: { type: String, required: true },
  text: { type: String, required: true },
  title: { type: String, required: true },
  updated: { type: String, required: true },
});

module.exports = mongoose.model('Post', postSchema);
