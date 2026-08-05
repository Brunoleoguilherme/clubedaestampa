interface KLogoProps {
  size?: number
  className?: string
  title?: string
}

/**
 * Marca "adesivo" Clube da Estampa — bloco arredondado com as três faixas de cor
 * (rosa, azul, amarelo) e o monograma "CE" com contorno preto. Recriação vetorial
 * do Brand Book v2.0.
 */
export function KLogo({ size = 40, className, title = 'Clube da Estampa' }: KLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      role="img"
      aria-label={title}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <clipPath id="ce-tile">
          <rect x="5" y="5" width="90" height="90" rx="22" />
        </clipPath>
      </defs>
      {/* faixas */}
      <g clipPath="url(#ce-tile)">
        <rect x="5" y="5" width="30" height="90" fill="#ff446c" />
        <rect x="35" y="5" width="30" height="90" fill="#2b8df6" />
        <rect x="65" y="5" width="30" height="90" fill="#fcca07" />
      </g>
      {/* borda preta */}
      <rect x="5" y="5" width="90" height="90" rx="22" fill="none" stroke="#111114" strokeWidth="6" />
      {/* monograma */}
      <text
        x="50"
        y="52"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="var(--font-display), 'Montserrat', system-ui, sans-serif"
        fontWeight="800"
        fontSize="46"
        fill="#ffffff"
        stroke="#111114"
        strokeWidth="3.4"
        strokeLinejoin="round"
        style={{ paintOrder: 'stroke' }}
        transform="rotate(-3 50 50)"
      >
        CE
      </text>
    </svg>
  )
}
