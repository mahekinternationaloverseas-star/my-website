import { Reveal, SectionHeading } from '@/components/reveal'

const steps = [
  { title: 'Registration', text: 'Share your details and CV with us online, by phone or at our office.' },
  { title: 'Screening', text: 'We review your skills, experience and documents to find suitable roles.' },
  { title: 'Interview', text: 'Meet the employer in person or online. We help you prepare.' },
  { title: 'Selection', text: 'Receive a verified offer letter with salary and terms in writing.' },
  { title: 'Documentation', text: 'Medicals, attestation and paperwork completed with our guidance.' },
  { title: 'Visa', text: 'We process your work visa and keep you updated at every stage.' },
  { title: 'Deployment', text: 'Pre-departure briefing, ticketing and a smooth start abroad.' },
]

export function Process() {
  return (
    <section id="process" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Our process"
          title="Seven clear steps to your new job abroad"
          description="No confusion, no surprises. Here is exactly what happens from the day you register to the day you fly."
        />
        <div className="relative mt-14">
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-gold to-transparent lg:block"
          />
        <ol className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-7 lg:gap-4">
          {steps.map((step, i) => (
            <Reveal
              as="li"
              key={step.title}
              delay={i * 70}
              className="relative flex gap-4 lg:flex-col lg:items-center lg:text-center"
            >
              <span className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full border-2 border-gold bg-primary font-serif text-lg font-semibold text-gold">
                {i + 1}
              </span>
              <div>
                <h3 className="font-sans text-base font-semibold text-primary lg:mt-4">
                  {step.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
        </div>
      </div>
    </section>
  )
}
