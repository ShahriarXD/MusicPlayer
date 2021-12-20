import React , {useState }from 'react';
import './Style/App.css';
import Song from './Components/songs';
import Player from './Components/player';
import data from './Components/utli'
function App() {
  // State to Fetch the Data from util
  const [song, setSong] = useState(data());
  const [currentSong ,setCurrentSong] = useState(song[0]);
  const [isPlaying ,setIsPlaying] = useState(false);
  return (
    <div>
      <Song currentSong={currentSong}></Song>
      <Player 
      currentSong={currentSong} 
      isPlaying={isPlaying}
      setIsPlaying={setIsPlaying}
      ></Player>
    </div>
  )
}
export default App;