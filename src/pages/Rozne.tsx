import { Helmet } from 'react-helmet-async';
import { Card } from '../components/ui/Card';
import { miscItems } from '../lib/data';
import { Wallpaper, Wrench, Shirt, Cpu, Gamepad2, Monitor, ExternalLink } from 'lucide-react';

// Icon mapper helper
const icons: Record<string, typeof Wallpaper> = {
  'Tapeta': Wallpaper,
  'Lunar Client': Monitor,
  'Peleryna Optifine': Shirt,
  'Sprzęt': Cpu,
  'Kwadratowa Masakra': Gamepad2,
  'Strumyk Modowo': Wrench,
};

const BUTTON_CLASS = "btn-3d-blue py-2.5 px-4 text-sm font-pixel tracking-wider flex-1 flex items-center justify-center gap-2 active:translate-y-[4px]";

export function Rozne() {
  return (
    <>
      <Helmet>
        <title>Rzeczy Grafa - Tapety, config Lunar Client</title>
        <meta name="description" content="Pobierz oficjalne tapety pulpitu Grafa (Pepe, Honda), pliki profilowe Lunar Client, link do pelerynki OptiFine oraz oficjalne paczki modów na Kwadratową Masakrę." />
        <meta name="keywords" content="lunar client config, tapeta pepe grafa, pelerynka optifine grafa, mody kwadratowa masakra, strumyk modowo paczka" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Rzeczy Grafa - Tapety, config Lunar Client" />
        <meta property="og:description" content="Przydatne konfiguracje, linki do sprzętu, tapety i mody od Grafa." />
        <meta property="og:url" content="https://txtgrafa.pl/rozne" />
      </Helmet>

      <div className="container mx-auto px-4 py-12 max-w-4xl fade-in">
        <div className="text-center mb-12 slide-up">
          <h1 className="text-4xl md:text-5xl font-pixel tracking-wider text-gray-100 mb-4">Rzeczy Grafa</h1>
          <p className="text-gray-400 font-sans text-lg">
            Dodatkowe zasoby, konfiguracje i przydatne linki
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {miscItems.map((item, idx) => {
            const Icon = icons[item.title] || Wallpaper;
            return (
              <div 
                key={item.title} 
                className="slide-up h-full"
                style={{ animationDelay: `${0.05 * (idx + 1)}s` }}
              >
                <Card title={item.title} icon={Icon} className="h-full flex flex-col">
                  <p className="mb-6 font-sans text-gray-300 flex-grow">{item.content}</p>

                  <div className="flex gap-4 pt-2">
                    {item.links ? (
                      item.links.map((link) => {
                        const isExternal = link.url.startsWith('http');
                        return (
                          <a
                            key={link.text}
                            href={link.url}
                            className={BUTTON_CLASS}
                            target={isExternal ? '_blank' : undefined}
                            rel={isExternal ? 'noopener noreferrer nofollow' : undefined}
                            referrerPolicy={isExternal ? 'no-referrer' : undefined}
                          >
                            <span>{link.text}</span>
                            {isExternal && <ExternalLink className="w-3.5 h-3.5" />}
                          </a>
                        );
                      })
                    ) : item.link ? (
                      <a
                        href={item.link}
                        className={BUTTON_CLASS}
                        target={item.link.startsWith('http') ? '_blank' : undefined}
                        rel={item.link.startsWith('http') ? 'noopener noreferrer nofollow' : undefined}
                        referrerPolicy={item.link.startsWith('http') ? 'no-referrer' : undefined}
                      >
                        <span>{item.linkText}</span>
                        {item.link.startsWith('http') && <ExternalLink className="w-3.5 h-3.5" />}
                      </a>
                    ) : null}
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}