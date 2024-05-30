// src/controllers/authController.js
const passport = require('passport');

exports.spotifyLogin = passport.authenticate('spotify', {
  scope: ['user-read-email', 'user-read-private', 'playlist-read-private', 'playlist-read-collaborative']
});

exports.spotifyCallback = passport.authenticate('spotify', { failureRedirect: '/' });

exports.redirectProfile = (req, res) => {
  res.redirect('/profile');
};

exports.logout = (req, res) => {
  req.logout();
  res.redirect('/');
};
