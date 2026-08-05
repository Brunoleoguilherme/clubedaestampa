import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

/**
 * Hero "pop": painel com as três faixas da marca, título em estilo adesivo
 * (fill branco + contorno preto) e chamadas de ação de alto contraste.
 */
export function HeroSection() {
  return (
    <section className="mx-auto max-w-[1440px] px-4 pb-6 pt-24 sm:px-8 sm:pt-28">
      <div className="relative overflow-hidden rounded-[28px] border-[3px] border-night-900 shadow-sticker">
        {/* faixas de cor */}
        <div aria-hidden className="brand-stripes absolute inset-0" />
        <div aria-hidden className="absolute inset-0 bg-night-900/10" />

        <div className="relative flex flex-col items-center px-6 py-16 text-center sm:py-24">
          <span className="kof-pop kof-d1 inline-block rounded-full border-2 border-night-900 bg-white px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.25em] text-night-900">
            Estampas autorais
          </span>

          <h1 className="kof-pop kof-d2 sticker-text mt-6 font-display text-5xl font-extrabold uppercase leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
            Vista o que
            <br /> você curte
          </h1>

          <p
            className="kof-fade-up kof-d3 mx-auto mt-6 max-w-md text-base font-medium text-white sm:text-lg"
            style={{ textShadow: '0 1px 6px rgba(17,17,20,0.55)' }}
          >
            Coleções que falam a sua língua — do esporte à cultura pop.
            Qualidade premium e entrega para todo o Brasil.
          </p>

          <div className="kof-fade-up kof-d4 mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/produtos"
              className="inline-flex h-[52px] items-center gap-2 rounded-xl border-2 border-night-900 bg-white px-7 text-sm font-extrabold uppercase tracking-wide text-night-900 shadow-sticker-sm transition-transform duration-200 hover:-translate-y-0.5"
            >
              Explorar a loja <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link
              href="#lancamentos"
              className="inline-flex h-[52px] items-center rounded-xl border-2 border-night-900 bg-night-900 px-7 text-sm font-extrabold uppercase tracking-wide text-white transition-transform duration-200 hover:-translate-y-0.5"
            >
              Ver lançamentos
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
