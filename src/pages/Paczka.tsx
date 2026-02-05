import { Card } from '@/components/ui/Card';
import { AnimatedItem } from '@/components/motion/AnimatedPage';
import { HelpCircle, Heart, Code, ExternalLink, Settings2 } from 'lucide-react';

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
              możemy uzyskać klikając przycisk <strong>Otwórz folder z paczkami zasobów</strong> 
              zlokalizowany na dole ekranu w zakładce Paczki Zasobów w ustawieniach Minecrafta.
            </p>
            
            <div className="mt-4 p-4 bg-gray-900/50 rounded-xl border border-gray-700">
              <p className="font-bold text-blue-400 mb-2">Wymagania i Kompatybilność:</p>
              <div className="space-y-4">
                <p className="text-sm">
                  Do pełnego korzystania z paczki potrzebny nam będzie{' '}
                  <a 
                    href="https://optifine.net/downloads" 
                    className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center transition-colors underline decoration-blue-500/30 underline-offset-4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Optifine <ExternalLink className="w-3 h-3 ml-1" />
                  </a>.
                </p>

                <div className="pt-2 border-t border-gray-800">
                  <p className="text-sm flex items-start gap-2">
                    <Settings2 className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                    <span>
                      Używasz <strong>Fabric</strong>? Paczka Grafa działa również na tym silniku! 
                      Wymagany jest mod{' '}
                      <a 
                        href="https://modrinth.com/mod/entitytexturefeatures"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-400 hover:text-purple-300 font-bold underline decoration-purple-500/30 underline-offset-4"
                      >
                        [ETF] Entity Texture Features
                      </a>.
                    </span>
                  </p>
                </div>
              </div>
            </div>
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
          <Card title="Wsparcie techniczne" icon={Code}>
            <p>
              Masz problem z instalacją? Skontaktuj się z nami bezpośrednio:
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="mailto:kontakt@txtgrafa.pl?subject=Wsparcie%20techniczne%20-%20Paczka%20Grafa"
                className="inline-flex items-center px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold shadow-lg shadow-blue-900/20 transition-all"
              >
                Wyślij email
              </a>
              <a
                href="/helikopter"
                className="inline-flex items-center px-5 py-2.5 bg-gray-800 hover:bg-gray-700 text-gray-200 rounded-xl font-semibold border border-gray-700 transition-all"
              >
                Discord
              </a>
            </div>
          </Card>
        </AnimatedItem>
      </div>
    </div>
  );
}