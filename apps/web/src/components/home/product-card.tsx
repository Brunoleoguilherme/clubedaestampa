import Link from 'next/link'
import { Heart } from 'lucide-react'
import { formatBRL, formatInstallments, discountPercent } from '@clubedaestampa/ui'
import { productImageUrl } from '@/lib/catalog/image'
import type { ProductSummary } from '@/lib/catalog/models'

export function HomeProductCard({ product, badge }: { product: ProductSummary; badge?: 'novo' }) {
  const img = productImageUrl(product.imagePath)
  const discount =
    product.compareAtCents && product.compareAtCents > product.priceFromCents
      ? discountPercent(product.priceFromCents, product.compareAtCents)
      : 0

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border-2 border-night-900 bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-sticker">
      {/* favorito */}
      <Link
        href="/conta/favoritos"
        aria-label={`Favoritar ${product.name}`}
        className="absolute right-3 top-3 z-10 rounded-full border-2 border-night-900 bg-white p-2 text-night-900 transition-colors hover:text-pink-500"
      >
        <Heart className="h-4 w-4" aria-hidden />
      </Link>

      {/* selo */}
      {discount > 0 ? (
        <span className="absolute left-3 top-3 z-10 rounded-full border-2 border-night-900 bg-pink-500 px-2.5 py-0.5 text-xs font-extrabold text-white">
          -{discount}%
        </span>
      ) : badge === 'novo' ? (
        <span className="absolute left-3 top-3 z-10 rounded-full border-2 border-night-900 bg-yellow-400 px-2.5 py-0.5 text-xs font-extrabold uppercase text-night-900">
          Novo
        </span>
      ) : null}

      <Link href={`/produtos/${product.slug}`} className="flex flex-1 flex-col">
        <div className="relative aspect-square overflow-hidden border-b-2 border-night-900 bg-night-50">
          {img ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={img}
              alt={product.imageAlt ?? product.name}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-xs text-night-400">
              Sem imagem
            </div>
          )}
        </div>

        <div className="flex flex-1 flex-col gap-1 p-4">
          {product.brandName && (
            <span className="text-xs font-semibold uppercase tracking-wide text-night-500">
              {product.brandName}
            </span>
          )}
          <span className="line-clamp-2 text-sm font-bold text-night-900">{product.name}</span>
          <div className="mt-auto pt-3">
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-extrabold text-night-900">{formatBRL(product.priceFromCents)}</span>
              {discount > 0 && product.compareAtCents && (
                <span className="text-sm text-night-400 line-through">
                  {formatBRL(product.compareAtCents)}
                </span>
              )}
            </div>
            <p className="mt-0.5 text-xs text-night-500">{formatInstallments(product.priceFromCents, 10)}</p>
          </div>
        </div>
      </Link>

      {/* compra rápida no hover */}
      <div className="max-h-0 overflow-hidden px-4 opacity-0 transition-all duration-300 group-hover:max-h-16 group-hover:pb-4 group-hover:opacity-100">
        <Link
          href={`/produtos/${product.slug}`}
          className="flex h-10 w-full items-center justify-center rounded-lg border-2 border-night-900 bg-accent text-sm font-extrabold uppercase tracking-wide text-white transition-colors hover:bg-brand-600"
        >
          Ver produto
        </Link>
      </div>
    </div>
  )
}
