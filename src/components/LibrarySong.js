import React from "react";


const LibrarySong = ({song, songs, setCurrentSong, id, audioRef, isPlaying, currentSong, setSongs}) => {
    const songSelectHandler = async () => {
        const selectedSong = songs.filter((state) => state.id === id)
        await setCurrentSong(selectedSong[0])
        // Add Active State
        const newSongs = songs.map((song) => {
            if(song.id ===id) {
                return {
                    ...song,
                    active: true,
                }
            } else {
                return {
                    ...song,
                    active: false,
                }
            }
        })
        setSongs(newSongs)
        if (isPlaying) {
            audioRef.current.play()
        }
        if(isPlaying) {
            const playPromise = audioRef.current.play()
            if(playPromise.then !== undefined) {
                playPromise.then((audio) => {
                    audioRef.current.play()
                })
            }
        }
    }
    return(
        <div onClick={songSelectHandler} className={`library-song ${song.id === currentSong.id ? "selected" : ""} `}>
            <img alt={song.name} src={song.cover}></img>
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
        
        
    )
};

export default LibrarySong;