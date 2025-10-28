import { useState, useEffect, useRef } from "react";

interface BackgroundMusicProps {
  isPlaying: boolean;
  onToggle: () => void;
}

export const BackgroundMusic = ({ isPlaying, onToggle }: BackgroundMusicProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    setIsMounted(true);
    
    // Create audio element
    const audio = new Audio("/ctm.mp3");
    audio.loop = true;
    audio.volume = 0.3; // Set to 30% volume
    audioRef.current = audio;

    // Try to autoplay after a short delay
    const timer = setTimeout(() => {
      audio.play().then(() => {
        onToggle();
      }).catch(() => {
        // Autoplay was prevented
      });
    }, 1000);

    return () => {
      clearTimeout(timer);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.play().catch((error) => {
        console.error("Audio play failed:", error);
      });
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  if (!isMounted) return null;

  return null;
};

