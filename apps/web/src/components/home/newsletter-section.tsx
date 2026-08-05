'use client'

import { useState } from 'react'

export function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'ok' | 'error'>('idle')

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    setStatus(valid ? 'ok' : 'error')
  }

  return (
    <section className="bg-pink-500">
      <div className="mx-auto max-w-[1440px] px-6 py-16 text-center sm:px-8">
        <h2 className="sticker-text font-display text-4xl font-extrabold uppercase tracking-tight sm:text-5xl">
          Entre para o clube
        </h2>
        <p className="mx-auto mt-3 max-w-md font-medium text-white">
          Receba novas coleções, drops e ofertas exclusivas.
        </p>
        <form onSubmit={onSubmit} className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row" noValidate>
          <label htmlFor="newsletter-email" className="sr-only">
            Seu e-mail
          </label>
          <input
            id="newsletter-email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              setStatus('idle')
            }}
            placeholder="seu@email.com"
            className="h-12 flex-1 rounded-xl border-2 border-night-900 bg-white px-4 text-sm text-night-900 outline-none placeholder:text-night-400 focus-visible:ring-2 focus-visible:ring-night-900/20"
          />
          <button
            type="submit"
            className="h-12 rounded-xl border-2 border-night-900 bg-night-900 px-6 text-sm font-extrabold uppercase tracking-wide text-white transition-transform hover:-translate-y-0.5"
          >
            Inscrever
          </button>
        </form>
        {status === 'ok' && (
          <p role="status" className="mt-3 text-sm font-bold text-white">
            Pronto! Você está no clube. ⚡
          </p>
        )}
        {status === 'error' && (
          <p role="alert" className="mt-3 text-sm font-bold text-night-900">
            Informe um e-mail válido.
          </p>
        )}
      </div>
    </section>
  )
}
