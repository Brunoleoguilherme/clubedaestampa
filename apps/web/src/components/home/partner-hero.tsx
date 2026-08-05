import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

/**
 * Hero da loja de um parceiro: painel na cor do parceiro (via tema "brand"),
 * com contorno preto e título em estilo adesivo. Sem imagens do Clube da Estampa.
 */
export function PartnerHero({
  name,
  tagline,
  logoUrl,
  bannerUrl,
  bare = false,
}: {
  name: string
  tagline: string | null
  logoUrl: string | null
  bannerUrl?: string | null
  bare?: boolean
}) {
  return (
    <section className={bare ? 'relative' : 'relative mx-auto max-w-[1440px] px-4 pt-24 sm:px-8 sm:pt-28'}>
      <div className={bare ? '' : 'relative overflow-hidden rounded-[28px] border-[3px] border-night-900 shadow-sticker'}>
        {!bare && bannerUrl ? (
          <>
            <div
              aria-hidden
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${bannerUrl}')` }}
            />
            <div aria-hidden className="absolute inset-0 bg-night-900/55" />
          </>
        ) : null}
        {!bare && !bannerUrl ? <div aria-hidden className="absolute inset-0 bg-brand-500" /> : null}

        {!bare && logoUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={logoUrl}
            alt=""
            aria-hidden
            className="pointer-events-none absolute bottom-0 right-4 hidden h-[150%] w-auto max-w-[45%] object-contain object-bottom opacity-15 lg:block"
          />
        ) : null}

        <div className="relative px-6 py-14 sm:px-10 sm:py-20">
          <span className="inline-block rounded-full border-2 border-night-900 bg-white px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.25em] text-night-900">
            Loja oficial
          </span>
          <h1 className="sticker-text mt-4 max-w-2xl font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-tight sm:text-6xl">
            {tagline || `Vista as cores do ${name}`}
          </h1>
          <div className="mt-5 flex flex-col gap-5 sm:flex-row sm:items-center">
            <p className="max-w-md text-base font-medium text-white sm:text-lg">
              Produtos oficiais e coleção do time, com entrega para todo o Brasil.
            </p>
            <Link
              href="/produtos"
              className="inline-flex h-[52px] shrink-0 items-center gap-2 rounded-xl border-2 border-night-900 bg-white px-7 text-sm font-extrabold uppercase tracking-wide text-night-900 shadow-sticker-sm transition-transform duration-200 hover:-translate-y-0.5"
            >
              Explorar a loja <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
