import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: ReactNode;
  className?: string;
  title?: string;
  icon?: React.ComponentType<{ className?: string }>;
}

export function Card({ children, className, title, icon: Icon }: CardProps) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={cn(
        'bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 shadow-lg',
        className
      )}
    >
      {title && (
        <div className="flex items-center space-x-3 mb-4">
          {Icon && <Icon className="w-6 h-6 text-blue-400" aria-hidden="true" />}
          <h2 className="text-xl font-semibold text-gray-100">{title}</h2>
        </div>
      )}
      <div className="text-gray-300 leading-relaxed space-y-3">
        {children}
      </div>
    </motion.div>
  );
}