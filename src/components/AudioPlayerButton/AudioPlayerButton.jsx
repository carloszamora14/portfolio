import { useState, useRef } from 'react';
import styles from './AudioPlayerButton.module.css';

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
    <div className={styles.wrapper}>
      <button
        onClick={togglePlayPause}
        aria-pressed={isPlaying}
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
        className={`${styles.button} ${isPlaying ? styles.playing : ''}`}
      >
        <span className="sr-only">{isPlaying ? 'Pause' : 'Play'}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={styles.musicNote}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          width="24"
          height="24"
        >
          <path d="M9 18V5l12-2v13" />
          <circle cx="6" cy="18" r="3" />
          <circle cx="18" cy="16" r="3" />
        </svg>
      </button>

      <audio ref={audioRef} src="/memories-of-school.mp3" loop />
    </div>
  );
}

export default AudioPlayerButton;
