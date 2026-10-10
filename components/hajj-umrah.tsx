import { ArrowUpRight, MoonStar, Plane, ShieldCheck, Sparkles } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/reveal'

const journeys = [
  {
    title: 'Umrah',
    subtitle: 'A journey of faith and peace',
    image: '/images/umrah.jpg',
    description: 'Explore budget-conscious Umrah travel options with personalised enquiry assistance.',
    features: ['Travel planning guidance', 'Accommodation options', 'Visa and transport enquiries'],
  },
  {
    title: 'Hajj',
    subtitle: 'A sacred journey of a lifetime',
    image: '/images/hajj.jpg',
    description: 'Ask about Hajj travel arrangements, eligibility, authorised booking channels and available options.',
    features: ['Booking guidance', 'Travel information', 'Package details on enquiry'],
  },
]

export function HajjUmrah() {
  return (
    <section id="hajj-umrah" className="relative overflow-hidden bg-[#071F19] py-20 text-white md:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl animate-pulse" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-amber-400/10 blur-3xl animate-pulse" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <Reveal className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.22em] text-amber-200">
            <Sparkles className="size-4" />
            Hajj & Umrah journeys
          </div>
          <h2 className="font-serif text-4xl font-semibold leading-tight md:text-6xl">
            A sacred journey, <span className="italic text-amber-200">beautifully planned.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/70 md:text-lg">
            Explore pilgrimage travel options with thoughtful guidance, clear information and support as you plan your journey to Makkah and Madinah.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-7 md:grid-cols-2">
          {journeys.map((journey, index) => (
            <Reveal key={journey.title} delay={index * 150}>
              <article className="group overflow-hidden rounded-3xl border border-amber-100/15 bg-white/[0.04] shadow-2xl transition duration-500 hover:-translate-y-2 hover:border-amber-200/50 hover:shadow-amber-950/40">
                <div className="relative h-64 overflow-hidden md:h-80">
                  <img
                    src={journey.image}
                    alt={`${journey.title} pilgrimage`}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071F19] via-black/10 to-transparent" />
                  <span className="absolute left-5 top-5 rounded-full border border-white/30 bg-black/25 px-4 py-2 text-sm backdrop-blur-md">
                    {journey.title === 'Umrah' ? <MoonStar className="mr-2 inline size-4 text-amber-200" /> : <Sparkles className="mr-2 inline size-4 text-amber-200" />}
                    {journey.title} journey
                  </span>
                  <div className="absolute bottom-5 left-6 right-6">
                    <p className="text-sm text-amber-200">{journey.subtitle}</p>
                    <h3 className="mt-1 font-serif text-3xl font-semibold md:text-4xl">{journey.title} Packages</h3>
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <p className="leading-7 text-white/70">{journey.description}</p>
                  <ul className="mt-6 space-y-3">
                    {journey.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm text-white/85">
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

        <p className="mt-8 text-center text-xs leading-6 text-white/50">
          Package availability, pricing and included services are subject to confirmation. Hajj arrangements must follow applicable official requirements and authorised booking channels.
        </p>
      </div>
    </section>
  )
}
