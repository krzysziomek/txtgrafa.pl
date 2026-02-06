import { motion } from 'framer-motion';
import { DownloadSection } from '@/components/download/DownloadSection';
import { AnimatedItem } from '@/components/motion/AnimatedPage';
import { Sparkles } from 'lucide-react';

export function Index() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-4 py-16 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-4xl mx-auto text-center space-y-16 relative z-10">
        
        <div className="space-y-6">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="inline-flex items-center justify-center p-3 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 border border-white/10 rounded-2xl mb-4"
          >
            <Sparkles className="w-10 h-10 text-blue-400" aria-hidden="true" />
          </motion.div>
          
          <AnimatedItem>
            <h1 className="text-5xl md:text-8xl font-black tracking-tight text-white">
              Paczka <span className="text-gradient" style={{ WebkitTextFillColor: 'transparent', forcedColorAdjust: 'none' }}>Grafa</span>
            </h1>
          </AnimatedItem>
          
          <AnimatedItem>
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto font-medium leading-relaxed">
              Odkryj najlepsze paczki zasobów Minecraft. 
              <span className="text-white font-semibold"> Piękne, szybkie i darmowe.</span>
            </p>
          </AnimatedItem>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-card rounded-[2.5rem] p-8 md:p-14"
        >
          <DownloadSection />
        </motion.div>

        <AnimatedItem>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500" />
              <span className="text-sm font-semibold uppercase tracking-widest">Wysoka Jakość</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-indigo-500" />
              <span className="text-sm font-semibold uppercase tracking-widest">Optymalizacja</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-purple-500" />
              <span className="text-sm font-semibold uppercase tracking-widest">100% Darmowe</span>
            </div>
          </div>
        </AnimatedItem>

      </div>
    </div>
  );
}