// src/controllers/playlistController.js
const axios = require('axios');

exports.getPlaylists = async (req, res) => {
  if (!req.isAuthenticated()) {
    return res.redirect('/auth/spotify');
  }

  try {
    const response = await axios.get('https://api.spotify.com/v1/me/playlists', {
      headers: {
        'Authorization': `Bearer ${req.user.accessToken}`
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error retrieving playlists');
  }
};
