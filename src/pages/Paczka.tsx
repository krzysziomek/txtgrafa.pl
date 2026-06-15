import { Helmet } from 'react-helmet-async';
import { Card } from '../components/ui/Card';
import { HelpCircle, Heart, ExternalLink, Cpu } from 'lucide-react';

export function Paczka() {
  return (
    <>
      <Helmet>
        <title>Jak zainstalować Paczkę Grafa - Poradnik</title>
        <meta name="description" content="Szczegółowy poradnik krok po kroku jak zainstalować Paczkę Grafa w grze Minecraft. Zobacz instrukcje instalacji dla OptiFine oraz Fabric wraz z linkami do wymaganych modów." />
        <meta name="keywords" content="instalacja paczki grafa, minecraft resource pack install, optifine pobierz, fabric mody minecraft, entity texture features" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Jak zainstalować Paczkę Grafa - Poradnik" />
        <meta property="og:description" content="Krok po kroku jak odpalić nakładki w Minecraft przy użyciu OptiFine lub Fabric." />
        <meta property="og:url" content="https://txtgrafa.pl/paczka" />
      </Helmet>

      <div className="container mx-auto px-4 py-12 max-w-4xl fade-in">
        <div className="text-center mb-12 slide-up">
          <h1 className="text-4xl md:text-5xl font-pixel tracking-wider text-gray-100 mb-4">Paczka Grafa</h1>
          <p className="text-gray-400 font-sans text-lg">
            Kompletny przewodnik po instalacji i użytkowaniu
          </p>
        </div>

        <div className="space-y-6">
          <div className="slide-up" style={{ animationDelay: '0.1s' }}>
            <Card title="Jak korzystać z Paczki Grafa?" icon={HelpCircle}>
              <p className="font-sans">
                Aby korzystać z paczki zasobów Grafa należy pobrać wybrane przez siebie paczki, 
                następnie przenieść je do folderu <strong className="text-green-400">resourcepacks</strong>, do którego dostęp 
                możemy uzyskać klikając przycisk <strong className="text-blue-400">Otwórz folder z paczkami zasobów</strong> zlokalizowany na dole ekranu w zakładce Paczki Zasobów w ustawieniach gry Minecraft.
              </p>
              
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 bg-obsidian-950/60 border border-obsidian-700/80 rounded-md">
                  <p className="font-pixel text-lg tracking-wide text-blue-400 mb-2 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 bg-blue-500 border border-blue-300" /> OptiFine:
                  </p>
                  <p className="text-sm font-sans text-gray-300">
                    Do pełnego korzystania ze wszystkich funkcji połączonych tekstur potrzebny nam będzie{' '}
                    <a 
                      href="https://optifine.net/downloads" 
                      className="text-green-400 hover:text-green-300 inline-flex items-center transition-colors font-bold"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      referrerPolicy="no-referrer"
                    >
                      Optifine <ExternalLink className="w-3.5 h-3.5 ml-1" />
                    </a>.
                  </p>
                </div>

                <div className="p-5 bg-obsidian-950/60 border border-obsidian-700/80 rounded-md">
                  <p className="font-pixel text-lg tracking-wide text-purple-400 mb-2 flex items-center gap-2">
                    <Cpu className="w-5 h-5 text-purple-400" /> Fabric:
                  </p>
                  <p className="text-sm font-sans text-gray-300">
                    Możesz również używać paczki na silniku Fabric. Wymagany jest wtedy mod{' '}
                    <a 
                      href="https://modrinth.com/mod/entitytexturefeatures" 
                      className="text-green-400 hover:text-green-300 inline-flex items-center transition-colors font-bold mt-1"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      referrerPolicy="no-referrer"
                    >
                      Entity Texture Features <ExternalLink className="w-3.5 h-3.5 ml-1" />
                    </a>
                    .
                  </p>
                </div>
              </div>
              
              <p className="mt-4 text-xs text-gray-500 italic font-sans">
                Jeśli podczas instalacji OptiFine wystąpi błąd z uruchomieniem instalatora `.jar`, upewnij się że masz zainstalowaną najnowszą wersję środowiska{' '}
                <a 
                  href="https://java.com/en/download/" 
                  className="text-blue-400/60 hover:text-blue-400 underline mx-1"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  referrerPolicy="no-referrer"
                >
                  Java SE
                </a>.
              </p>
            </Card>
          </div>

          <div className="slide-up" style={{ animationDelay: '0.2s' }}>
            <Card title="Czy Paczka Grafa jest darmowa?" icon={Heart}>
              <p className="font-sans">
                Tak, Paczka Grafa jest całkowicie darmowa i otwarta dla społeczności.
              </p>
              <p className="mt-3 text-sm text-gray-400 font-sans">
                Pierwsze wersje paczki były tworzone przez{' '}
                <a 
                  href="https://namemc.com/profile/4fa3d966-93d3-4e7d-9618-5f6532864a53"
                  className="text-blue-400 hover:text-blue-300 transition-colors font-semibold"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  referrerPolicy="no-referrer"
                >
                  Grafa
                </a>.
                Drugą, ulepszoną i dostosowaną do najnowszych wersji gry edycją zajmuje się aktualnie{' '}
                <a 
                  href="https://namemc.com/profile/a9c21032-2dc7-41f9-a7c4-da0430c0ab2a"
                  className="text-blue-400 hover:text-blue-300 transition-colors font-semibold"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  referrerPolicy="no-referrer"
                >
                  Masta
                </a>.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}