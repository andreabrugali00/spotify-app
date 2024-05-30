// src/routes/playlistRoutes.js
const express = require('express');
const router = express.Router();
const playlistController = require('../controllers/playlistController');

router.get('/', playlistController.getPlaylists);

module.exports = router;
