"use client";

import { useEffect, useState, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Exit = memo(function Exit() {
  const [exitLines, setExitLines] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const messages = ["exiting terminal...", "thanks for visiting!", "goodbye 🐧"];

  useEffect(() => {
    if (currentIndex < messages.length) {
      const timeout = setTimeout(() => {
        setExitLines((prev) => [...prev, messages[currentIndex]]);
        setCurrentIndex((i) => i + 1);
      }, 800);
      return () => clearTimeout(timeout);
    } else {
      const redirectTimeout = setTimeout(() => {
        window.location.href =
          "https://www.youtube.com/watch?v=xvFZjo5PgG0";
      }, 1200);
      return () => clearTimeout(redirectTimeout);
    }
  }, [currentIndex]);

  return (
    <div className="text-white flex flex-col items-start justify-center px-10 font-mono">
      <AnimatePresence>
        {exitLines.map((line, i) => (
          <motion.div
            key={line + i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="mb-2"
          >
            {line}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
});

export default Exit;
