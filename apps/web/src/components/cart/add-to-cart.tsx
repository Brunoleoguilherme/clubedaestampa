'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Check, Heart, Minus, Plus, ShoppingCart } from 'lucide-react'
import { formatBRL } from '@clubedaestampa/ui'
import { useCart } from './cart-context'
import { trackAddToCart } from '@/lib/analytics/events'

export interface AddToCartVariant {
  id: string
  label: string
  priceCents: number
}

interface AddToCartProps {
  productId: string
  slug: string
  name: string
  imageUrl: string | null
  variants: AddToCartVariant[]
}

export function AddToCart({ productId, slug, name, imageUrl, variants }: AddToCartProps) {
  const router = useRouter()
  const { add } = useCart()
  const [selectedId, setSelectedId] = useState<string>(variants[0]?.id ?? '')
  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)

  const hasVariants = variants.length > 0
  const selected = variants.find((v) => v.id === selectedId) ?? variants[0]

  function handleAdd(goToCart: boolean) {
    if (!selected) return
    add(
      {
        variantId: selected.id,
        productId,
        slug,
        name,
        variantLabel: variants.length > 1 ? selected.label : null,
        unitPriceCents: selected.priceCents,
        imageUrl,
      },
      qty,
    )
    trackAddToCart({ id: selected.id, name, priceCents: selected.priceCents, quantity: qty })
    if (goToCart) {
      router.push('/carrinho')
      return
    }
    setAdded(true)
    window.setTimeout(() => setAdded(false), 2500)
  }

  return (
    <>
    <div className="mt-6">
      {variants.length > 1 && (
        <div className="mb-5">
          <h2 className="mb-2 text-sm font-bold uppercase tracking-wide text-night-900">
            Escolha a variação
          </h2>
          <div className="flex flex-wrap gap-2">
            {variants.map((v) => {
              const active = v.id === selectedId
              return (
                <button
                  key={v.id}
                  type="button"
                  onClick={() => setSelectedId(v.id)}
                  className={`rounded-lg border-2 px-3 py-2 text-sm font-semibold transition-colors ${
                    active
                      ? 'border-night-900 bg-brand-50 text-brand-700'
                      : 'border-night-200 bg-white text-night-700 hover:border-night-900'
                  }`}
                >
                  {v.label}
                </button>
              )
            })}
          </div>
        </div>
      )}

      <div className="flex flex-wrap items-center gap-3">
        {/* quantidade */}
        <div className="inline-flex h-12 items-center rounded-lg border-2 border-night-200">
          <button
            type="button"
            aria-label="Diminuir quantidade"
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            className="flex h-full w-11 items-center justify-center text-night-900 transition-colors hover:text-accent"
          >
            <Minus className="h-4 w-4" aria-hidden />
          </button>
          <span className="w-8 text-center text-sm font-bold text-night-900">{qty}</span>
          <button
            type="button"
            aria-label="Aumentar quantidade"
            onClick={() => setQty((q) => Math.min(99, q + 1))}
            className="flex h-full w-11 items-center justify-center text-night-900 transition-colors hover:text-accent"
          >
            <Plus className="h-4 w-4" aria-hidden />
          </button>
        </div>

        <button
          type="button"
          disabled={!hasVariants}
          onClick={() => handleAdd(true)}
          className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-lg border-2 border-night-900 bg-accent px-6 text-sm font-extrabold uppercase tracking-wide text-white transition-all hover:-translate-y-0.5 hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-50 sm:flex-none"
        >
          <ShoppingCart className="h-5 w-5" aria-hidden /> Adicionar ao carrinho
        </button>

        <Link
          href="/conta/favoritos"
          aria-label="Favoritar"
          className="inline-flex h-12 items-center justify-center rounded-lg border-2 border-night-200 px-4 text-night-900 transition-colors hover:border-night-900 hover:text-pink-500"
        >
          <Heart className="h-5 w-5" aria-hidden />
        </Link>
      </div>

      {hasVariants && (
        <button
          type="button"
          onClick={() => handleAdd(false)}
          className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-night-500 transition-colors hover:text-accent"
        >
          {added ? (
            <>
              <Check className="h-4 w-4 text-success" aria-hidden /> Adicionado! Continuar comprando
            </>
          ) : (
            'Adicionar e continuar comprando'
          )}
        </button>
      )}

      {!hasVariants && (
        <p className="mt-3 text-sm text-danger">Produto sem variação disponível para compra.</p>
      )}
    </div>

    {/* Barra fixa de compra — só no mobile */}
    {selected && (
      <div className="fixed inset-x-0 bottom-0 z-30 border-t-2 border-night-900 bg-white/95 px-4 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] backdrop-blur-md lg:hidden">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4">
          <div className="leading-tight">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-night-500">Total</p>
            <p className="text-lg font-extrabold text-night-900">{formatBRL(selected.priceCents * qty)}</p>
          </div>
          <button
            type="button"
            onClick={() => handleAdd(true)}
            className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-lg border-2 border-night-900 bg-accent px-6 text-sm font-extrabold uppercase tracking-wide text-white transition-colors hover:bg-brand-600"
          >
            <ShoppingCart className="h-5 w-5" aria-hidden /> Adicionar
          </button>
        </div>
      </div>
    )}
    </>
  )
}
