import { useCallback, useRef, useEffect } from 'react';

interface UseSoundOptions {
  volume?: number;
  loop?: boolean;
}

interface UseSoundReturn {
  play: () => void;
  stop: () => void;
  setVolume: (volume: number) => void;
  isPlaying: boolean;
}

export const useSound = (soundPath: string, options: UseSoundOptions = {}): UseSoundReturn => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const isPlayingRef = useRef(false);

  useEffect(() => {
    audioRef.current = new Audio(soundPath);
    audioRef.current.volume = options.volume ?? 1;
    audioRef.current.loop = options.loop ?? false;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [soundPath, options.volume, options.loop]);

  const play = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(console.error);
      isPlayingRef.current = true;
    }
  }, []);

  const stop = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      isPlayingRef.current = false;
    }
  }, []);

  const setVolume = useCallback((volume: number) => {
    if (audioRef.current) {
      audioRef.current.volume = Math.max(0, Math.min(1, volume));
    }
  }, []);

  return {
    play,
    stop,
    setVolume,
    isPlaying: isPlayingRef.current,
  };
}; 