import { MapPin } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/reveal'

const destinations = [
  { country: 'United Arab Emirates', code: 'AE', cities: 'Dubai · Abu Dhabi · Sharjah', region: 'Gulf', image: '/images/uae.jpg' },
  { country: 'Saudi Arabia', code: 'SA', cities: 'Riyadh · Jeddah · Dammam', region: 'Gulf', image: '/images/saudi-arabia.jpg' },
  { country: 'Qatar', code: 'QA', cities: 'Doha · Lusail', region: 'Gulf', image: '/images/qatar.jpg' },
  { country: 'Kuwait', code: 'KW', cities: 'Kuwait City · Ahmadi', region: 'Gulf', image: '/images/kuwait.jpg' },
  { country: 'Oman', code: 'OM', cities: 'Muscat · Sohar · Salalah', region: 'Gulf', image: '/images/oman.jpg' },
  { country: 'Bahrain', code: 'BH', cities: 'Manama · Muharraq', region: 'Gulf', image: '/images/bahrain.jpg' },
  { country: 'Malaysia', code: 'MY', cities: 'Kuala Lumpur · Penang', region: 'Asia', image: '/images/malaysia.jpg' },
  { country: 'Europe', code: 'EU', cities: 'Romania · Poland · Croatia', region: 'International', image: '/images/europe.jpg' },
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
              className="group relative overflow-hidden rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 transition-colors hover:border-gold/60"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={d.image}
                  alt={`${d.country} destination`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                <span className="absolute bottom-3 left-4 font-serif text-3xl font-semibold text-white">
                  {d.code}
                </span>
                <span className="absolute right-3 top-3 rounded-full border border-white/50 bg-black/30 px-3 py-1 text-xs text-white">
                  {d.region}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold">{d.country}</h3>
                <p className="mt-2 flex items-start gap-1.5 text-sm text-primary-foreground/70">
                  <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                  {d.cities}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
