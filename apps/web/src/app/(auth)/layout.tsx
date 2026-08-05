import Link from 'next/link'
import { KLogo } from '@/components/brand/k-logo'

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center bg-night-50 px-4 py-10">
      <Link href="/" className="mb-8 flex items-center gap-2.5">
        <KLogo size={44} className="drop-shadow-[2px_2px_0_rgba(17,17,20,0.15)]" />
        <span className="font-display text-2xl font-extrabold uppercase leading-none tracking-tight text-night-900">
          CLUBE DA <span className="text-accent">ESTAMPA</span>
        </span>
      </Link>
      <div className="w-full max-w-md rounded-2xl border-2 border-night-900 bg-white p-8 shadow-sticker">
        {children}
      </div>
      <p className="mt-6 text-xs font-medium uppercase tracking-widest text-night-400">
        Vista o que você curte
      </p>
    </div>
  )
}
