import { CategoryKey, categories } from '../../lib/data';
import { cn } from '../../lib/utils';
import { Layers, Grid3x3, Puzzle } from 'lucide-react';

const icons: Record<CategoryKey, typeof Layers> = {
  overlay: Layers,
  ramki: Grid3x3,
  pozostale: Puzzle,
};

interface CategorySelectProps {
  value: CategoryKey;
  onChange: (value: CategoryKey) => void;
}

export function CategorySelect({ value, onChange }: CategorySelectProps) {
  const keys = Object.keys(categories) as CategoryKey[];

  return (
    <div className="space-y-4 text-center relative select-none">
      <label 
        id="category-label"
        className="block font-pixel text-xl tracking-wider text-green-400"
      >
        Krok 1: Wybierz kategorię
      </label>
      
      <div className="relative max-w-2xl mx-auto">
        <div 
          role="radiogroup" 
          aria-labelledby="category-label"
          className="grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          {keys.map((key) => {
            const Icon = icons[key];
            const isSelected = value === key;
            
            return (
              <button
                key={key}
                onClick={() => onChange(key)}
                role="radio"
                aria-checked={isSelected}
                className={cn(
                  'flex flex-col items-center justify-center p-4 md:p-5 rounded-[4px] border-2 border-t-white/10 border-l-white/10 transition-all duration-75 gap-2 select-none active:translate-y-[4px]',
                  isSelected
                    ? 'bg-green-600 border-r-black/40 border-b-black/60 text-white shadow-[0_4px_0_#14532d,0_0_20px_rgba(34,197,94,0.5)]'
                    : 'bg-obsidian-800 hover:bg-obsidian-700 border-r-black/30 border-b-black/45 text-gray-400 hover:text-gray-200 shadow-[0_4px_0_rgba(0,0,0,0.5)]'
                )}
              >
                <Icon className={cn("w-7 h-7", isSelected ? "text-white animate-pulse" : "text-gray-500")} aria-hidden="true" />
                <span className="font-pixel text-lg uppercase tracking-widest">{categories[key]}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}