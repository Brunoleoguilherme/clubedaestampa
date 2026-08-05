import Link from 'next/link'
import { redirect } from 'next/navigation'
import { KLogo } from '@/components/brand/k-logo'
import { requireUser, isStaff, getUserPermissions } from '@/lib/auth/session'
import { signOutAction } from '@/lib/auth/actions'

export const dynamic = 'force-dynamic'

const NAV: Array<{ href: string; label: string; perm?: string }> = [
  { href: '/admin', label: 'Dashboard' },
  { href: '/admin/produtos', label: 'Produtos', perm: 'catalog.read' },
  { href: '/admin/categorias', label: 'Categorias', perm: 'catalog.read' },
  { href: '/admin/marcas', label: 'Marcas', perm: 'catalog.read' },
  { href: '/admin/estoque', label: 'Estoque', perm: 'inventory.read' },
  { href: '/admin/pedidos', label: 'Pedidos', perm: 'orders.read' },
  { href: '/admin/parceiros', label: 'Parceiros', perm: 'catalog.read' },
  { href: '/admin/cupons', label: 'Cupons', perm: 'catalog.read' },
  { href: '/admin/relatorios', label: 'Relatórios' },
  { href: '/admin/campanhas', label: 'Campanhas' },
  { href: '/admin/instagram', label: 'Instagram' },
  { href: '/admin/usuarios', label: 'Usuários', perm: 'users.manage' },
]

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  await requireUser()
  const staff = await isStaff()
  if (!staff) redirect('/conta')
  const perms = await getUserPermissions()

  return (
    <div className="relative flex min-h-dvh bg-night-50">
      <aside className="relative z-10 flex w-60 shrink-0 flex-col border-r-2 border-night-900 bg-white">
        <div aria-hidden className="brand-stripes h-1.5 w-full" />
        <div className="flex-1 p-4">
          <Link href="/admin" className="flex items-center gap-2">
            <KLogo size={30} />
            <span className="font-display text-base font-extrabold uppercase tracking-tight text-night-900">
              Clube da Estampa
            </span>
          </Link>
          <p className="mb-4 mt-1 text-xs font-semibold uppercase tracking-wide text-night-500">
            Administração
          </p>
          <nav className="flex flex-col gap-1 text-sm font-semibold">
            {NAV.filter((n) => !n.perm || perms.has(n.perm)).map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="rounded-md px-3 py-2 text-night-700 transition-colors hover:bg-brand-50 hover:text-accent"
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <form action={signOutAction} className="mt-6">
            <button className="text-sm font-semibold text-night-500 transition-colors hover:text-danger">
              Sair
            </button>
          </form>
        </div>
      </aside>

      <main className="relative z-10 flex-1 p-8">{children}</main>
    </div>
  )
}
