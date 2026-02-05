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
  return (
    <div className="space-y-4 text-center">
      <label 
        id="category-label"
        className="block text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400"
      >
        Krok 1: Wybierz kategorię
      </label>
      
      <div 
        role="radiogroup" 
        aria-labelledby="category-label"
        className="grid grid-cols-1 sm:grid-cols-3 gap-4"
      >
        {(Object.keys(categories) as CategoryKey[]).map((key) => {
          const Icon = icons[key];
          const isSelected = value === key;
          
          return (
            <motion.button
              key={key}
              onClick={() => onChange(key)}
              role="radio"
              aria-checked={isSelected}
              whileHover={{ scale: 1.05, translateY: -2 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                'relative flex flex-col items-center justify-center p-5 rounded-2xl border-2 transition-all duration-300 gap-2',
                isSelected
                  ? 'border-blue-500 bg-blue-500/10 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.2)]'
                  : 'border-gray-800 bg-gray-900/50 text-gray-500 hover:border-gray-700 hover:text-gray-300'
              )}
            >
              <Icon className={cn("w-6 h-6", isSelected ? "text-blue-400" : "text-gray-600")} aria-hidden="true" />
              <span className="font-semibold text-sm uppercase tracking-wider">{categories[key]}</span>
              
              {isSelected && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute inset-0 border-2 border-blue-500 rounded-2xl"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}