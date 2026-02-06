import { motion } from 'framer-motion';
import { CategoryKey, categories } from '@/lib/data';
import { cn } from '@/lib/utils';
import { Layers, Grid3X3, Puzzle } from 'lucide-react';

const icons: Record<CategoryKey, typeof Layers> = {
  overlay: Layers,
  ramki: Grid3X3,
  pozostale: Puzzle,
};

interface CategorySelectProps {
  value: CategoryKey;
  onChange: (value: CategoryKey) => void;
}

export function CategorySelect({ value, onChange }: CategorySelectProps) {
  const keys = Object.keys(categories) as CategoryKey[];
  const activeIndex = keys.indexOf(value);

  return (
    <div className="space-y-8 text-center relative">
      <label 
        id="category-label"
        className="block text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400"
        style={{ WebkitTextFillColor: 'transparent', forcedColorAdjust: 'none' }}
      >
        Krok 1: Wybierz kategorię
      </label>
      
      <div className="relative max-w-2xl mx-auto">
        {/* Bouncing Ball Animation - Perfectly centered above buttons */}
        <div className="absolute -top-7 left-0 right-0 hidden sm:block pointer-events-none z-20">
          <div className="grid grid-cols-3 w-full">
            <motion.div
              animate={{ x: `${activeIndex * 100}%` }}
              transition={{ type: "spring", stiffness: 350, damping: 30 }}
              className="flex justify-center"
            >
              <motion.div
                key={value}
                initial={{ y: 10, opacity: 0 }}
                animate={{ 
                  y: [10, -15, 0],
                  opacity: 1,
                  scale: [1, 1.4, 1],
                }}
                transition={{ 
                  duration: 0.45,
                  ease: "easeOut"
                }}
                className="w-3.5 h-3.5 bg-blue-400 rounded-full shadow-[0_0_20px_rgba(96,165,250,1)] ring-4 ring-blue-400/20"
              />
            </motion.div>
          </div>
        </div>

        <div 
          role="radiogroup" 
          aria-labelledby="category-label"
          className="grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          {keys.map((key) => {
            const Icon = icons[key];
            const isSelected = value === key;
            
            return (
              <motion.button
                key={key}
                onClick={() => onChange(key)}
                role="radio"
                aria-checked={isSelected}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                  'relative flex flex-col items-center justify-center p-6 rounded-2xl border-2 transition-all duration-300 gap-3 z-10 overflow-hidden',
                  isSelected
                    ? 'border-blue-500 bg-blue-500/15 text-blue-400 shadow-[0_0_30px_rgba(59,130,246,0.2)]'
                    : 'border-white/5 bg-white/5 text-gray-500 hover:border-white/10 hover:text-gray-300'
                )}
              >
                {isSelected && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent pointer-events-none"
                  />
                )}
                <Icon className={cn("w-7 h-7 relative z-10", isSelected ? "text-blue-400" : "text-gray-600")} aria-hidden="true" />
                <span className="font-bold text-xs uppercase tracking-[0.2em] relative z-10">{categories[key]}</span>
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
}