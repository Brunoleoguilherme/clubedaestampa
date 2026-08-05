import Link from 'next/link'
import { cn } from '@/lib/utils'

interface WordmarkProps {
  href?: string
  className?: string
  /** Compat: a arte já é o wordmark completo. */
  tagline?: boolean
  mark?: boolean
  size?: 'sm' | 'md' | 'lg' | 'xl'
  /** Contorno claro (para usar sobre fundos escuros, ex.: rodapé). */
  onDark?: boolean
}

const HEIGHTS: Record<NonNullable<WordmarkProps['size']>, number> = {
  sm: 34,
  md: 46,
  lg: 92,
  xl: 116,
}

const RATIO = 360 / 190

/**
 * Wordmark oficial "CLUBE DA ESTAMPA" (Brand Book v2.0) — vetor, estilo adesivo:
 * fill branco, contorno preto grosso e sombra dura deslocada. Escala em qualquer
 * tamanho e funciona sobre qualquer fundo.
 */
export function Wordmark({ href, className, size = 'md', onDark = false }: WordmarkProps) {
  const h = HEIGHTS[size]
  const stroke = onDark ? '#ffffff' : '#111114'
  const shadow = onDark ? 'rgba(0,0,0,0.55)' : '#111114'

  const svg = (
    <svg
      height={h}
      width={h * RATIO}
      viewBox="0 0 360 190"
      role="img"
      aria-label="Clube da Estampa"
      className={cn('select-none', className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <style>{`.wm{font-family:var(--font-display),'Montserrat',system-ui,sans-serif;font-weight:800;font-size:78px;letter-spacing:-1px}`}</style>
      </defs>
      {/* sombra dura */}
      <g transform="translate(4,6)" aria-hidden="true">
        <text className="wm" x="180" y="74" textAnchor="middle" textLength="336" lengthAdjust="spacingAndGlyphs" fill={shadow} transform="rotate(-2 180 62)">CLUBE DA</text>
        <text className="wm" x="180" y="168" textAnchor="middle" textLength="330" lengthAdjust="spacingAndGlyphs" fill={shadow} transform="rotate(1.5 180 150)">ESTAMPA</text>
      </g>
      {/* letras */}
      <g fill="#ffffff" stroke={stroke} strokeWidth="6" strokeLinejoin="round" paintOrder="stroke" style={{ paintOrder: 'stroke' }}>
        <text className="wm" x="180" y="74" textAnchor="middle" textLength="336" lengthAdjust="spacingAndGlyphs" transform="rotate(-2 180 62)">CLUBE DA</text>
        <text className="wm" x="180" y="168" textAnchor="middle" textLength="330" lengthAdjust="spacingAndGlyphs" transform="rotate(1.5 180 150)">ESTAMPA</text>
      </g>
    </svg>
  )

  if (href) {
    return (
      <Link href={href} className={cn('inline-flex', className)}>
        {svg}
      </Link>
    )
  }
  return <span className="inline-flex">{svg}</span>
}
