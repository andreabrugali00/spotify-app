// src/routes/authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.get('/spotify', authController.spotifyLogin);
router.get('/spotify/callback', authController.spotifyCallback, authController.redirectProfile);
router.get('/logout', authController.logout);

module.exports = router;
