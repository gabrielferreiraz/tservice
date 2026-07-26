type LogoProps = {
  variant?: "header" | "hero";
  theme?: "dark" | "light";
};

// Recriação temporária da logo em SVG/CSS.
// Substitua por <Image src="/logo.png" .../> assim que o arquivo
// PNG original (enviado no chat) for salvo em /public/logo.png.
export default function Logo({ variant = "header", theme = "dark" }: LogoProps) {
  const textColor = theme === "dark" ? "text-paper" : "text-ink";
  const isHero = variant === "hero";

  return (
    <div className={`flex ${isHero ? "flex-col items-center gap-3" : "items-center gap-2"}`}>
      <span
        className={`font-heading font-bold italic tracking-tight ${textColor} ${
          isHero ? "text-4xl sm:text-5xl" : "text-xl"
        }`}
      >
        T&apos;Service
      </span>
      <div className={`flex items-center gap-2 ${isHero ? "" : ""}`}>
        <HelmetGearIcon className={isHero ? "h-9 w-9" : "h-6 w-6"} />
        <span
          className={`font-heading font-semibold italic tracking-wide text-brand ${
            isHero ? "text-2xl sm:text-3xl" : "text-base"
          }`}
        >
          INFRA
        </span>
      </div>
    </div>
  );
}

function HelmetGearIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path
        d="M24 8c-8 0-14 6-14 14v2h28v-2c0-8-6-14-14-14z"
        fill="currentColor"
        className="text-ink dark:text-paper"
      />
      <rect x="21" y="4" width="6" height="6" rx="1" fill="currentColor" className="text-ink dark:text-paper" />
      <rect x="8" y="24" width="32" height="3" rx="1.5" fill="white" />
      <circle cx="24" cy="34" r="7" fill="white" stroke="currentColor" strokeWidth="2" className="text-ink dark:text-paper" />
      <circle cx="24" cy="34" r="2.5" fill="currentColor" className="text-ink dark:text-paper" />
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i * Math.PI) / 4;
        const x1 = 24 + Math.cos(angle) * 7;
        const y1 = 34 + Math.sin(angle) * 7;
        const x2 = 24 + Math.cos(angle) * 9;
        const y2 = 34 + Math.sin(angle) * 9;
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            className="text-ink dark:text-paper"
          />
        );
      })}
    </svg>
  );
}
