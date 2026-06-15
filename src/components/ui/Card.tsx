import { ReactNode } from 'react';
import { cn } from '../../lib/utils';

interface CardProps {
  children: ReactNode;
  className?: string;
  title?: string;
  icon?: React.ComponentType<{ className?: string }>;
}

export function Card({ children, className, title, icon: Icon }: CardProps) {
  return (
    <div
      className={cn(
        'glass-card p-6 transition-transform duration-300 hover:-translate-y-1',
        className
      )}
    >
      {title && (
        <div className="flex items-center space-x-3 mb-4">
          {Icon && <Icon className="w-6 h-6 text-green-400" aria-hidden="true" />}
          <h2 className="text-2xl font-pixel tracking-wide text-white">{title}</h2>
        </div>
      )}
      <div className="text-gray-300 leading-relaxed font-sans text-sm md:text-base space-y-3 flex-grow flex flex-col">
        {children}
      </div>
    </div>
  );
}