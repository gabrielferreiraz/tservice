export default function HazardStripe({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`h-1.5 w-full ${className}`}
      style={{
        backgroundImage:
          "repeating-linear-gradient(135deg, var(--color-brand) 0 14px, var(--color-ink) 14px 28px)",
      }}
    />
  );
}
