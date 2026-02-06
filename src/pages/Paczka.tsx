import { Card } from '@/components/ui/Card';
import { AnimatedItem } from '@/components/motion/AnimatedPage';
import { HelpCircle, Heart, Code, ExternalLink, Cpu } from 'lucide-react';

export function Paczka() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-100 mb-4">Paczka Grafa</h1>
        <p className="text-gray-400 text-lg">
          Kompletny przewodnik po instalacji i użytkowaniu
        </p>
      </div>

      <div className="space-y-6">
        <AnimatedItem>
          <Card title="Jak korzystać z Paczki Grafa?" icon={HelpCircle}>
            <p>
              Aby korzystać z paczki zasobów Grafa należy pobrać wybrane przez siebie paczki, 
              następnie przenieść je do folderu <strong>resourcepacks</strong>, do którego dostęp 
              możemy uzyskać klikając przycisk <strong>Otwórz folder z paczkami zasobów </strong> 
              zlokalizowany na dole ekranu w zakładce Paczki Zasobów w ustawieniach Minecrafta.
            </p>
            
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-gray-900/50 rounded-lg border border-gray-700">
                <p className="font-medium text-gray-200 mb-2 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500" /> Optifine:
                </p>
                <p className="text-sm">
                  Do pełnego korzystania z paczki potrzebny nam będzie{' '}
                  <a 
                    href="https://optifine.net/downloads" 
                    className="text-blue-400 hover:text-blue-300 inline-flex items-center transition-colors font-bold"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Optifine <ExternalLink className="w-3 h-3 ml-1" />
                  </a>.
                </p>
              </div>

              <div className="p-4 bg-blue-500/5 rounded-lg border border-blue-500/20">
                <p className="font-medium text-blue-300 mb-2 flex items-center gap-2">
                  <Cpu className="w-4 h-4" /> Fabric:
                </p>
                <p className="text-sm text-gray-400">
                  Możesz również używać paczki na silniku Fabric. Wymagany jest wtedy mod: 
                  <a 
                    href="https://modrinth.com/mod/entitytexturefeatures" 
                    className="text-blue-400 hover:text-blue-300 inline-flex items-center transition-colors font-bold block mt-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    [ETF] Entity Texture Features <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </p>
              </div>
            </div>
            
            <p className="mt-4 text-xs text-gray-500 italic">
              Jeśli podczas instalacji Optifine wystąpi błąd, upewnij się że masz zainstalowaną 
              <a href="https://java.com/en/download/" className="text-blue-400/60 hover:text-blue-400 mx-1">Javę</a>.
            </p>
          </Card>
        </AnimatedItem>

        <AnimatedItem>
          <Card title="Czy Paczka Grafa jest darmowa?" icon={Heart}>
            <p>
              Tak, Paczka Grafa jest całkowicie darmowa. Zachęcamy jednak do wsparcia 
              naszego projektu, jeśli uważasz go za przydatny.
            </p>
            <p className="mt-3 text-sm text-gray-400">
              Pierwsze wersje paczki były tworzone przez{' '}
              <a 
                href="https://namemc.com/profile/4fa3d966-93d3-4e7d-9618-5f6532864a53"
                className="text-blue-400 hover:text-blue-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Grafa
              </a>.
              Drugą ulepszoną wersją paczki zajmuje się aktualnie{' '}
              <a 
                href="https://namemc.com/profile/a9c21032-2dc7-41f9-a7c4-da0430c0ab2a"
                className="text-blue-400 hover:text-blue-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Masta
              </a>.
            </p>
          </Card>
        </AnimatedItem>

        <AnimatedItem>
          <Card title="Kontakt" icon={Code}>
            <p>
              Masz pomysły zmian na stronie? Skontaktuj się z nami bezpośrednio:
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="https://discord.gg/graf"
                className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-bold"
                target="_blank"
                rel="noopener noreferrer"
              >
                Discord Grafa
              </a>
            </div>
          </Card>
        </AnimatedItem>
      </div>
    </div>
  );
}