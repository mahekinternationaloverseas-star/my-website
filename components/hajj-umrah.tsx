import {
  ArrowUpRight,
  MoonStar,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'

const journeys = [
  {
    title: 'Umrah',
    subtitle: 'A journey of faith and peace',
    image: '/images/makkah.jpg',
    description:
      'Plan your spiritual journey with personalised enquiry assistance, travel guidance, and accommodation options.',
    features: [
      'Travel planning guidance',
      'Accommodation options',
      'Visa and transport enquiries',
    ],
  },
  {
    title: 'Hajj',
    subtitle: 'A sacred journey of a lifetime',
    image: '/images/madinah.jpg',
    description:
      'Explore Hajj travel information and ask our team about arrangements, requirements, and available options.',
    features: [
      'Booking guidance',
      'Travel information',
      'Package details on enquiry',
    ],
  },
]

const holySites = [
  {
    name: 'Makkah',
    detail: 'The Holy Kaaba',
    image: '/images/makkah.jpg',
  },
  {
    name: 'Madinah',
    detail: "Prophet's Mosque",
    image: '/images/madinah.jpg',
  },
  {
    name: 'Mina',
    detail: 'A sacred Hajj site',
    image: '/images/mina.jpg',
  },
  {
    name: 'Mount Arafat',
    detail: 'The Day of Arafah',
    image: '/images/mount-arafat.jpg',
  },
  {
    name: 'Mount Uhud',
    detail: 'A historic landmark',
    image: '/images/mount-uhud.jpg',
  },
  {
    name: 'Quba Mosque',
    detail: 'A historic mosque in Madinah',
    image: '/images/quba-mosque.jpg',
  },
]

export function HajjUmrah() {
  return (
    <section
      id="hajj-umrah"
      className="relative overflow-hidden bg-[#071F19] py-20 text-white md:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-20 h-80 w-80 animate-pulse rounded-full bg-emerald-500/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 animate-pulse rounded-full bg-amber-400/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <Reveal className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.22em] text-amber-200">
            <Sparkles className="size-4" />
            Hajj &amp; Umrah journeys
          </div>

          <h2 className="font-serif text-4xl font-semibold leading-tight md:text-6xl">
            A sacred journey,{' '}
            <span className="italic text-amber-200">
              beautifully planned.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/70 md:text-lg">
            Discover pilgrimage travel options with thoughtful guidance
            as you plan your journey to Makkah and Madinah.
          </p>
        </Reveal>

        {/* Hajj and Umrah package cards */}
        <div className="mt-14 grid gap-7 md:grid-cols-2">
          {journeys.map((journey, index) => (
            <Reveal key={journey.title} delay={index * 150}>
              <article className="group overflow-hidden rounded-3xl border border-amber-100/15 bg-white/[0.04] shadow-2xl transition duration-500 hover:-translate-y-2 hover:border-amber-200/50 hover:shadow-amber-950/40">
                <div className="relative h-64 overflow-hidden md:h-80">
                  <img
                    src={journey.image}
                    alt={`${journey.title} pilgrimage`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#071F19] via-black/10 to-transparent" />

                  <span className="absolute left-5 top-5 rounded-full border border-white/30 bg-black/25 px-4 py-2 text-sm backdrop-blur-md">
                    {journey.title === 'Umrah' ? (
                      <MoonStar className="mr-2 inline size-4 text-amber-200" />
                    ) : (
                      <Sparkles className="mr-2 inline size-4 text-amber-200" />
                    )}
                    {journey.title} journey
                  </span>

                  <div className="absolute bottom-5 left-6 right-6">
                    <p className="text-sm text-amber-200">
                      {journey.subtitle}
                    </p>
                    <h3 className="mt-1 font-serif text-3xl font-semibold md:text-4xl">
                      {journey.title} Packages
                    </h3>
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <p className="leading-7 text-white/70">
                    {journey.description}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {journey.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-sm text-white/85"
                      >
                        <ShieldCheck className="size-4 shrink-0 text-amber-200" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-200 to-yellow-500 px-6 py-3.5 font-semibold text-[#10251D] transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-amber-400/20"
                  >
                    Enquire about {journey.title}
                    <ArrowUpRight className="size-4" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Holy sites gallery */}
        <Reveal className="mt-24">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <p className="text-xs uppercase tracking-[0.25em] text-amber-200">
              Sacred places
            </p>
            <h3 className="mt-4 font-serif text-3xl font-semibold md:text-5xl">
              Discover the Holy Sites
            </h3>
            <p className="mt-4 leading-7 text-white/65">
              Explore the revered places and historic landmarks associated
              with the journeys of Hajj and Umrah.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {holySites.map((site, index) => (
              <article
                key={site.name}
                className="group relative isolate aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-white/5 md:aspect-[5/4]"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img
                  src={site.image}
                  alt={site.name}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#04130F] via-black/10 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-4 md:p-6">
                  <p className="text-xs text-amber-200 md:text-sm">
                    {site.detail}
                  </p>
                  <h4 className="mt-1 font-serif text-xl font-semibold md:text-2xl">
                    {site.name}
                  </h4>
                </div>
              </article>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-amber-200/50 px-7 py-3.5 font-medium text-amber-100 transition hover:bg-amber-200 hover:text-[#071F19]"
          >
            Plan Your Journey
            <ArrowUpRight className="size-4" />
          </a>
        </div>

        <p className="mt-10 text-center text-xs leading-6 text-white/50">
          Package availability, prices, and services require confirmation.
          Hajj arrangements must follow applicable official requirements
          and authorised booking channels.
        </p>
      </div>
    </section>
  )
}
