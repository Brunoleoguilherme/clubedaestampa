import type { Config } from 'tailwindcss'
import { colors } from '@clubedaestampa/ui/tokens'

const config: Config = {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // "brand" é dirigido por variáveis CSS (padrão = Azul Clube da Estampa,
        // definido em globals.css). Seções trocam via .accent-* e parceiros
        // sobrescrevem por subdomínio (tema white-label).
        brand: {
          50: 'rgb(var(--brand-50) / <alpha-value>)',
          100: 'rgb(var(--brand-100) / <alpha-value>)',
          200: 'rgb(var(--brand-200) / <alpha-value>)',
          300: 'rgb(var(--brand-300) / <alpha-value>)',
          400: 'rgb(var(--brand-400) / <alpha-value>)',
          500: 'rgb(var(--brand-500) / <alpha-value>)',
          600: 'rgb(var(--brand-600) / <alpha-value>)',
          700: 'rgb(var(--brand-700) / <alpha-value>)',
          800: 'rgb(var(--brand-800) / <alpha-value>)',
          900: 'rgb(var(--brand-900) / <alpha-value>)',
        },
        // Cores de assinatura fixas (sempre disponíveis, independem da seção).
        pink: colors.pink,
        blue: colors.blue,
        yellow: colors.yellow,
        night: colors.night,
        accent: 'rgb(var(--accent) / <alpha-value>)',
        ink: colors.ink,
        paper: colors.paper,
        silver: colors.silver,
        surface: '#ffffff',
        'surface-light': '#f5f6f7',
        'background-secondary': '#f7f7f8',
        danger: colors.danger,
        success: colors.success,
        warning: colors.warning,
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'var(--font-sans)', 'sans-serif'],
      },
      boxShadow: {
        // "gold" mantém o nome por compatibilidade, mas agora é uma sombra "pop".
        gold: '0 10px 24px -12px rgba(17,17,20,0.35)',
        pop: '0 12px 30px -14px rgba(17,17,20,0.4)',
        // Sombra dura estilo adesivo/sticker (deslocada, preta).
        sticker: '5px 6px 0 0 #111114',
        'sticker-sm': '3px 4px 0 0 #111114',
      },
    },
  },
  plugins: [],
}

export default config
