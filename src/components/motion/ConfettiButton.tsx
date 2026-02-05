import { useCallback, useRef } from 'react';
import confetti from 'canvas-confetti';
import { Button } from '@/components/ui/button';

interface ConfettiButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

export function ConfettiButton({ onClick, children, className, disabled }: ConfettiButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = useCallback(() => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const x = (rect.left + rect.width / 2) / window.innerWidth;
      const y = (rect.top + rect.height / 2) / window.innerHeight;

      confetti({
        particleCount: 120,
        spread: 75,
        origin: { x, y },
        colors: ['#22c55e', '#3b82f6', '#eab308', '#ec4899'],
        disableForReducedMotion: true,
      });
    }

    onClick?.();
  }, [onClick]);

  return (
    <Button
      ref={buttonRef}
      onClick={handleClick}
      className={className}
      disabled={disabled}
      size="lg"
    >
      {children}
    </Button>
  );
}