import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import createMotionConfig from '../../utils/fadeIn';
import styles from './AudioPlayerButton.module.css';

function AudioPlayerButton() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
    }
  }, []);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <motion.div {...createMotionConfig('down', 1)} className={styles.wrapper}>
      <button
        onClick={togglePlayPause}
        aria-pressed={isPlaying}
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
        className={`${styles.button} ${isPlaying ? styles.playing : ''}`}
      >
        <span className="sr-only">{isPlaying ? 'Pause' : 'Play'}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          viewBox="0 0 32 32"
          width="24"
          height="24"
          className={styles.musicNote}
          fill="currentColor"
        >
          <path d="M29.439 1.392c-0.122-0.089-0.274-0.142-0.439-0.142-0.085 0-0.166 0.014-0.242 0.040l0.005-0.002-18.001 6c-0.3 0.103-0.513 0.383-0.513 0.712v14.554c-0.845-0.792-1.984-1.279-3.237-1.279-2.616 0-4.737 2.121-4.737 4.737s2.121 4.737 4.737 4.737c2.616 0 4.737-2.121 4.737-4.737 0-0.005 0-0.009-0-0.014v0.001-10.459l16.5-5.5v9.514c-0.845-0.792-1.984-1.279-3.237-1.279-2.616 0-4.737 2.121-4.737 4.737s2.121 4.737 4.737 4.737c2.616 0 4.737-2.121 4.737-4.737 0-0.005 0-0.009-0-0.014v0.001-21c0-0 0-0.001 0-0.001 0-0.249-0.121-0.47-0.308-0.606l-0.002-0.002zM7 29.25c-1.795 0-3.25-1.455-3.25-3.25s1.455-3.25 3.25-3.25c1.795 0 3.25 1.455 3.25 3.25v0c-0.002 1.794-1.456 3.248-3.25 3.25h-0zM11.75 8.541l16.5-5.5v5.418l-16.5 5.5zM25 26.25c-1.795 0-3.25-1.455-3.25-3.25s1.455-3.25 3.25-3.25c1.795 0 3.25 1.455 3.25 3.25v0c-0.001 1.794-1.456 3.249-3.25 3.25h-0z"></path>
        </svg>
      </button>

      <audio
        ref={audioRef}
        src="/memories-of-school.mp3"
        type="audio/mpeg"
        loop
      />
    </motion.div>
  );
}

export default AudioPlayerButton;
