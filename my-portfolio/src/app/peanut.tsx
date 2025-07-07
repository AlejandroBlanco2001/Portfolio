'use client'

import { motion } from 'framer-motion'
import { useRef, useState } from 'react'

const bananaArt = String.raw`
░░░░░░░░░░░░░░░▄▀▀▀▄░░░░░░░░░░░░░
░░░░░░░░░░░░░░░█░░░█▄░░░░░░░░░░░░
░░░░░░░░░░░░░░█▀░░░░█▄░░░░░░░░░░░
░░░░░░░░░░░░▄▄█▄░▄▄▄▄█░░░░░░░░░░░
░░░░░░░░░░░█░▄▄░█░▄▄░██░░░░░░░░░░
░▄▀▀▀█▄░░░░█░▀▀░█░▀▀░██░░░░░▄█▀▀▄
░█░░░░█░░░░░▀█▀▀░▀▀▀▀▄█░░░░░█░░░█
░▀▄▄▄██░░░░░░█▄▄▄▄▄▄░▀█░░░░░██▄▄▀
░░░░░░▀█▄░░░░█▄░░░░▄▀░█░░░▄█▀░░░░
░░░░░░░░▀▀▀▀▀█░▀▀▀▀░░▄█▀▀▀▀░░░░░░
░░░░░░░░░░░░░█░░░░░░░█░░░░░░░░░░░
░░░░░░░░░░░░░█░░░░░░█▀░░░░░░░░░░░
░░░░░░░░░░░░░█░░░░░▄█░░░░░░░░░░░░
░░░░░░░░░░░░░████▄██░░░░░░░░░░░░░
░░░░░░░░░░░░░█░░░░░█░░░░░░░░░░░░░
░░░░░░░░░░░░█▀░░░░░▀█░░░░░░░░░░░░
░░░░░░░░▄▄▄▄█░░░░░░░█▄▄░░░░░░░░░░
░░░░░░█▀░░░░▀█░░░░█▀░░░▀█░░░░░░░░
░░░░░░▀▀▀▀▀▀▀░░░░░░▀▀▀▀▀▀░░░░░░░░
`

export default function Peanut() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio('/peanut.mp3');
      audioRef.current.loop = true;
    }

    audioRef.current.play().then(() => {
      setIsPlaying(true);
    }).catch(err => {
      console.error('Autoplay blocked:', err);
    });
  };

  const handleStop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-2">
      <motion.pre
        className="text-[6px] font-mono whitespace-pre leading-none"
        animate={{ x: 0 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {bananaArt}
      </motion.pre>

      {!isPlaying ? (
        <button
          onClick={handlePlay}
          className="font-mono text-sm text-green-400 hover:text-green-300 transition"
        >
          $ ./start-dance.sh
        </button>
      ) : (
        <button
          onClick={handleStop}
          className="font-mono text-sm text-red-400 hover:text-red-300 transition"
        >
          $ killall dance
        </button>
      )}
    </div>
  );
}
