import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { AnimatedPage } from '@/components/motion/AnimatedPage';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-[#0a0a0b] flex flex-col selection:bg-green-500/30 selection:text-green-400">
      <Navbar />
      <main className="flex-grow pt-16">
        <AnimatedPage>
          {children}
        </AnimatedPage>
      </main>
      <Footer />
    </div>
  );
};