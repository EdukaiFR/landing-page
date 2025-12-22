'use client';

interface MobileMenuBackdropProps {
  visible: boolean;
  onClose: () => void;
}

/**
 * Backdrop overlay for mobile menu with fade animation.
 */
export function MobileMenuBackdrop({
  visible,
  onClose,
}: MobileMenuBackdropProps) {
  return (
    <div
      className={`absolute inset-0 bg-black transition-opacity duration-300 ease-in-out ${
        visible ? 'opacity-50' : 'opacity-0'
      }`}
      onClick={onClose}
      aria-hidden="true"
    />
  );
}
