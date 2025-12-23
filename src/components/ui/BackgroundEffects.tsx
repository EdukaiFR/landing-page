/**
 * Background effects component with blobs and grid pattern.
 * Creates a modern, dynamic background without being distracting.
 */
export function BackgroundEffects() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Base surface color */}
      <div className="bg-surface absolute inset-0" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(54, 120, 255, 0.075) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(54, 120, 255, 0.075) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Top-left blob - Blue */}
      <div
        className="absolute -top-20 -left-20 h-[600px] w-[600px] rounded-full blur-[100px]"
        style={{
          background: 'rgba(54, 120, 255, 0.25)',
        }}
      />

      {/* Top-right blob - Cyan/Teal */}
      <div
        className="absolute top-10 -right-32 h-[500px] w-[500px] rounded-full blur-[100px]"
        style={{
          background: 'rgba(34, 211, 238, 0.2)',
        }}
      />

      {/* Center blob - Light blue */}
      <div
        className="absolute top-1/3 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full blur-[120px]"
        style={{
          background: 'rgba(96, 165, 250, 0.15)',
        }}
      />

      {/* Bottom-left blob - Sky blue */}
      <div
        className="absolute bottom-0 -left-20 h-[500px] w-[500px] rounded-full blur-[100px]"
        style={{
          background: 'rgba(56, 189, 248, 0.2)',
        }}
      />

      {/* Bottom-right blob - Brand blue */}
      <div
        className="absolute -right-20 -bottom-32 h-[600px] w-[600px] rounded-full blur-[100px]"
        style={{
          background: 'rgba(54, 120, 255, 0.2)',
        }}
      />
    </div>
  );
}
