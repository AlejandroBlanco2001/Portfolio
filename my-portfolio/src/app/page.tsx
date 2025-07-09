"use client";

import Terminal from "@/components/ui/terminal";
import Loading from "@/components/ui/loading";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const onHandleLoading = (loadingState: boolean) => {
    setIsLoading(loadingState);
  };

  return (
    <div className="bg-gray-950 h-screen w-screen flex items-center justify-center">
      {isLoading ? (
        <Loading onHandleLoading={onHandleLoading} />
      ) : (
        <AnimatePresence>
          <motion.div
            key="terminal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <Terminal />
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}
