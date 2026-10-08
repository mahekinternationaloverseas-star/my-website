import {
  Car,
  Factory,
  Flame,
  HardHat,
  HeartPulse,
  Shield,
  ShoppingBag,
  Sparkles,
  Truck,
  UtensilsCrossed,
} from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/reveal'

const industries = [
  { icon: HardHat, name: 'Construction', roles: 'Masons, welders, electricians, foremen' },
  { icon: UtensilsCrossed, name: 'Hospitality', roles: 'Chefs, waiters, housekeeping' },
  { icon: HeartPulse, name: 'Healthcare', roles: 'Nurses, caregivers, technicians' },
  { icon: Flame, name: 'Oil & Gas', roles: 'Riggers, fitters, safety officers' },
  { icon: Truck, name: 'Logistics', roles: 'Warehouse staff, forklift operators' },
  { icon: ShoppingBag, name: 'Retail', roles: 'Sales associates, cashiers' },
  { icon: Shield, name: 'Security', roles: 'Guards, supervisors, CCTV operators' },
  { icon: Factory, name: 'Manufacturing', roles: 'Machine operators, packers' },
  { icon: Sparkles, name: 'Facility Management', roles: 'Cleaners, maintenance technicians' },
  { icon: Car, name: 'Driving & Transport', roles: 'Light & heavy vehicle drivers' },
]

export function Industries() {
  return (
    <section id="industries" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Industries we serve"
          title="Opportunities across every major sector"
          description="We recruit for a wide range of job categories, with roles for both experienced professionals and first-time overseas workers."
        />
        <ul className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {industries.map(({ icon: Icon, name, roles }, i) => (
            <Reveal
              as="li"
              key={name}
              delay={(i % 5) * 60}
              className="flex flex-col items-start rounded-2xl border border-border bg-card p-5 transition-colors hover:border-gold"
            >
              <Icon className="size-7 text-gold" aria-hidden="true" />
              <h3 className="mt-4 font-sans text-base font-semibold text-primary">{name}</h3>
              <p className="mt-1 text-sm leading-snug text-muted-foreground">{roles}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
