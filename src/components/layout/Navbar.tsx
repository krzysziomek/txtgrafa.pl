import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Package, Sparkles } from 'lucide-react';
import { cn } from '../../lib/utils';
import grafLogo from '../../graf.svg';

const navItems = [
  { path: '/paczka', label: 'Jak korzystać?', icon: Package },
  { path: '/rozne', label: 'Rzeczy Grafa', icon: Sparkles },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-obsidian-950/75 backdrop-blur-xl border-b border-green-500/20 shadow-[0_4px_20px_rgba(34,197,94,0.12)]">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="flex items-center space-x-3 text-gray-100 hover:text-white transition-all group"
            aria-label="Strona główna Paczka Grafa"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-green-500/20 blur-lg rounded-full group-hover:bg-green-500/35 transition-all duration-300" />
              <img
                src={grafLogo}
                alt="Logo"
                className="h-10 w-10 relative z-10 drop-shadow-[0_4px_12px_rgba(34,197,94,0.3)] transition-transform duration-300 group-hover:scale-105"
                aria-hidden="true"
              />
            </div>
            <span className="font-pixel text-2xl tracking-wider hidden sm:inline text-white">
              txtgrafa.pl
            </span>
          </Link>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-4">
            {navItems.map((item) => {
              const active = isActive(item.path);
              const Icon = item.icon;
              return (
                <Link key={item.path} to={item.path} className="relative group">
                  <span
                    className={cn(
                      'flex items-center h-10 px-5 rounded-[4px] font-pixel text-lg uppercase tracking-wider transition-all border-2 border-t-white/10 border-l-white/10',
                      active
                        ? 'bg-green-600 border-r-black/40 border-b-black/60 text-white shadow-[0_4px_0_#14532d,0_0_15px_rgba(34,197,94,0.5)]'
                        : 'bg-obsidian-800 hover:bg-obsidian-700 active:bg-obsidian-900 border-r-black/30 border-b-black/40 text-gray-300 hover:text-white shadow-[0_3px_0_rgba(0,0,0,0.45)]'
                    )}
                  >
                    <Icon className="w-4 h-4 mr-2" aria-hidden="true" />
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Mobile hamburger menu */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-[4px] bg-obsidian-800 hover:bg-obsidian-700 text-gray-100 hover:text-white border-2 border-t-white/10 border-l-white/10 border-r-black/30 border-b-black/40 shadow-[0_3px_0_rgba(0,0,0,0.45)] active:translate-y-[2px]"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Zamknij menu' : 'Otwórz menu'}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu drawer */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-obsidian-950/95 backdrop-blur-xl border-b border-obsidian-800/80 slide-up"
        >
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => {
              const active = isActive(item.path);
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="block w-full"
                >
                  <span
                    className={cn(
                      'flex items-center px-4 py-3 rounded-[4px] font-pixel text-lg uppercase tracking-wider transition-all border-2 border-t-white/10 border-l-white/10',
                      active
                        ? 'bg-green-600 border-r-black/40 border-b-black/60 text-white shadow-[0_4px_0_#14532d,0_0_15px_rgba(34,197,94,0.5)]'
                        : 'bg-obsidian-800 border-r-black/30 border-b-black/40 text-gray-300'
                    )}
                  >
                    <Icon className="w-5 h-5 mr-3" aria-hidden="true" />
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}