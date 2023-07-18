import React, { useState, useEffect } from 'react';
import logo from '/player.png';

const MusicPlayer = () => {
  const playlist = [
    {
      id: 1,
      title: 'Canción 1',
      src: '/sample-3s.mp3'
    },
    {
      id: 2,
      title: 'Canción 2',
      src: '/sample-6s.mp3'
    },
    {
      id: 3,
      title: 'Canción 3',
      src: '/sample-9s.mp3'
    }
  ];

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isLooping, setIsLooping] = useState(false);

  const currentSong = playlist[currentSongIndex];

  useEffect(() => {
    const audioElement = document.getElementById('audioElement');
    if (isLooping) {
      audioElement.loop = true;
    } else {
      audioElement.loop = false;
    }
  }, [isLooping]);

  const handlePlay = () => {
    const audioElement = document.getElementById('audioElement');
    audioElement.play();
  };

  const handlePause = () => {
    const audioElement = document.getElementById('audioElement');
    audioElement.pause();
  };

  const handleNext = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % playlist.length);
  };

  const handlePrevious = () => {
    setCurrentSongIndex((prevIndex) =>
      prevIndex === 0 ? playlist.length - 1 : prevIndex - 1
    );
  };

  const toggleLooping = () => {
    setIsLooping((prevState) => !prevState);
  };

  return (
    <div style={{ margin: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <h2>Reproductor de música</h2>
      <audio id="audioElement" src={currentSong.src}></audio>
      <h3>{currentSong.title}</h3>
      <img src={logo} alt="logo" />
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px auto'}}>
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
      <button onClick={handleNext}>Siguiente</button>
      <button onClick={handlePrevious}>Anterior</button>
      </div>
      <label>
        <input
          type="checkbox"
          checked={isLooping}
          onChange={toggleLooping}
        />{' '}
        Repetir en bucle
      </label>
    </div>
  );
};

export default MusicPlayer;
