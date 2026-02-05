import { Card } from '@/components/ui/Card';
import { AnimatedItem } from '@/components/motion/AnimatedPage';
import { Wallpaper, Shirt, Cpu, Gamepad2, Monitor, ExternalLink, Image } from 'lucide-react';

interface MiscItem {
  title: string;
  icon: typeof Wallpaper;
  content: string;
  link?: string;
  linkText?: string;
  external?: boolean;
  links?: { text: string; url: string; external?: boolean }[];
}

const miscItems: MiscItem[] = [
  {
    title: 'Tapeta',
    icon: Wallpaper,
    content: 'Tapeta Grafa na pulpit (Animated)',
    link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1406608111',
    linkText: 'Steam Workshop',
    external: true,
  },
  {
    title: 'Tapeta v2',
    icon: Image,
    content: 'Druga tapeta Grafa (Static)',
    link: '#',
    linkText: 'Pobierz teraz',
    external: false,
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
        {miscItems.map((item) => (
          <AnimatedItem key={item.title}>
            <Card title={item.title} icon={item.icon}>
              <p className="mb-4 text-gray-400">{item.content}</p>
              
              {item.links ? (
                <div className="flex flex-wrap gap-2">
                  {item.links.map((link) => (
                    <a
                      key={link.text}
                      href={link.url}
                      className="inline-flex items-center px-4 py-2 bg-blue-600/10 hover:bg-blue-600/20 text-blue-400 rounded-xl text-sm font-semibold transition-all border border-blue-500/20"
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                    >
                      {link.text}
                      {link.external && <ExternalLink className="w-3 h-3 ml-2" />}
                    </a>
                  ))}
                </div>
              ) : item.link ? (
                <a
                  href={item.link}
                  className="inline-flex items-center px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold shadow-lg shadow-blue-900/20 transition-all text-sm"
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                >
                  {item.linkText}
                  {item.external && <ExternalLink className="w-4 h-4 ml-2" />}
                </a>
              ) : null}
            </Card>
          </AnimatedItem>
        ))}
      </div>
    </div>
  );
}