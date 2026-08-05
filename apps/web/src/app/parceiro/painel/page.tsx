import type { Metadata } from 'next'
import { requirePartnerOwner } from '@/lib/partners/portal'
import { partnerSignOutAction } from '@/lib/partners/portal-actions'
import { createAdminClient } from '@/lib/supabase/admin'
import { CustomizeForm } from './customize-form'
import { LogoForm } from './logo-form'
import { BannerForm } from './banner-form'

export const metadata: Metadata = { title: 'Minha loja' }
export const dynamic = 'force-dynamic'

interface PartnerRow {
  id: string
  name: string
  slug: string
  active: boolean
  tagline: string | null
  logo_url: string | null
  banner_url: string | null
  primary_color: string | null
  accent_color: string | null
  contact_email: string | null
  instagram_url: string | null
  facebook_url: string | null
  youtube_url: string | null
}

export default async function PartnerPanelPage() {
  const ctx = await requirePartnerOwner()
  const admin = createAdminClient()
  const { data } = await admin
    .from('partners')
    .select(
      'id, name, slug, active, tagline, logo_url, banner_url, primary_color, accent_color, contact_email, instagram_url, facebook_url, youtube_url',
    )
    .eq('id', ctx.partnerId)
    .maybeSingle()
  const partner = data as unknown as PartnerRow | null
  if (!partner) {
    return <div className="mx-auto max-w-2xl p-8 text-night-900">Loja não encontrada. Fale com o Clube da Estampa.</div>
  }

  const primary = partner.primary_color ?? '#2b8df6'
  const accent = partner.accent_color ?? '#fcca07'
  const storeUrl = `https://${partner.slug}.clubedaestampa.com.br`

  return (
    <div className="mx-auto max-w-4xl space-y-8 px-6 py-10 text-night-900">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="font-display text-2xl font-extrabold uppercase tracking-tight">Minha loja</h1>
          <p className="text-sm text-night-500">
            {partner.active ? (
              <a href={storeUrl} target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">
                {partner.slug}.clubedaestampa.com.br ↗
              </a>
            ) : (
              <span>
                {partner.slug}.clubedaestampa.com.br — <strong>inativa</strong> (aguardando ativação do Clube da Estampa)
              </span>
            )}
          </p>
        </div>
        <form action={partnerSignOutAction}>
          <button className="rounded-lg border-2 border-night-200 px-4 py-2 text-sm font-semibold text-night-700 transition-colors hover:border-night-900">
            Sair
          </button>
        </form>
      </div>

      {/* Prévia da loja do parceiro (usa as cores do parceiro) */}
      <section className="overflow-hidden rounded-2xl border-2 border-night-900">
        <div
          className="flex items-center justify-center gap-3 px-4 py-3 text-sm font-bold"
          style={{ background: primary, color: accent }}
        >
          {partner.logo_url ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={partner.logo_url} alt={partner.name} className="h-7 w-auto max-w-[130px] object-contain" />
          ) : null}
          <span>Loja oficial · {partner.name}</span>
        </div>
        <div className="px-6 py-10" style={{ background: primary }}>
          <h2
            className="font-display text-2xl font-extrabold uppercase tracking-tight text-white"
            style={{ textShadow: '0 1px 4px rgba(17,17,20,0.4)' }}
          >
            {partner.tagline || 'Vista as cores do time.'}
          </h2>
          <span
            className="mt-3 inline-block rounded-lg border-2 border-night-900 px-5 py-2 text-sm font-bold"
            style={{ background: accent, color: '#111114' }}
          >
            Ver coleção
          </span>
        </div>
      </section>

      <div className="grid gap-8 lg:grid-cols-2">
        <section className="rounded-2xl border-2 border-night-100 p-6">
          <h2 className="mb-4 font-semibold">Personalização</h2>
          <CustomizeForm
            initial={{
              name: partner.name,
              tagline: partner.tagline ?? '',
              primaryColor: partner.primary_color ?? '',
              accentColor: partner.accent_color ?? '',
              contactEmail: partner.contact_email ?? '',
              instagram: partner.instagram_url ?? '',
              facebook: partner.facebook_url ?? '',
              youtube: partner.youtube_url ?? '',
            }}
          />
        </section>

        <div className="space-y-8">
          <section className="rounded-2xl border-2 border-night-100 p-6">
            <h2 className="mb-4 font-semibold">Logo</h2>
            <LogoForm currentLogo={partner.logo_url} />
          </section>

          <section className="rounded-2xl border-2 border-night-100 p-6">
            <h2 className="mb-4 font-semibold">Banner do topo</h2>
            <BannerForm currentBanner={partner.banner_url} />
          </section>
        </div>
      </div>
    </div>
  )
}
