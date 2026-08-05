/**
 * Clube da Estampa design tokens — Brand Book v2.0 "Pop".
 * Bright, playful, high-energy identity: paper-white base with three signature
 * colors (rosa, azul, amarelo), heavy black outlines and bold display type.
 * Shared by web (Tailwind) and mobile (Expo).
 */

// Rosa #FF446C — energia e destaque.
const pink = {
  50: '#fff0f3',
  100: '#ffe1e7',
  200: '#ffc3d0',
  300: '#ff9ab0',
  400: '#ff6d8c',
  500: '#ff446c',
  600: '#d6395b',
  700: '#ad2e49',
  800: '#7a2134',
  900: '#521623',
} as const

// Azul #2B8DF6 — confiança, ações de comércio.
const blue = {
  50: '#eef6fe',
  100: '#ddedfe',
  200: '#bbdbfc',
  300: '#8dc1fa',
  400: '#5aa6f8',
  500: '#2b8df6',
  600: '#2476cf',
  700: '#1d60a7',
  800: '#154476',
  900: '#0e2d4f',
} as const

// Amarelo #FCCA07 — alegria, chamadas de atenção.
const yellow = {
  50: '#fffbeb',
  100: '#fff7d7',
  200: '#feeeb0',
  300: '#fde279',
  400: '#fdd63e',
  500: '#fcca07',
  600: '#d4aa06',
  700: '#ab8905',
  800: '#796103',
  900: '#514102',
} as const

export const colors = {
  // "brand" = escala padrão dirigida por CSS var no web (padrão = Azul).
  // Mantida com a mesma forma (50–900) para compatibilidade com todo o código.
  brand: blue,
  pink,
  blue,
  yellow,
  // Neutros — base clara (paper) até tinta (ink). 900 = tinta quase preta.
  night: {
    50: '#f5f6f7',
    100: '#e6e7ea',
    200: '#cfd1d6',
    300: '#a9acb3',
    400: '#8b8e96',
    500: '#6b6e76',
    600: '#44464d',
    700: '#2a2b30',
    800: '#1c1d21',
    900: '#111114',
  },
  ink: '#111114',
  paper: '#ffffff',
  silver: '#cfd1d6',
  accent: '#2b8df6', // azul (brand-aligned)
  danger: '#e5484d',
  warning: '#f5a524',
  success: '#2fa96a',
} as const

export const radii = { sm: 4, md: 8, lg: 12, xl: 16, pill: 9999 } as const
export const spacing = { xs: 4, sm: 8, md: 16, lg: 24, xl: 32, '2xl': 48 } as const
export const fontSizes = { xs: 12, sm: 14, base: 16, lg: 18, xl: 22, '2xl': 28, '3xl': 36 } as const

/** Brand tagline (Brand Book v2.0). */
export const BRAND_TAGLINE = 'Vista o que você curte'

/** As três cores de assinatura, para uso em rotação por seção. */
export const SIGNATURE = { pink: pink[500], blue: blue[500], yellow: yellow[500] } as const

export type ColorScale = typeof blue
