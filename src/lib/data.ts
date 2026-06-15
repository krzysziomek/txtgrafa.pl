import { CategoryData, CategoryKey } from '../types';

export type { CategoryKey };

export const categories: Record<CategoryKey, string> = {
  overlay: 'Overlay',
  ramki: 'Ramki Rud',
  pozostale: 'Pozostałe',
};

import { generatedFilesByCategory } from './generated-packs';

export const filesByCategory: CategoryData = generatedFilesByCategory;

export const miscItems = [
  {
    title: 'Tapeta',
    content: 'Tapeta Grafa:',
    links: [
      { text: 'Pepe (żaba)', url: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1406608111' },
      { text: 'Honda (samochód)', url: 'https://x.com/i/status/1733824774709686505' },
    ],
  },
  {
    title: 'Lunar Client',
    content: 'Config do Lunara:',
    link: './pliki/Profile 599065437.zip',
    linkText: 'Pobierz config',
  },
  {
    title: 'Peleryna Optifine',
    content: 'Pelerynka Grafa:',
    link: 'https://coolshoes.moxvallix.com/banner?=aaozaeooooaFbK',
    linkText: 'Zobacz pelerynę',
  },
  {
    title: 'Sprzęt',
    content: 'Sprzęt Grafa:',
    link: 'https://docs.google.com/document/d/e/2PACX-1vRmOmH1HrXQUeoTLWwOrpkSnLOwdNpsEnm14B4CgdwfpgLJCi14T9oLTbwTWon5o0VKWRL51nFIq_Nf/pub',
    linkText: 'Lista sprzętu',
  },
  {
    title: 'Kwadratowa Masakra',
    content: 'WYMAGANE: Fabric + Paczka modów',
    links: [
      { text: 'Fabric', url: 'https://fabricmc.net/' },
      { text: 'Paczka modów', url: './pliki/kwadratowa-masakra-mody-FABRIC-1.17.zip' },
    ],
  },
  {
    title: 'Strumyk Modowo',
    content: 'WYMAGANE: Forge + Paczka modów',
    links: [
      { text: 'Forge', url: 'https://files.minecraftforge.net/' },
      { text: 'Paczka modów', url: './pliki/strumyk-modowo1.16.3.zip' },
    ],
  },
];