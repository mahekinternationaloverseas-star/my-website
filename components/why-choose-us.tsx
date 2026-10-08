import { BadgeCheck, Eye, HeartHandshake, Zap } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/reveal'

const reasons = [
  {
    icon: Eye,
    title: 'Complete transparency',
    text: 'Every cost, contract term and timeline is shared in writing before you commit. No hidden charges, ever.',
  },
  {
    icon: BadgeCheck,
    title: 'Genuine employers',
    text: 'We work only with verified companies and confirm each vacancy directly before offering it to you.',
  },
  {
    icon: Zap,
    title: 'Fast processing',
    text: 'Experienced documentation and visa teams keep your application moving without unnecessary delays.',
  },
  {
    icon: HeartHandshake,
    title: 'End-to-end support',
    text: 'From your first call to your first payday abroad, our team is a phone call or WhatsApp message away.',
  },
]

export function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-secondary py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 md:px-6 lg:grid-cols-[1fr_1.4fr] lg:items-center">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Why choose us"
            title="Recruitment built on honesty and care"
            description="Working abroad is a big decision for you and your family. We treat it with the seriousness it deserves."
          />
          <Reveal delay={100} className="mt-8">
            <a
              href="#contact"
              className="inline-flex rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Talk to our team
            </a>
          </Reveal>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {reasons.map(({ icon: Icon, title, text }, i) => (
            <Reveal
              key={title}
              delay={i * 80}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <Icon className="size-8 text-gold" aria-hidden="true" />
              <h3 className="mt-4 text-xl font-semibold text-primary">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
