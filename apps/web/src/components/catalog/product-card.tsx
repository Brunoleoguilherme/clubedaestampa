import Link from 'next/link'
import { formatBRL, discountPercent } from '@clubedaestampa/ui'
import { productImageUrl } from '@/lib/catalog/image'
import type { ProductSummary } from '@/lib/catalog/models'

export function ProductCard({ product }: { product: ProductSummary }) {
  const img = productImageUrl(product.imagePath)
  const discount =
    product.compareAtCents && product.compareAtCents > product.priceFromCents
      ? discountPercent(product.priceFromCents, product.compareAtCents)
      : 0

  return (
    <Link
      href={`/produtos/${product.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border-2 border-night-900 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-sticker"
    >
      <div className="relative aspect-square overflow-hidden border-b-2 border-night-900 bg-night-50">
        {img ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={img}
            alt={product.imageAlt ?? product.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-xs text-night-400">
            Sem imagem
          </div>
        )}
        {discount > 0 && (
          <span className="absolute left-2 top-2 rounded-full border-2 border-night-900 bg-pink-500 px-2.5 py-0.5 text-xs font-extrabold text-white">
            -{discount}%
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-1 p-3">
        {product.brandName && (
          <span className="text-xs font-semibold uppercase tracking-wide text-night-500">{product.brandName}</span>
        )}
        <span className="line-clamp-2 text-sm font-bold text-night-900">
          {product.name}
        </span>
        <div className="mt-auto flex items-baseline gap-2 pt-2">
          <span className="font-extrabold text-night-900">{formatBRL(product.priceFromCents)}</span>
          {discount > 0 && product.compareAtCents && (
            <span className="text-xs text-night-400 line-through">
              {formatBRL(product.compareAtCents)}
            </span>
          )}
        </div>
      </div>
    </Link>
  )
}
