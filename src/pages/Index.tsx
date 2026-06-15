import { Helmet } from 'react-helmet-async';
import { DownloadSection } from '../components/download/DownloadSection';

export function Index() {
  return (
    <>
      <Helmet>
        <title>Paczka Grafa - Darmowe paczki zasobów do Minecraft</title>
        <meta name="description" content="Paczka Grafa - Pobierz darmowe i zoptymalizowane paczki zasobów do Minecraft. Znajdziesz tu overlaye, ramki do rud (glowing ores), nakładki OptiFine oraz Fabric. 100% bezpieczne bezpośrednie pobieranie." />
        <meta name="keywords" content="Minecraft, tekstury, overlay, ramki do rud, OptiFine, Fabric, paczka grafa, txt grafa, darmowe tekstury minecraft" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Paczka Grafa - Darmowe paczki zasobów do Minecraft" />
        <meta property="og:description" content="Pobierz oficjalną Paczkę Grafa bezpośrednio bez reklam. Najlepsze tekstury, overlaye i ramki rud do Minecraft." />
        <meta property="og:url" content="https://txtgrafa.pl/" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Paczka Grafa - Darmowe paczki zasobów do Minecraft" />
        <meta name="twitter:description" content="Pobierz oficjalną Paczkę Grafa bezpośrednio bez reklam. Najlepsze tekstury, overlaye i ramki rud do Minecraft." />
      </Helmet>

      <div className="h-[calc(100vh-9.5rem)] flex flex-col items-center justify-start pt-4 md:pt-8 px-4 relative fade-in">
        {/* Background decorative pixel-like glows - wrapped to prevent scrollbars */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-green-500/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px]" />
        </div>

        <div className="w-full max-w-4xl mx-auto text-center space-y-6 md:space-y-8 relative z-10">
          <div className="space-y-2 md:space-y-3 slide-up">
            <h1 className="text-5xl md:text-6xl font-pixel tracking-wider text-white">
              Paczka <span className="text-gradient-green">Grafa</span>
            </h1>
            <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto font-sans leading-relaxed">
              Odkryj najlepsze i najlżejsze paczki zasobów Minecraft. 
            </p>
          </div>

          <div className="glass-card p-5 md:p-8 slide-up">
            <DownloadSection />
          </div>

        </div>
      </div>
    </>
  );
}