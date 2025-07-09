"use client";

import { useEffect, useState } from "react";

export default function Loading({ onHandleLoading }: { onHandleLoading: (loadingState: boolean) => void }) {
    const LOADING_TEXT = [
        "booting terminal...",
        "loading system...",
        "initializing...",
        "loading modules...",
        "starting up...",
        "almost there...",
        "just a few more seconds...",
        "a little bit more...",
        "Done!",
    ];

    const TERMINAL_SPINNERS = ['||', '//', '--', '\\'];
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
                if (prev < LOADING_TEXT.length - 1) {
                    return prev + 1;
                }
                return prev;
            });
        }, 800);

        return () => {
            clearInterval(interval);
            clearInterval(textInterval);
        };
    }, [currentIndex]);

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-950 text-white">
            <span className="font-mono text-5xl text-green-400 select-none">
                {TERMINAL_SPINNERS[spinnerIndex]}
            </span>
            <p className="font-mono text-sm text-green-400">{LOADING_TEXT[currentIndex]}</p>
        </div>
    );
}
