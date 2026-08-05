import { ShieldCheck, Award, Lock, RefreshCw } from 'lucide-react'

const BENEFITS = [
  { icon: ShieldCheck, title: 'Produtos originais', text: 'Das melhores marcas', color: 'text-pink-500' },
  { icon: Award, title: 'Atendimento de verdade', text: 'Gente pronta pra ajudar', color: 'text-blue-500' },
  { icon: Lock, title: 'Compra segura', text: 'Seus dados protegidos', color: 'text-yellow-500' },
  { icon: RefreshCw, title: 'Troca fácil', text: 'Até 7 dias após o recebimento', color: 'text-pink-500' },
]

export function BenefitsStrip() {
  return (
    <section aria-label="Benefícios" className="border-y border-night-100 bg-night-50">
      <div className="mx-auto grid max-w-[1440px] gap-px px-4 py-6 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
        {BENEFITS.map((b) => (
          <div key={b.title} className="flex items-center gap-3 px-2 py-2">
            <b.icon className={`h-7 w-7 shrink-0 ${b.color}`} aria-hidden />
            <div>
              <p className="text-sm font-bold text-night-900">{b.title}</p>
              <p className="text-xs text-night-500">{b.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
