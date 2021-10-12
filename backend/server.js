const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');

// ----------->
// const passport = require('passport');
// const session = require('express-session');
// require('./config/passport');
// require('dotenv').config();
// -----------<

const postsRoutes = require('./routes/posts.routes');
const userRoutes = require('./routes/user.routes');
// ----------->
// const authRoutes = require('./routes/auth.routes');
// const userRoutes = require('./routes/user.routes');
// -----------<

const app = express();

/* MIDDLEWARE */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ----------->
// init session mechanism
// app.use(session({ secret: 'anything' }));
// init passport
// app.use(passport.initialize());
// app.use(passport.session());
// -----------<

/* API ENDPOINTS */
app.use('/api', postsRoutes);
app.use('/user', userRoutes);
// ----------->
// app.use('/auth', authRoutes);
// app.use('/user', userRoutes);
// -----------<

/* API ERROR PAGES */
app.use('/api', (req, res) => {
  res.status(404).send({ post: 'Not found...' });
});
app.use('/user', (req, res) => {
  res.status(404).send({ user: 'Not found...' });
});

/* REACT WEBSITE */
app.use(express.static(path.join(__dirname, '../build')));
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

/* MONGOOSE */
mongoose.connect('mongodb://localhost:27017/bulletinBoard', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.once('open', () => {
  console.log('Successfully connected to the database');
});
db.on('error', err => console.log('Error: ' + err));

/* START SERVER */
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log('Server is running on port: '+port);
});
