import Image from 'next/image'
import { ArrowRight, BadgeCheck, Building2 } from 'lucide-react'

const stats = [
  { value: '5,000+', label: 'Candidates placed' },
  { value: '150+', label: 'Employer partners' },
  { value: '10+', label: 'Countries served' },
]

export function Hero() {
  return (
    <section id="top" className="bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-4xl flex-col items-center px-4 py-14 text-center md:px-6 md:py-20">
        <div className="relative aspect-square w-[min(70vw,20rem)] overflow-hidden rounded-xl border border-gold/40 shadow-2xl animate-in fade-in zoom-in-95 duration-700">
          <Image
            src="/images/mahek-logo-full.jpg"
            alt="Mahek Overseas – Global Recruitment Solutions logo"
            fill
            priority
            sizes="(min-width: 768px) 320px, 70vw"
            className="object-cover"
          />
        </div>

        <p className="mt-10 text-xs font-medium uppercase tracking-[0.3em] text-gold md:text-sm">
          Ethical overseas recruitment from India
        </p>

        <h1 className="mt-5 text-balance font-serif text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">
          Your Gateway to <span className="italic text-gold">Global Careers</span>
        </h1>

        <div aria-hidden="true" className="mt-7 h-px w-40 bg-gradient-to-r from-transparent via-gold to-transparent" />

        <p className="mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-primary-foreground/80">
          Mahek Overseas connects skilled and hardworking professionals with trusted, verified
          employers across the Gulf and international markets — with honest guidance at every step,
          from application to arrival.
        </p>

        <div className="mt-8 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 font-semibold text-gold-foreground shadow-lg transition-transform hover:-translate-y-0.5"
          >
            Apply Now
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/30 px-7 py-3.5 font-semibold transition-colors hover:bg-primary-foreground/10"
          >
            <Building2 className="size-4" aria-hidden="true" />
            Hire Talent
          </a>
        </div>

        <p className="mt-6 inline-flex items-center gap-2 text-sm text-primary-foreground/70">
          <BadgeCheck className="size-4 text-gold" aria-hidden="true" />
          Verified employers only — every job offer checked
        </p>

        <dl className="mt-12 grid w-full max-w-xl grid-cols-3 gap-6 border-t border-primary-foreground/15 pt-8">
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-serif text-3xl font-semibold text-gold">{s.value}</dd>
              <dd className="mt-1 text-xs text-primary-foreground/70 md:text-sm">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
