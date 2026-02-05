import { Card } from '@/components/ui/Card';
import { AnimatedItem } from '@/components/motion/AnimatedPage';
import { Wallpaper, Wrench, Shirt, Cpu, Gamepad2, Monitor, ExternalLink } from 'lucide-react';

const miscItems = [
  {
    title: 'Tapeta',
    icon: Wallpaper,
    content: 'Tapeta Grafa na pulpit',
    link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1406608111',
    linkText: 'Steam Workshop',
    external: true,
  },
  {
    title: 'Lunar Client',
    icon: Monitor,
    content: 'Gotowa konfiguracja dla Lunar Client',
    link: '/pliki/Profile 599065437.zip',
    linkText: 'Pobierz config',
    external: false,
  },
  {
    title: 'Peleryna Optifine',
    icon: Shirt,
    content: 'Pelerynka Grafa dla Optifine',
    link: 'https://coolshoes.moxvallix.com/banner?=aaozaeooooaFbK',
    linkText: 'Zobacz pelerynę',
    external: true,
  },
  {
    title: 'Sprzęt',
    icon: Cpu,
    content: 'Lista sprzętu używanego przez Grafa',
    link: 'http://bit.ly/SprzetGrafa',
    linkText: 'Zobacz sprzęt',
    external: true,
  },
  {
    title: 'Kwadratowa Masakra',
    icon: Gamepad2,
    content: 'Wymagane: Fabric. Paczka modów dla serii.',
    links: [
      { text: 'Fabric', url: 'https://fabricmc.net/', external: true },
      { text: 'Paczka modów', url: '/pliki/kwadratowa-masakra-mody-FABRIC-1.17.zip', external: false },
    ],
  },
  {
    title: 'Strumyk Modowo',
    icon: Wrench,
    content: 'Wymagane: Forge. Paczka modów dla serii.',
    links: [
      { text: 'Forge', url: 'https://files.minecraftforge.net/', external: true },
      { text: 'Paczka modów', url: '/pliki/strumyk-modowo1.16.3.zip', external: false },
    ],
  },
];

export function Rozne() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-100 mb-4">Różne Elementy</h1>
        <p className="text-gray-400 text-lg">
          Dodatkowe zasoby, konfiguracje i przydatne linki
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {miscItems.map((item, index) => (
          <AnimatedItem key={item.title}>
            <Card title={item.title} icon={item.icon}>
              <p className="mb-4">{item.content}</p>
              
              {'links' in item ? (
                <div className="flex flex-wrap gap-2">
                  {item.links.map((link) => (
                    <a
                      key={link.text}
                      href={link.url}
                      className="inline-flex items-center px-3 py-1.5 bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 rounded-md text-sm transition-colors"
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                    >
                      {link.text}
                      {link.external && <ExternalLink className="w-3 h-3 ml-1" />}
                    </a>
                  ))}
                </div>
              ) : (
                <a
                  href={item.link}
                  className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm"
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                >
                  {item.linkText}
                  {item.external && <ExternalLink className="w-4 h-4 ml-2" />}
                </a>
              )}
            </Card>
          </AnimatedItem>
        ))}
      </div>
    </div>
  );
}