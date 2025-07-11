'use client';

import { memo, useEffect, useState } from "react";

const Loading = memo(function Loading({ onHandleLoading }: { onHandleLoading: (loadingState: boolean) => void }) {
  const LOADING_TEXT = [
    "booting terminal...",
    "initializing...",
    "loading modules...",
    "almost there...",
    "just a few more seconds...",
    "Done!",
  ];

  const TERMINAL_SPINNERS = ['||', '//', '--', '\\\\'];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [spinnerIndex, setSpinnerIndex] = useState(0);

  useEffect(() => {
    if (currentIndex >= LOADING_TEXT.length - 1) {
      onHandleLoading(false);
      return;
    }
    const interval = setInterval(() => {
      setSpinnerIndex((prev) => (prev + 1) % TERMINAL_SPINNERS.length);
    }, 120);

    const textInterval = setInterval(() => {
      setCurrentIndex((prev) => {
        const isLastIndex = prev === LOADING_TEXT.length - 1;
        return isLastIndex ? 0 : prev + 1;
      });
    }, 500);

    return () => {
      clearInterval(interval);
      clearInterval(textInterval);
    };
  }, [currentIndex, onHandleLoading, LOADING_TEXT.length, TERMINAL_SPINNERS.length]);

  return (
    <div className="fixed inset-0 flex items-center justify-center min-h-screen w-full px-4 sm:px-8 lg:px-16 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white z-50">
      <div className="flex flex-col items-center w-full max-w-md">
        <div className="relative">
          <span className="font-mono text-4xl sm:text-6xl text-green-400 select-none animate-pulse-slow">
            {TERMINAL_SPINNERS[spinnerIndex]}
          </span>
          <div className="absolute inset-0 bg-green-400/20 rounded-full blur-xl animate-pulse-slow"></div>
        </div>
        <p className="font-mono text-base sm:text-lg text-green-400 mt-4 sm:mt-6 animate-fade-in text-center">{LOADING_TEXT[currentIndex]}</p>
        <div className="mt-3 sm:mt-4 w-24 sm:w-32 h-1 bg-gray-800 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-green-400 to-blue-400 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
});

export default Loading;