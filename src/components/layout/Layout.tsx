import React from 'react';
import { Navbar } from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-[#0b0b0c] flex flex-col font-sans select-none">
      <Navbar />
      <main className="flex-grow pt-16 flex flex-col relative z-20">
        {children}
      </main>
      <footer className="py-6 text-center text-xs text-obsidian-500 border-t border-obsidian-900/50 bg-[#070708] px-4 space-y-1 relative z-10">
        <p>&copy; {new Date().getFullYear()} txtgrafa.pl. Kod źródłowy zoptymalizowany dla GitHub Pages.</p>
        <p className="opacity-75">Ta strona nie jest powiązana, wspierana ani zatwierdzona przez Mojang Studios, Mojang AB lub Microsoft. Minecraft jest znakiem towarowym Mojang Synergies AB.</p>
      </footer>
    </div>
  );
};