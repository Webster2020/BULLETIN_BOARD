const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  author: { type: String, required: true },
  created: { type: String, required: true },
  updated: { type: String, required: true },
  status: { type: String, required: true },
  title: { type: String, required: true },
  text: { type: String, required: true },
  photo: { type: String },
  price: { type: Number },
  phone: { type: String },
  location: { type: String },
});

module.exports = mongoose.model('Post', postSchema);
