import { MapPin } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/reveal'

const destinations = [
  { country: 'United Arab Emirates', code: 'AE', cities: 'Dubai · Abu Dhabi · Sharjah', region: 'Gulf' },
  { country: 'Saudi Arabia', code: 'SA', cities: 'Riyadh · Jeddah · Dammam', region: 'Gulf' },
  { country: 'Qatar', code: 'QA', cities: 'Doha · Lusail', region: 'Gulf' },
  { country: 'Kuwait', code: 'KW', cities: 'Kuwait City · Ahmadi', region: 'Gulf' },
  { country: 'Oman', code: 'OM', cities: 'Muscat · Sohar · Salalah', region: 'Gulf' },
  { country: 'Bahrain', code: 'BH', cities: 'Manama · Muharraq', region: 'Gulf' },
  { country: 'Malaysia', code: 'MY', cities: 'Kuala Lumpur · Penang', region: 'Asia' },
  { country: 'Europe', code: 'EU', cities: 'Romania · Poland · Croatia', region: 'International' },
]

export function Destinations() {
  return (
    <section id="destinations" className="bg-primary py-20 text-primary-foreground md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          tone="dark"
          eyebrow="Destinations"
          title="Where our candidates build their careers"
          description="Strong partnerships across the Gulf region and growing international markets in Asia and Europe."
        />
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map((d, i) => (
            <Reveal
              as="li"
              key={d.country}
              delay={(i % 4) * 80}
              className="group relative overflow-hidden rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-6 transition-colors hover:border-gold/60 hover:bg-primary-foreground/10"
            >
              <div className="flex items-center justify-between">
                <span className="font-serif text-4xl font-semibold text-gold/90">{d.code}</span>
                <span className="rounded-full border border-gold/40 px-3 py-1 text-xs text-gold">
                  {d.region}
                </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold">{d.country}</h3>
              <p className="mt-2 flex items-center gap-1.5 text-sm text-primary-foreground/70">
                <MapPin className="size-4 shrink-0" aria-hidden="true" />
                {d.cities}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
