import { Briefcase, Building2, FileText, Plane, UserCheck, Users } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/reveal'

const services = [
  {
    icon: Users,
    title: 'Overseas Manpower Recruitment',
    text: 'End-to-end sourcing of reliable workers for international employers, matched to role, skill and culture.',
  },
  {
    icon: UserCheck,
    title: 'Skilled & Unskilled Workers',
    text: 'From engineers, nurses and technicians to helpers and general labour — screened and job-ready.',
  },
  {
    icon: FileText,
    title: 'Documentation & Visa Assistance',
    text: 'Guidance on passports, attestation, medicals and work visas so your paperwork is correct the first time.',
  },
  {
    icon: Briefcase,
    title: 'Interview Coordination',
    text: 'We arrange in-person and online interviews with employers and help you prepare with confidence.',
  },
  {
    icon: Plane,
    title: 'Travel & Deployment Support',
    text: 'Ticketing, pre-departure orientation and arrival coordination for a smooth start abroad.',
  },
  {
    icon: Building2,
    title: 'Employer Hiring Solutions',
    text: 'Bulk and specialised hiring with trade testing, shortlisting and compliance handled for you.',
  },
]

export function Services() {
  return (
    <section id="services" className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Our services"
          title="Complete recruitment support, start to finish"
          description="Whether you are looking for work abroad or hiring a dependable team, we take care of every detail."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, text }, i) => (
            <Reveal
              key={title}
              delay={(i % 3) * 100}
              className="group rounded-2xl border border-border bg-card p-7 transition-shadow hover:shadow-lg"
            >
              <span className="flex size-12 items-center justify-center rounded-xl bg-primary text-gold transition-transform group-hover:scale-105">
                <Icon className="size-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-xl font-semibold text-primary">{title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
