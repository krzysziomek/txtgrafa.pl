import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Package, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navItems = [
  { path: '/paczka', label: 'Paczka', icon: Package },
  { path: '/rozne', label: 'Różne', icon: Sparkles },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/75 backdrop-blur-xl border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="flex items-center space-x-3 text-gray-100 hover:text-white transition-all group"
            aria-label="Strona główna Paczka Grafa"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/25 blur-lg rounded-full group-hover:bg-blue-500/45 transition-all" />
              <img
                src="/graf.svg"
                alt="Logo"
                className="h-10 w-10 relative z-10 drop-shadow-2xl"
                aria-hidden="true"
              />
            </div>
            <span className="font-black text-xl tracking-tighter hidden sm:inline bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 dr-readable">
              txtgrafa.pl
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-3">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <Button
                  variant="ghost"
                  className={cn(
                    'relative h-10 px-5 font-extrabold transition-all duration-300 rounded-xl border shadow-sm',
                    'hover:shadow-[0_10px_30px_-12px_rgba(59,130,246,0.55)]',
                    isActive(item.path)
                      ? 'bg-gradient-to-r from-blue-600/25 to-indigo-600/20 border-blue-500/60 text-blue-200 shadow-[0_0_0_1px_rgba(59,130,246,0.25),0_12px_30px_-16px_rgba(59,130,246,0.6)]'
                      : 'bg-white/5 border-white/10 text-gray-200 hover:bg-white/8 hover:border-white/20'
                  )}
                >
                  <item.icon
                    className={cn('w-4 h-4 mr-2', isActive(item.path) && 'animate-pulse')}
                    aria-hidden="true"
                  />
                  {item.label}
                  {isActive(item.path) && (
                    <motion.div
                      layoutId="nav-active"
                      className="absolute -bottom-[1.1rem] left-2 right-2 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 shadow-[0_0_12px_rgba(59,130,246,0.6)]"
                    />
                  )}
                </Button>
              </Link>
            ))}

            <Link to="/helikopter">
              <Button
                className="h-10 px-5 rounded-xl font-extrabold bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white shadow-[0_12px_30px_-14px_rgba(99,102,241,0.9)] border border-white/10"
              >
                Discord
              </Button>
            </Link>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-gray-100 hover:text-white bg-white/10 hover:bg-white/15 border border-white/10"
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
            className="md:hidden bg-gray-950/95 backdrop-blur-xl border-b border-white/10"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'flex items-center px-4 py-3 rounded-xl text-base font-extrabold transition-all border',
                    isActive(item.path)
                      ? 'bg-gradient-to-r from-blue-600/25 to-indigo-600/20 border-blue-500/60 text-blue-200 shadow-[0_10px_30px_-18px_rgba(59,130,246,0.7)]'
                      : 'bg-white/5 text-gray-200 border-white/10 hover:bg-white/10 hover:border-white/20'
                  )}
                >
                  <item.icon className="w-5 h-5 mr-3" aria-hidden="true" />
                  {item.label}
                </Link>
              ))}

              <Link
                to="/helikopter"
                onClick={() => setIsOpen(false)}
                className="flex items-center px-4 py-3 rounded-xl text-base font-extrabold transition-all border bg-gradient-to-r from-indigo-600 to-blue-600 text-white border-white/10 shadow-[0_10px_30px_-18px_rgba(99,102,241,0.9)]"
              >
                Discord
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}