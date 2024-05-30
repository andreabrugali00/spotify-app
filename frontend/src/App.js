import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    axios.get('/playlists/')
      .then(response => {
        // Verifica se la risposta contiene un array di playlist
        console.log(response.data)
        if (Array.isArray(response.data.items)) {
          setPlaylists(response.data.items);
        } else {
          console.error('Invalid data format:', response.data);
        }
      })
      .catch(error => {
        console.error('Error fetching playlists:', error);
      });
  }, []);

  return (
    <div>
      <h1>Playlist</h1>
      <ul>
        {playlists.map(playlist => (
          <li key={playlist.id}>{playlist.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
