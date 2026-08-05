import { isSupabaseConfigured } from '@clubedaestampa/validation'
import { listSectionProducts } from '@/lib/catalog/queries'
import { getActivePartner } from '@/lib/partners/context'
import { AnnouncementBar } from '@/components/home/announcement-bar'
import { SiteHeader } from '@/components/home/site-header'
import { HeroSection } from '@/components/home/hero-section'
import { PartnerHero } from '@/components/home/partner-hero'
import { CategoryNavigation } from '@/components/home/category-navigation'
import { BenefitsStrip } from '@/components/home/benefits-strip'
import { ProductSection } from '@/components/home/product-section'
import { SportsGrid } from '@/components/home/sports-grid'
import { BrandsStrip } from '@/components/home/brands-strip'
import { NewsletterSection } from '@/components/home/newsletter-section'
import { SiteFooter } from '@/components/home/site-footer'

export const dynamic = 'force-dynamic'

export default async function HomePage() {
  const configured = isSupabaseConfigured()
  const lancamentos = configured ? await listSectionProducts('destaques', 4) : []
  const maisVendidos = configured ? await listSectionProducts('mais_vendidos', 4) : []
  const partner = await getActivePartner()

  // Loja de parceiro: página enxuta com a marca do time.
  if (partner) {
    return (
      <div className="overflow-x-hidden bg-white text-night-900">
        <AnnouncementBar />
        <SiteHeader />
        <main>
          <PartnerHero
            name={partner.name}
            tagline={partner.tagline}
            logoUrl={partner.logoUrl}
            bannerUrl={partner.bannerUrl}
          />
          <ProductSection
            id="destaques"
            label="Loja oficial"
            title="Destaques"
            description={`Os produtos da loja oficial ${partner.name}.`}
            products={lancamentos}
            accent="blue"
          />
          {maisVendidos.length > 0 && (
            <ProductSection
              label="Em alta"
              title="Mais vendidos"
              description="Os favoritos da torcida."
              products={maisVendidos}
              accent="pink"
            />
          )}
          <BenefitsStrip />
          <NewsletterSection />
        </main>
        <SiteFooter />
      </div>
    )
  }

  return (
    <div className="overflow-x-hidden bg-white text-night-900">
      <AnnouncementBar />
      <SiteHeader />

      <main>
        <HeroSection />
        <CategoryNavigation />
        <BenefitsStrip />

        <ProductSection
          id="lancamentos"
          label="Novo por aqui"
          title="Lançamentos"
          description="As novas estampas acabaram de chegar."
          products={lancamentos}
          badge="novo"
          accent="pink"
        />

        <SportsGrid />

        <ProductSection
          label="Em alta"
          title="Mais vendidos"
          description="Os favoritos de quem já é do clube."
          products={maisVendidos}
          accent="blue"
        />

        <BrandsStrip />
        <NewsletterSection />
      </main>

      <SiteFooter />
    </div>
  )
}
