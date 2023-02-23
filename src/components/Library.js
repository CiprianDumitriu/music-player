import React from 'react';
import LibrarySong from './LibrarySong';

const Library = ({songs, setCurrentSong, audioRef, isPlaying, currentSong, setSongs, libraryStatus}) => {
    return(
        <div className={`library ${libraryStatus ? "active-library" : ""}`}>
            <h2>Library</h2>
            <div className="library-songs">
                {songs.map(song => (
                    <LibrarySong 
                    songs={songs}
                    song={song} 
                    setCurrentSong={setCurrentSong} 
                    id={song.id} 
                    key={song.id}
                    audioRef={audioRef}
                    isPlaying={isPlaying}
                    currentSong={currentSong}
                    setSongs={setSongs}
                    />
                ))}
            </div>
        </div>
    )
}

export default Library;