import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Package, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navItems = [
  { path: '/paczka', label: 'Jak korzystać?', icon: Package },
  { path: '/rozne', label: 'Rzeczy Grafa', icon: Sparkles },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-xl border-b border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link 
            to="/" 
            className="flex items-center space-x-3 text-gray-100 hover:text-white transition-all group"
            aria-label="Strona główna Paczka Grafa"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/20 blur-lg rounded-full group-hover:bg-blue-500/40 transition-all" />
              <img 
                src="/pliki/graf.svg" 
                alt="Logo" 
                className="h-10 w-10 relative z-10 drop-shadow-2xl"
                aria-hidden="true"
              />
            </div>
            <span className="font-black text-xl tracking-tighter hidden sm:inline bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              txtgrafa.pl
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-3">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <Button
                  variant="ghost"
                  className={cn(
                    'relative h-10 px-5 font-bold transition-all duration-300 rounded-xl border',
                    isActive(item.path) 
                      ? 'bg-blue-600/20 border-blue-500/50 text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.2)]' 
                      : 'border-transparent text-gray-400 hover:text-white hover:bg-white/5 hover:border-white/10'
                  )}
                >
                  <item.icon className={cn("w-4 h-4 mr-2", isActive(item.path) && "animate-pulse")} aria-hidden="true" />
                  {item.label}
                  {isActive(item.path) && (
                    <motion.div
                      layoutId="nav-active"
                      className="absolute -bottom-[1.1rem] left-0 right-0 h-0.5 bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                    />
                  )}
                </Button>
              </Link>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-gray-300 hover:text-white bg-white/5"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Zamknij menu' : 'Otwórz menu'}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-gray-900 border-b border-white/5"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'flex items-center px-4 py-3 rounded-xl text-base font-bold transition-all border',
                    isActive(item.path)
                      ? 'bg-blue-600/20 border-blue-500/50 text-blue-400'
                      : 'text-gray-400 border-transparent'
                  )}
                >
                  <item.icon className="w-5 h-5 mr-3" aria-hidden="true" />
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}