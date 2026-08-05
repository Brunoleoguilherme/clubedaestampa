import Link from 'next/link'
import { requireUser } from '@/lib/auth/session'
import { signOutAction } from '@/lib/auth/actions'

export const dynamic = 'force-dynamic'

export default async function ContaLayout({ children }: { children: React.ReactNode }) {
  const user = await requireUser()
  return (
    <div className="min-h-dvh bg-white text-night-900">
      <div className="mx-auto max-w-5xl px-6 py-10">
        <header className="mb-8 flex items-center justify-between border-b border-night-100 pb-5">
          <div>
            <Link href="/" className="font-display text-xl font-extrabold uppercase tracking-tight text-night-900">
              CLUBE DA <span className="text-brand-500">ESTAMPA</span>
            </Link>
            <p className="mt-1 text-sm text-night-600">Minha conta · {user.email}</p>
          </div>
          <form action={signOutAction}>
            <button className="text-sm font-medium text-night-700 transition-colors hover:text-danger">
              Sair
            </button>
          </form>
        </header>
        <div className="grid gap-8 md:grid-cols-[200px_1fr]">
          <nav className="flex flex-col gap-1 text-sm">
            <Link href="/conta" className="rounded-md px-3 py-2 text-night-700 transition-colors hover:bg-night-50 hover:text-accent">
              Visão geral
            </Link>
            <Link href="/conta/pedidos" className="rounded-md px-3 py-2 text-night-700 transition-colors hover:bg-night-50 hover:text-accent">
              Pedidos
            </Link>
            <Link href="/conta/enderecos" className="rounded-md px-3 py-2 text-night-700 transition-colors hover:bg-night-50 hover:text-accent">
              Endereços
            </Link>
            <Link href="/conta/favoritos" className="rounded-md px-3 py-2 text-night-700 transition-colors hover:bg-night-50 hover:text-accent">
              Favoritos
            </Link>
          </nav>
          <main>{children}</main>
        </div>
      </div>
    </div>
  )
}
