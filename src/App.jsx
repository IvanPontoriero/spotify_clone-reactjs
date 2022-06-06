import { useState, useEffect } from 'react'
import Login from './components/Login/Login'
import Player from './components/Player/Player'
import './App.css'
import { getTokenFromUrl } from './components/Login/auth'
import SpotifyWebApi from 'spotify-web-api-js'

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);

  // Corre código basado en una condición dada
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if(_token) {
      setToken(_token);
      // entrega el access token a la API de Spotify
      spotify.setAccessToken(_token);

      // Nos trae los datos del user que acaba de loguearse
      spotify.getMe().then( user => {
        console.log('👤', user)
      });
    }

    console.log("I HAVE A TOKEN 🦾", token);
  }, []);

  return (
    <div className="App">
      { 
        token 
          ? <Player />
          : <Login />
      }
    </div>
  )
}

export default App
