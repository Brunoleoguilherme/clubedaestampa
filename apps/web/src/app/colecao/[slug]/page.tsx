import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getCategoryBySlug, listCategoryProducts } from '@/lib/catalog/queries'
import { AnnouncementBar } from '@/components/home/announcement-bar'
import { SiteHeader } from '@/components/home/site-header'
import { SiteFooter } from '@/components/home/site-footer'
import { HomeProductCard } from '@/components/home/product-card'

export const dynamic = 'force-dynamic'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const cat = await getCategoryBySlug(params.slug)
  return { title: cat?.name ?? 'Coleção' }
}

export default async function ColecaoPage({ params }: { params: { slug: string } }) {
  const cat = await getCategoryBySlug(params.slug)
  if (!cat) notFound()
  const products = await listCategoryProducts(cat.id, 60)

  return (
    <div className="min-h-dvh overflow-x-hidden bg-white text-night-900">
      <AnnouncementBar />
      <SiteHeader />

      <main className="mx-auto max-w-[1440px] px-6 pb-20 pt-28 sm:px-8">
        <div className="border-b-2 border-night-900 pb-6">
          <span className="text-xs font-extrabold uppercase tracking-[0.3em] text-brand-700">Coleção</span>
          <h1 className="mt-1 font-display text-3xl font-extrabold uppercase tracking-tight sm:text-4xl">
            {cat.name}
          </h1>
          {cat.description && <p className="mt-2 max-w-2xl text-night-500">{cat.description}</p>}
          <p className="mt-1 text-sm text-night-500">{products.length} produto(s)</p>
        </div>

        {products.length === 0 ? (
          <p className="py-20 text-center text-night-400">Nenhum produto nesta coleção ainda.</p>
        ) : (
          <div className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {products.map((p) => (
              <HomeProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </main>

      <SiteFooter />
    </div>
  )
}
