'use client'

import Link from 'next/link'
import { KLogo } from '@/components/brand/k-logo'
import { useBrand } from '@/components/partners/brand-context'

/**
 * Logo do header. Loja principal: bloco "CE" + CLUBE DA ESTAMPA.
 * Loja de parceiro: o logo enviado (ou o nome do parceiro).
 */
export function HeaderLogo() {
  const brand = useBrand()

  if (brand.isPartner) {
    return (
      <Link
        href="/"
        aria-label={`${brand.name} — página inicial`}
        className="flex shrink-0 items-center gap-2.5"
      >
        {brand.logoUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={brand.logoUrl}
            alt={brand.name}
            className="h-14 w-auto max-w-[240px] object-contain sm:h-16"
          />
        ) : (
          <span className="font-display text-xl font-extrabold uppercase leading-none tracking-tight text-night-900 sm:text-2xl">
            {brand.name}
          </span>
        )}
      </Link>
    )
  }

  return (
    <Link
      href="/"
      aria-label="Clube da Estampa — página inicial"
      className="flex shrink-0 items-center gap-2.5"
    >
      <KLogo size={38} className="shrink-0 drop-shadow-[2px_2px_0_rgba(17,17,20,0.15)]" />
      <span className="font-display text-lg font-extrabold uppercase leading-none tracking-tight text-night-900 sm:text-2xl">
        <span>CLUBE DA </span>
        <span className="text-accent">ESTAMPA</span>
      </span>
    </Link>
  )
}
