import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, ExternalLink, Timer } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DISCORD_URL = 'https://discord.com/oauth2/authorize?client_id=708235522186936421';

export function Helikopter() {
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(c => c - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      window.location.href = DISCORD_URL;
    }
  }, [countdown]);

  const handleManualRedirect = () => {
    window.location.href = DISCORD_URL;
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 text-center shadow-2xl"
      >
        <div className="p-4 bg-indigo-500/10 rounded-full w-fit mx-auto mb-6">
          <MessageCircle className="w-12 h-12 text-indigo-400" aria-hidden="true" />
        </div>

        <h1 className="text-2xl font-bold text-gray-100 mb-2">
          Przekierowanie do Discord
        </h1>
        
        <p className="text-gray-400 mb-6">
          Zapraszamy na serwer Discord! Zostaniesz przekierowany za chwilę...
        </p>

        <div className="flex items-center justify-center space-x-2 mb-6 text-indigo-400">
          <Timer className="w-5 h-5" aria-hidden="true" />
          <span className="text-2xl font-mono font-bold">{countdown}s</span>
        </div>

        <Button
          onClick={handleManualRedirect}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
          size="lg"
        >
          Przejdź teraz
          <ExternalLink className="w-4 h-4 ml-2" aria-hidden="true" />
        </Button>

        <p className="mt-6 text-xs text-gray-500">
          Jeśli przekierowanie nie działa, kliknij przycisk powyżej.
          <br />
          Nie zbieramy żadnych danych podczas tego procesu.
        </p>
      </motion.div>
    </div>
  );
}