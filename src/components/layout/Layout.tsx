import { ReactNode } from 'react';
import { Navbar } from './Navbar';
import { AnimatedPage } from '@/components/motion/AnimatedPage';
import AnnouncementBanner from '../AnnouncementBanner';

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
      <AnnouncementBanner />
      
      <main 
        id="main-content"
        className="flex-grow pt-16"
        role="main"
      >
        <AnimatedPage className="h-full">
          {children}
        </AnimatedPage>
      </main>
    </div>
  );
}