// backend/src/app.js
require('dotenv').config();
const express = require('express');
const session = require('express-session');
const passport = require('passport');
require('../config/passport.js');

const app = express();
const port = process.env.PORT || 3001;

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());

const authRoutes = require('../routes/authRoutes');
const playlistRoutes = require('../routes/playlistRoutes');

app.use('/auth', authRoutes);
app.use('/playlists', playlistRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
