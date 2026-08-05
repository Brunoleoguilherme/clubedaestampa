import Link from 'next/link'
import { Trophy, Palette, Sparkles, Music, Flame, Star } from 'lucide-react'
import { SPORTS, sportHref, type CategoryItem } from '@/lib/home/nav'

const ICONS: Record<CategoryItem['icon'], typeof Trophy> = {
  Trophy,
  Palette,
  Sparkles,
  Music,
  Flame,
  Star,
}

/** Faixa de coleções logo abaixo do hero. Scroll horizontal no mobile. */
export function CategoryNavigation() {
  return (
    <nav aria-label="Coleções" className="border-y border-night-100 bg-white">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8">
        <ul className="flex snap-x gap-3 overflow-x-auto py-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:grid lg:grid-cols-6 lg:overflow-visible">
          {SPORTS.map((s) => {
            const Icon = ICONS[s.icon]
            return (
              <li key={s.slug} className="snap-start">
                <Link
                  href={sportHref(s.name)}
                  className="flex min-w-[150px] items-center justify-center gap-2 rounded-xl border-2 border-night-900 bg-white px-4 py-3 text-sm font-extrabold uppercase tracking-wide text-night-900 transition-all hover:-translate-y-0.5 hover:shadow-sticker-sm lg:min-w-0"
                >
                  <Icon className="h-4 w-4 text-accent" aria-hidden />
                  {s.name}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
