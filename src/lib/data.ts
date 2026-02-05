import { CategoryData, CategoryKey } from '@/types';

export const categories: Record<CategoryKey, string> = {
  overlay: 'Overlay',
  ramki: 'Ramki Rud',
  pozostale: 'Pozostałe',
};

export const filesByCategory: CategoryData = {
  overlay: [
    { display: 'Overlay Grafa 1.21.x Czerwiec 2025', file: '§bOverlay Grafa §a1.21.X §fCzerwiec 2025.zip' },
    { display: 'Różowy Overlay Grafa 1.21.x Czerwiec 2025', file: '§dRóżowy §bOverlay Grafa §a1.21.X §fCzerwiec 2025.zip' },
    { display: 'Overlay Grafa 1.21 Grudzien 2024', file: '§bOverlay Grafa §a1.21 §fGrudzien 2024.zip' },
    { display: 'Overlay Grafa 1.19 Czerwiec 2022', file: '§bOverlay Grafa §a1.19 §fCzerwiec 2022.zip' },
    { display: 'Overlay Grafa 1.19 Lite', file: '§bOverlay Grafa §a1.19 §fLite.zip' },
    { display: 'Overlay Grafa 1.17 Listopad 2021', file: '§bOverlay Grafa §a1.17 §fListopad 2021.zip' },
    { display: 'Overlay Grafa 1.16 Marzec 2021', file: '§bOverlay Grafa §a1.16 §fMarzec 2021.zip' },
    { display: 'Różowy Overlay Grafa 1.16 Marzec 2021', file: '§dRóżowy §6Overlay Grafa §a1.16 §fMarzec 2021.zip' },
    { display: 'Overlay Grafa 1.15 Sierpień 2020', file: '§bOverlay Grafa §a1.15 §fSierpień 2020.zip' },
    { display: 'Overlay Grafa 1.15 Luty 2020', file: '§dOverlay Grafa §a1.15 §fLuty 2020.zip' },
    { display: 'Overlay Grafa 1.14 Sierpień 2020', file: '§bOverlay Grafa §a1.14 §fSierpień 2020.zip' },
    { display: 'Overlay Grafa 1.14.4 Styczen 2020', file: '§6Overlay Grafa §a1.14.4 §fStyczen 2020.zip' },
    { display: 'Overlay Grafa 1.14.4 Grudzien 2019', file: '§6Overlay Grafa §a1.14.4 §fGrudzien 2019.zip' },
    { display: 'Overlay Grafa 1.14.4 Listopad 2019', file: '§6Overlay Grafa §a1.14.4 §fListopad 2019.zip' },
    { display: 'Overlay Grafa 1.13-14 Luty 2020', file: '§dOverlay Grafa §a1.13-14 §fLuty 2020.zip' },
    { display: 'Overlay Grafa 1.12 Sierpień 2020', file: '§bOverlay Grafa §a1.12 §fSierpień 2020.zip' },
    { display: 'Overlay Grafa 1.8 Sierpień 2020', file: '§bOverlay Grafa §a1.8 §fSierpień 2020.zip' },
    { display: 'Overlay Grafa 1.6-8 Luty 2020', file: '§dOverlay Grafa §a1.6-8 §fLuty 2020.zip' },
    { display: 'Stary Overlay Grafa 1.9+', file: '§bStary Overlay Grafa §f1.9+.zip' },
    { display: 'Stary Overlay Grafa 1.8', file: '§bStary Overlay Grafa §f1.8.zip' },
    { display: 'GUI - Grafs Edit', file: '§bGUI - Grafs Edit.zip' },
  ],
  ramki: [
    { display: 'Ramki do rud 1.19', file: '§bRamki do rud §a1.19.zip' },
    { display: 'Ramki do rud 1.17', file: '§bRamki do rud §a1.17.zip' },
    { display: 'Ramki do rud 1.16', file: '§bRamki do rud §a1.16.zip' },
    { display: 'Ramki do rud 1.15', file: '§bRamki do rud §a1.15.zip' },
    { display: 'Ramki do rud 1.14', file: '§bRamki do rud  §a1.14.zip' },
    { display: 'Ramki do rud 1.12', file: '§bRamki do rud §a1.12.zip' },
    { display: 'Ramki do rud 1.8', file: '§bRamki do rud §a1.8.zip' },
    { display: 'Różowe Ramki do rud', file: '§dRóżowe §bRamki do rud.zip' },
    { display: 'Nowe Ramki do rud (tymczasowe przekierowanie)', file: 'new.html' },
  ],
  pozostale: [
    { display: 'Legacy Efficiency 1.15', file: '§bLegacy Efficiency §a1.15.zip' },
    { display: 'Disco Ziemniaki', file: '§eDisco Ziemniaki.zip' },
    { display: 'Niska Tarcza', file: '§eNiska Tarcza.zip' },
  ],
};

export const miscItems = [
  {
    title: 'Tapeta',
    content: 'Tapeta Grafa:',
    link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1406608111',
    linkText: 'Steam Workshop',
  },
  {
    title: 'Lunar Client',
    content: 'Config do Lunara:',
    link: '/pliki/Profile 599065437.zip',
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
    link: 'http://bit.ly/SprzetGrafa',
    linkText: 'Lista sprzętu',
  },
  {
    title: 'Kwadratowa Masakra',
    content: 'WYMAGANE: Fabric + Paczka modów',
    links: [
      { text: 'Fabric', url: 'https://fabricmc.net/' },
      { text: 'Paczka modów', url: '/pliki/kwadratowa-masakra-mody-FABRIC-1.17.zip' },
    ],
  },
  {
    title: 'Strumyk Modowo',
    content: 'WYMAGANE: Forge + Paczka modów',
    links: [
      { text: 'Forge', url: 'https://files.minecraftforge.net/' },
      { text: 'Paczka modów', url: '/pliki/strumyk-modowo1.16.3.zip' },
    ],
  },
];