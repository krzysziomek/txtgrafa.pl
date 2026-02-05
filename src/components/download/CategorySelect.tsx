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
    <div className="space-y-3">
      <label 
        id="category-label"
        className="block text-lg font-semibold text-gray-200"
      >
        Wybierz kategorię:
      </label>
      
      <div 
        role="radiogroup" 
        aria-labelledby="category-label"
        className="grid grid-cols-1 sm:grid-cols-3 gap-3"
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
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={cn(
                'relative flex items-center justify-center space-x-2 p-4 rounded-lg border-2 transition-all duration-300',
                isSelected
                  ? 'border-blue-500 bg-blue-500/10 text-blue-400'
                  : 'border-gray-700 bg-gray-800/50 text-gray-400 hover:border-gray-600 hover:bg-gray-800'
              )}
            >
              <Icon className="w-5 h-5" aria-hidden="true" />
              <span className="font-medium">{categories[key]}</span>
              
              {isSelected && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute inset-0 border-2 border-blue-500 rounded-lg"
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