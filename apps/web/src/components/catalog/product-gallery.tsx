'use client'

import { useState } from 'react'

export interface GalleryImage {
  url: string
  alt: string
}

/** Galeria do produto: foto principal + miniaturas clicáveis (troca a principal). */
export function ProductGallery({ images, name }: { images: GalleryImage[]; name: string }) {
  const [active, setActive] = useState(0)
  const main = images[active] ?? images[0]

  return (
    <div>
      <div className="aspect-square overflow-hidden rounded-2xl border-2 border-night-900 bg-white">
        {main ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={main.url} alt={main.alt || name} className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full items-center justify-center text-night-500">Sem imagem</div>
        )}
      </div>

      {images.length > 1 && (
        <div className="mt-3 flex flex-wrap gap-3">
          {images.map((im, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Ver foto ${i + 1} de ${name}`}
              aria-current={i === active}
              className={`h-20 w-20 shrink-0 overflow-hidden rounded-lg border-2 bg-white transition-all ${
                i === active
                  ? 'border-night-900 ring-2 ring-accent/30'
                  : 'border-night-100 hover:-translate-y-0.5 hover:border-night-400'
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={im.url} alt={im.alt || name} className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
