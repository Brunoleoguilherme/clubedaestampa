'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Search, Heart, ShoppingCart, User, Menu, X } from 'lucide-react'
import { HeaderLogo } from './header-logo'
import { SPORTS, sportHref } from '@/lib/home/nav'
import { useCart } from '@/components/cart/cart-context'
import { useBrand } from '@/components/partners/brand-context'

const NAV_EXTRA = [
  { name: 'Marcas', href: '/produtos' },
  { name: 'Outlet', href: '/produtos' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { count, hydrated } = useCart()
  const cartCount = hydrated ? count : 0
  const brand = useBrand()

  const navItems = brand.isPartner
    ? [
        { name: 'Produtos', href: '/produtos' },
        { name: 'Favoritos', href: '/conta/favoritos' },
        { name: 'Carrinho', href: '/carrinho' },
        { name: 'Login', href: '/entrar' },
      ]
    : [
        ...SPORTS.map((s) => ({ name: s.name, href: sportHref(s.name) })),
        ...NAV_EXTRA,
      ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const icons = (
    <div className="flex items-center gap-1 text-night-700">
      <Link href="/produtos" aria-label="Buscar" className="rounded-full p-2 transition-colors hover:text-accent">
        <Search className="h-5 w-5" aria-hidden />
      </Link>
      <Link href="/conta/favoritos" aria-label="Favoritos" className="rounded-full p-2 transition-colors hover:text-accent">
        <Heart className="h-5 w-5" aria-hidden />
      </Link>
      <Link href="/carrinho" aria-label="Carrinho" className="relative rounded-full p-2 transition-colors hover:text-accent">
        <ShoppingCart className="h-5 w-5" aria-hidden />
        {cartCount > 0 && (
          <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-accent px-1 text-[10px] font-bold text-white">
            {cartCount}
          </span>
        )}
      </Link>
      <Link href="/conta" aria-label="Minha conta" className="rounded-full p-2 transition-colors hover:text-accent">
        <User className="h-5 w-5" aria-hidden />
      </Link>
    </div>
  )

  return (
    <header
      className={`fixed inset-x-0 top-9 z-40 border-b transition-all duration-300 ${
        scrolled
          ? 'border-night-100 bg-white/95 shadow-[0_6px_20px_-14px_rgba(17,17,20,0.5)] backdrop-blur-md'
          : 'border-transparent bg-white'
      }`}
    >
      <div
        className={`mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-4 sm:px-8 ${
          brand.isPartner ? 'h-20 sm:h-24' : 'h-16'
        }`}
      >
        <HeaderLogo />

        <nav className="hidden items-center gap-5 text-sm font-semibold uppercase tracking-wide text-night-600 lg:flex">
          {navItems.map((n) => (
            <Link key={n.name} href={n.href} className="transition-colors hover:text-accent">
              {n.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          {icons}
          <button
            type="button"
            aria-label="Abrir menu"
            onClick={() => setOpen(true)}
            className="rounded-full p-2 text-night-700 transition-colors hover:text-accent lg:hidden"
          >
            <Menu className="h-6 w-6" aria-hidden />
          </button>
        </div>
      </div>

      {/* faixa de cor da marca */}
      <div aria-hidden className="brand-stripes h-1 w-full" />

      {/* drawer mobile */}
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-night-900/50" onClick={() => setOpen(false)} aria-hidden />
          <div className="absolute right-0 top-0 flex h-full w-72 max-w-[85%] flex-col bg-white p-6 shadow-2xl">
            <div className="mb-6 flex items-center justify-between">
              <span className="font-display text-lg font-extrabold uppercase text-night-900">Menu</span>
              <button type="button" aria-label="Fechar menu" onClick={() => setOpen(false)} className="text-night-700">
                <X className="h-6 w-6" aria-hidden />
              </button>
            </div>
            <nav className="flex flex-col gap-1 text-sm font-semibold uppercase tracking-wide text-night-700">
              {navItems.map((n) => (
                <Link
                  key={n.name}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2.5 transition-colors hover:bg-night-50 hover:text-accent"
                >
                  {n.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
