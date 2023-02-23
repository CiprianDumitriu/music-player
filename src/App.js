import React, { useState, useRef } from "react";
// Styles
import Player from "./components/Player";
// Components
import Song from "./components/Song";
import "./styles/app.scss";
import Library from "./components/Library";
import Nav from "./components/Nav";
// Util
import chillHop from "./data.js"


function App() {
  // Ref
  const audioRef = useRef(null)
  // State
  const [songs, setSongs] = useState(chillHop())
  const [currentSong, setCurrentSong] = useState(songs[0])
  const [isPlaying, setIsPlaying] = useState(false)
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
})
  const [libraryStatus, setLibraryStatus] = useState(false)

  const timeUpdateHandler = (e) => {
  const current = e.target.currentTime
  const duration = e.target.duration
  // Calculate Percentage
  const roundedCurrent = Math.round(current)
  const roundedDuration = Math.round(duration)
  const animation = Math.round((roundedCurrent /roundedDuration) * 100)
  setSongInfo({...songInfo, currentTime: current, duration, animationPercentage: animation})
}
  const songEndHandler = async () => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id)   
    await setCurrentSong(songs[(currentIndex + 1) % songs.length])
    if (isPlaying) {
      audioRef.current.play()
    }
  }
  return (
    <div className="App">
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} />
      <Player 
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying} 
        currentSong={currentSong}
        audioRef={audioRef}
        setSongInfo={setSongInfo}
        songInfo={songInfo}
        libraryStatus={libraryStatus}
        songs={songs} 
        setCurrentSong={setCurrentSong}
        setSongs={setSongs}
      />
      <Library 
        songs={songs} 
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
        isPlaying={isPlaying}
        currentSong={currentSong}
        setSongs={setSongs}
        libraryStatus={libraryStatus}
      />
      <audio 
        onLoadedMetadata={timeUpdateHandler} 
        onTimeUpdate={timeUpdateHandler} 
        ref={audioRef} 
        src={currentSong.audio}>
        onended={songEndHandler}
      </audio>
    </div>
  );
}

export default App;
