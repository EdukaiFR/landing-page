'use client';

interface MobileMenuCloseButtonProps {
  onClose: () => void;
  ariaLabel: string;
}

/**
 * Close button for mobile menu with X icon.
 */
export function MobileMenuCloseButton({
  onClose,
  ariaLabel,
}: MobileMenuCloseButtonProps) {
  return (
    <div className="flex items-center justify-end px-4 pt-4">
      <button
        type="button"
        onClick={onClose}
        className="rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
      >
        <span className="sr-only">{ariaLabel}</span>
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
}
