import { Quote, Star } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/reveal'

const testimonials = [
  {
    quote:
      'Mahek Overseas explained every step and every rupee clearly. Within three months I was working as an electrician in Dubai. I recommend them to everyone in my village.',
    name: 'Imran Shaikh',
    role: 'Electrician, Dubai',
  },
  {
    quote:
      'As a nurse, I was worried about fake agents. They verified the hospital, helped with my documents and even called me after I reached Riyadh to check I was settled.',
    name: 'Priya Nair',
    role: 'Staff Nurse, Riyadh',
  },
  {
    quote:
      'We hired 40 construction workers through Mahek Overseas. The candidates were well-screened and deployment was on schedule. A dependable partner for our projects.',
    name: 'Operations Manager',
    role: 'Construction company, Qatar',
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Success stories"
          title="Trusted by candidates and employers"
        />
        <ul className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal
              as="li"
              key={t.name}
              delay={i * 100}
              className="flex flex-col rounded-2xl border border-border bg-card p-7 shadow-sm"
            >
              <Quote className="size-8 text-gold" aria-hidden="true" />
              <div className="mt-3 flex gap-0.5" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className="size-4 fill-gold text-gold" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 leading-relaxed text-foreground/85">
                {`"${t.quote}"`}
              </blockquote>
              <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <span className="flex size-11 items-center justify-center rounded-full bg-primary font-serif text-lg text-gold">
                  {t.name.charAt(0)}
                </span>
                <div>
                  <p className="font-semibold text-primary">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
