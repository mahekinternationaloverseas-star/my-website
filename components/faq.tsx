import { ChevronDown } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/reveal'

const faqs = [
  {
    q: 'Do you charge any fees to job seekers?',
    a: 'We only charge fees that are permitted by Indian government regulations, and every charge is explained and receipted in writing. We never charge illegal fees. If anyone asks you for money in our name without a written receipt, please contact us immediately.',
  },
  {
    q: 'How do I know a job offer is genuine?',
    a: 'Every employer we work with is verified, and you will receive an official offer letter with salary, working hours and benefits before any documentation begins. You can always call us on our official numbers to confirm any offer.',
  },
  {
    q: 'What documents do I need to apply?',
    a: 'Usually a valid passport (with at least 6 months validity), an updated CV, educational and experience certificates, and passport-size photographs. Specific roles may need additional trade or professional certificates.',
  },
  {
    q: 'How long does the overseas hiring process take?',
    a: 'Most placements take between 4 and 12 weeks depending on the country, role and visa type. We keep you updated at every stage so you know what to expect.',
  },
  {
    q: 'Can I apply if I do not have overseas experience?',
    a: 'Yes. Many of our employers hire first-time overseas workers, especially for skilled trades, hospitality and general roles. We will guide you on the best opportunities for your profile.',
  },
  {
    q: 'I am an employer. How can I hire through you?',
    a: 'Share your requirements through our enquiry form or call us. We will discuss roles, quantities and timelines, then handle sourcing, screening, interviews and deployment for you.',
  },
]

export function Faq() {
  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently asked questions"
          description="Straight answers to the questions we hear most often."
        />
        <Reveal className="mt-12 flex flex-col gap-3">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group rounded-2xl border border-border bg-card px-6 py-5 open:shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-primary [&::-webkit-details-marker]:hidden">
                {f.q}
                <ChevronDown
                  className="size-5 shrink-0 text-gold transition-transform group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <p className="mt-3 leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
