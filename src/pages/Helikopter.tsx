import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { MessageCircle, ExternalLink, Timer } from 'lucide-react';

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
    <>
      <Helmet>
        <title>Przekierowanie do Discord</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-[calc(100vh-8rem)] flex items-center justify-center px-4 fade-in">
        <div className="max-w-md w-full bg-obsidian-900 border-2 border-t-white/10 border-l-white/10 border-r-black/40 border-b-black/60 rounded-md p-8 text-center shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
          <div className="p-4 bg-indigo-500/10 rounded-full w-fit mx-auto mb-6">
            <MessageCircle className="w-12 h-12 text-indigo-400" aria-hidden="true" />
          </div>

          <h1 className="text-2xl font-pixel tracking-wide text-gray-100 mb-2">
            Przekierowanie do bota Discord
          </h1>

          <div className="flex items-center justify-center space-x-2 mb-6 text-indigo-400">
            <Timer className="w-5 h-5" aria-hidden="true" />
            <span className="text-3xl font-pixel tracking-wider font-bold">{countdown}s</span>
          </div>

          <button
            onClick={handleManualRedirect}
            className="w-full btn-3d-indigo py-3 px-6 text-xl tracking-wider active:translate-y-[4px]"
          >
            Przejdź teraz
            <ExternalLink className="w-4 h-4 ml-2 inline-block relative -top-0.5" aria-hidden="true" />
          </button>

          <p className="mt-6 text-xs text-gray-500 font-sans">
            Jeśli przekierowanie nie zadziałało automatycznie, kliknij przycisk powyżej.
          </p>
        </div>
      </div>
    </>
  );
}