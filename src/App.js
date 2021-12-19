import React from 'react';
import './Style/App.css';
import Song from './Components/songs';
import Player from './Components/player';

function App() {
  return (
    <div>
      <Song></Song>
      <Player></Player>
    </div>
  )
}
export default App;