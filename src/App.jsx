import { useState, useEffect } from 'react'
import Login from './components/Login/Login'
import Player from './components/Player/Player'
import './App.css'
import { useDataLayerValue } from './context/DataLayer'
import { getTokenFromUrl } from './components/Login/auth'
import SpotifyWebApi from 'spotify-web-api-js'

const spotify = new SpotifyWebApi();

function App() {
  // La siguiente linea de codigo se puede reutilizar en cualquier parte del arbol de componentes y nos permite traer cualquier dato del DataLayer
  const [{ user, token }, dispatch] = useDataLayerValue();

  // Corre código basado en una condición dada
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if(_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token
      })

      // entrega el access token a la API de Spotify
      spotify.setAccessToken(_token);
      
      // Nos trae los datos del user que acaba de loguearse
      spotify.getMe().then( user => {

        dispatch({
          type: 'SET_USER',
          // same as user: user
          user,
        })
      });
    }
  }, []);

  console.log("🥵", user);
  console.log("👽", token);


  return (
    <div className="App">
      { 
        token 
          ? <Player spotify={spotify}/>
          : <Login />
      }
    </div>
  )
}

export default App
