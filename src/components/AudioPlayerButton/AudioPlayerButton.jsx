import { useState, useRef } from 'react';

function AudioPlayerButton() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
      <button
        onClick={togglePlayPause}
        aria-pressed={isPlaying}
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          borderRadius: '5px',
          backgroundColor: isPlaying ? '#d9534f' : '#5cb85c',
          color: 'white',
          cursor: 'pointer',
        }}
      >
        {isPlaying ? 'Pause' : 'Play'}
      </button>

      <audio ref={audioRef} src="/memories-of-school.mp3" loop />
    </div>
  );
}

export default AudioPlayerButton;
