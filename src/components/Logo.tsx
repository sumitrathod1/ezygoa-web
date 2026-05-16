interface LogoProps {
  variant?: "full" | "icon";
  size?: "sm" | "md" | "lg" | "xl";
  color?: "dark" | "light";
  className?: string;
}

const FULL_DIMS: Record<string, { w: number; h: number }> = {
  sm: { w: 128, h: 35 },
  md: { w: 172, h: 47 },
  lg: { w: 230, h: 63 },
  xl: { w: 290, h: 79 },
};

const ICON_DIMS: Record<string, { w: number; h: number }> = {
  sm: { w: 32, h: 32 },
  md: { w: 40, h: 40 },
  lg: { w: 56, h: 56 },
  xl: { w: 72, h: 72 },
};

function IconParts({ id }: { id: string }) {
  const gold = "#f6ad55";
  const darkBlue = "#1a365d";

  return (
    <>
      <defs>
        <linearGradient id={`ezyBg-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1a365d" />
          <stop offset="100%" stopColor="#2c5282" />
        </linearGradient>
        <clipPath id={`ezyClip-${id}`}>
          <circle cx="36" cy="36" r="33" />
        </clipPath>
      </defs>

      <g clipPath={`url(#ezyClip-${id})`}>
        {/* Ocean blue circle background */}
        <circle cx="36" cy="36" r="36" fill={`url(#ezyBg-${id})`} />

        {/* Subtle wave fill at bottom */}
        <path
          d="M 0 60 Q 10 55 20 60 Q 30 65 40 60 Q 50 55 60 60 L 72 58 L 72 72 L 0 72 Z"
          fill="white"
          opacity="0.07"
        />

        {/* Palm trunk — curves gently from bottom-left upward */}
        <path
          d="M 22 64 Q 19 44 24 20"
          stroke={gold}
          strokeWidth="3.5"
          fill="none"
          strokeLinecap="round"
        />

        {/* Palm fronds */}
        <path d="M 24 20 Q 13 13 9 17"  stroke={gold} strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M 24 20 Q 29  9 33 12" stroke={gold} strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M 24 20 Q 17 10 17  8" stroke={gold} strokeWidth="2.5" fill="none" strokeLinecap="round" />

        {/* Small mid frond for depth */}
        <path d="M 24 29 Q 16 27 14 30" stroke="#ed8936" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.75" />

        {/* Taxi car body */}
        <rect x="28" y="45" width="34" height="12" rx="3" fill={gold} />

        {/* Taxi car roof */}
        <path d="M 32 45 L 36 38 L 57 38 L 61 45 Z" fill={gold} />

        {/* Windows */}
        <rect x="37" y="39" width="7" height="5" rx="1.5" fill={darkBlue} opacity="0.55" />
        <rect x="47" y="39" width="7" height="5" rx="1.5" fill={darkBlue} opacity="0.55" />

        {/* Roof taxi sign */}
        <rect x="40" y="34" width="13" height="4" rx="1" fill="white" opacity="0.92" />

        {/* Front headlight */}
        <rect x="60" y="49" width="2.5" height="5" rx="1" fill="white" opacity="0.7" />

        {/* Front wheel */}
        <circle cx="35" cy="57" r="4.5" fill={darkBlue} />
        <circle cx="35" cy="57" r="1.8" fill={gold} />

        {/* Rear wheel */}
        <circle cx="55" cy="57" r="4.5" fill={darkBlue} />
        <circle cx="55" cy="57" r="1.8" fill={gold} />
      </g>
    </>
  );
}

export function Logo({
  variant = "full",
  size = "md",
  color = "dark",
  className = "",
}: LogoProps) {
  const isIcon = variant === "icon";
  const dims = isIcon ? ICON_DIMS[size] : FULL_DIMS[size];
  const viewBox = isIcon ? "0 0 72 72" : "0 0 260 72";
  const isLight = color === "light";

  const ezyColor = isLight ? "white" : "#1a365d";
  const subColor = isLight ? "rgba(255,255,255,0.55)" : "#718096";

  return (
    <svg
      width={dims.w}
      height={dims.h}
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label={isIcon ? "EzyGoa" : "EzyGoa Taxi Services"}
      role="img"
    >
      <IconParts id={isIcon ? "ico" : "full"} />

      {!isIcon && (
        <>
          {/* Company name */}
          <text
            x="82"
            y="42"
            fontSize="28"
            fontWeight="800"
            fontFamily="'Poppins', 'Inter', sans-serif"
            fill={ezyColor}
            letterSpacing="-0.5"
          >
            Ezy
            <tspan fill="#f6ad55">Goa</tspan>
          </text>

          {/* Tagline */}
          <text
            x="83"
            y="59"
            fontSize="9"
            fontWeight="600"
            fontFamily="'Inter', sans-serif"
            fill={subColor}
            letterSpacing="3"
          >
            TAXI SERVICES
          </text>
        </>
      )}
    </svg>
  );
}

export function LogoIcon({
  size = "md",
  className = "",
}: {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}) {
  return <Logo variant="icon" size={size} className={className} />;
}

export default Logo;
