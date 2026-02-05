import { ReactNode } from 'react';
import { Navbar } from './Navbar';
import { AnimatedPage } from '@/components/motion/AnimatedPage';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-200 flex flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-blue-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-md"
      >
        Przejdź do treści głównej
      </a>
      
      <Navbar />
      
      <main 
        id="main-content"
        className="flex-grow pt-16"
        role="main"
      >
        <AnimatedPage className="h-full">
          {children}
        </AnimatedPage>
      </main>

      <footer className="bg-gray-900 border-t border-gray-800 py-6 mt-auto">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          <p>Paczka Grafa - Darmowe zasoby dla Minecraft</p>
          <p className="mt-1">Zero cookies, zero tracking, 100% prywatności</p>
        </div>
      </footer>
    </div>
  );
}