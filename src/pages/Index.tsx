import { motion } from 'framer-motion';
import { DownloadSection } from '@/components/download/DownloadSection';
import { AnimatedItem } from '@/components/motion/AnimatedPage';
import { Package } from 'lucide-react';

export function Index() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-4xl mx-auto text-center space-y-12">
        
        <div className="space-y-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center p-3 bg-blue-500/10 rounded-full mb-4"
          >
            <Package className="w-8 h-8 text-blue-400" aria-hidden="true" />
          </motion.div>
          
          <AnimatedItem>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-100 tracking-tight">
              Pobierz Paczkę
            </h1>
          </AnimatedItem>
          
          <AnimatedItem>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              Darmowe paczki zasobów Minecraft, overlaye i ramki do rud.
            </p>
          </AnimatedItem>
        </div>

        <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 md:p-10 shadow-2xl">
          <DownloadSection />
        </div>

      </div>
    </div>
  );
}