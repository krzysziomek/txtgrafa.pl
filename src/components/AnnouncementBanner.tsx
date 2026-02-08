"use client";

import { useState, useEffect, useCallback } from 'react';
import { X, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AnnouncementBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  const closeBanner = useCallback(() => {
    setIsVisible(false);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const handleGlobalClick = () => {
      closeBanner();
    };

    const timer = setTimeout(() => {
      window.addEventListener('click', handleGlobalClick);
    }, 100);

    return () => {
      window.removeEventListener('click', handleGlobalClick);
      clearTimeout(timer);
    };
  }, [isVisible, closeBanner]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="fixed top-20 left-1/2 -translate-x-1/2 z-[60] w-[calc(100%-2rem)] max-w-lg"
        >
          <div className="bg-green-600/90 backdrop-blur-md border border-green-400/30 text-white px-4 py-3 rounded-xl shadow-2xl flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-1.5 rounded-lg">
                <Info className="w-5 h-5 text-white" />
              </div>
              <p className="text-sm font-medium leading-tight">
                Teraz już wszystko działa. Przepraszamy za popsute pliki pobierane od 5.02.2026 do 8.02.2026
              </p>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                closeBanner();
              }}
              className="hover:bg-white/20 p-1 rounded-lg transition-colors"
              aria-label="Zamknij powiadomienie"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AnnouncementBanner;