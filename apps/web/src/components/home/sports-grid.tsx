import Link from 'next/link'
import { Trophy, Palette, Sparkles, Music, Flame, Star, ArrowUpRight } from 'lucide-react'
import { SPORTS, sportHref, type CategoryItem } from '@/lib/home/nav'

const ICONS: Record<CategoryItem['icon'], typeof Trophy> = { Trophy, Palette, Sparkles, Music, Flame, Star }

// Arte própria por coleção: bloco de cor da marca + ícone gigante + tipografia
// adesiva. Sem dependência de imagens externas. Cores distribuídas para não
// repetir na mesma coluna do grid de 3 colunas.
const TILE: Record<string, { bg: string; ghost: string }> = {
  esporte: { bg: 'bg-blue-500', ghost: 'text-white/25' },
  autorais: { bg: 'bg-pink-500', ghost: 'text-white/25' },
  'cultura-pop': { bg: 'bg-yellow-400', ghost: 'text-night-900/15' },
  musica: { bg: 'bg-pink-500', ghost: 'text-white/25' },
  streetwear: { bg: 'bg-yellow-400', ghost: 'text-night-900/15' },
  classicos: { bg: 'bg-blue-500', ghost: 'text-white/25' },
}
const FALLBACK = { bg: 'bg-blue-500', ghost: 'text-white/25' }

export function SportsGrid() {
  return (
    <section className="mx-auto max-w-[1440px] px-6 py-16 sm:px-8">
      <div className="mb-8">
        <span className="text-xs font-extrabold uppercase tracking-[0.3em] text-brand-700">Explore</span>
        <h2 className="mt-1 font-display text-3xl font-extrabold uppercase tracking-tight text-night-900">
          Compre por coleção
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SPORTS.map((s) => {
          const Icon = ICONS[s.icon]
          const t = TILE[s.slug] ?? FALLBACK
          return (
            <Link
              key={s.slug}
              href={sportHref(s.name)}
              className={`group relative flex h-52 items-end overflow-hidden rounded-2xl border-2 border-night-900 ${t.bg} transition-all hover:-translate-y-1 hover:shadow-sticker`}
            >
              {/* textura diagonal sutil */}
              <div
                aria-hidden
                className="absolute inset-0 opacity-[0.08] [background:repeating-linear-gradient(45deg,#111114_0_2px,transparent_2px_14px)]"
              />
              {/* ícone gigante ao fundo */}
              <Icon
                aria-hidden
                strokeWidth={1.5}
                className={`pointer-events-none absolute -bottom-6 -right-4 h-44 w-44 rotate-[-12deg] ${t.ghost} transition-transform duration-500 group-hover:scale-110`}
              />
              {/* conteúdo */}
              <div className="relative p-6">
                <span className="sticker-text font-display text-2xl font-extrabold uppercase tracking-tight">
                  {s.name}
                </span>
                <span className="mt-2 flex w-fit items-center gap-1 rounded-full border-2 border-night-900 bg-white px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-night-900">
                  Ver produtos
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
                </span>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
