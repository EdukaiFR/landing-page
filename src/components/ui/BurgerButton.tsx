'use client';

interface BurgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
  ariaLabelOpen: string;
  ariaLabelClose: string;
}

/**
 * Animated burger menu button that transforms to X when open.
 * Uses CSS transforms for smooth animation.
 */
export function BurgerButton({
  isOpen,
  onClick,
  className = '',
  ariaLabelOpen,
  ariaLabelClose,
}: BurgerButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative flex h-10 w-10 items-center justify-center ${className}`}
      aria-label={isOpen ? ariaLabelClose : ariaLabelOpen}
      aria-expanded={isOpen}
    >
      <div className="flex h-5 w-6 flex-col justify-between">
        <span
          className={`block h-0.5 w-full origin-center rounded-full bg-neutral-800 transition-all duration-300 ease-in-out ${
            isOpen ? 'translate-y-[9px] rotate-45' : ''
          }`}
        />
        <span
          className={`block h-0.5 w-full rounded-full bg-neutral-800 transition-all duration-300 ease-in-out ${
            isOpen ? 'scale-x-0 opacity-0' : ''
          }`}
        />
        <span
          className={`block h-0.5 w-full origin-center rounded-full bg-neutral-800 transition-all duration-300 ease-in-out ${
            isOpen ? '-translate-y-[9px] -rotate-45' : ''
          }`}
        />
      </div>
    </button>
  );
}
