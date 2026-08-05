const BRANDS = ['Veloce', 'Clube da Estampa', 'Titan', 'Nimbus', 'Aurora', 'Vortex']

export function BrandsStrip() {
  return (
    <section aria-label="Marcas" className="border-y border-night-100 bg-white">
      <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-center gap-x-12 gap-y-6 px-6 py-10 sm:px-8">
        {BRANDS.map((b) => (
          <span
            key={b}
            className="font-display text-2xl font-extrabold uppercase tracking-wide text-night-300 transition-colors hover:text-night-900"
          >
            {b}
          </span>
        ))}
        <span className="text-sm uppercase tracking-widest text-night-400">e muito mais</span>
      </div>
    </section>
  )
}
