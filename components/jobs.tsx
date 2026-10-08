import Link from 'next/link'
import { Briefcase, MapPin, Wallet } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/reveal'

const jobs = [
  { title: 'Electrician', category: 'Construction', location: 'Dubai, UAE', salary: 'AED 1,800 – 2,500', type: 'Full-time · 2-year contract' },
  { title: 'Staff Nurse', category: 'Healthcare', location: 'Riyadh, Saudi Arabia', salary: 'SAR 6,000 – 8,500', type: 'Full-time · Accommodation provided' },
  { title: 'Commis Chef', category: 'Hospitality', location: 'Doha, Qatar', salary: 'QAR 2,000 – 2,800', type: 'Full-time · Food & stay provided' },
  { title: 'Heavy Truck Driver', category: 'Driving & Transport', location: 'Muscat, Oman', salary: 'OMR 250 – 350', type: 'Full-time · GCC licence preferred' },
  { title: 'Security Guard', category: 'Security', location: 'Kuwait City, Kuwait', salary: 'KWD 120 – 160', type: 'Full-time · Free visa & ticket' },
  { title: 'Warehouse Associate', category: 'Logistics', location: 'Bucharest, Romania', salary: 'EUR 700 – 900', type: 'Full-time · Overtime available' },
]

export function Jobs() {
  return (
    <section id="jobs" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Current openings"
          title="Latest verified job openings"
          description="A selection of current vacancies. New positions are added regularly — contact us for the full list."
        />
        <ul className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job, i) => (
            <Reveal
              as="li"
              key={job.title}
              delay={(i % 3) * 80}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-lg"
            >
              <span className="w-fit rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                {job.category}
              </span>
              <h3 className="mt-4 text-xl font-semibold text-primary">{job.title}</h3>
              <ul className="mt-4 flex flex-col gap-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <MapPin className="size-4 text-gold" aria-hidden="true" />
                  {job.location}
                </li>
                <li className="flex items-center gap-2">
                  <Wallet className="size-4 text-gold" aria-hidden="true" />
                  {job.salary} / month
                </li>
                <li className="flex items-center gap-2">
                  <Briefcase className="size-4 text-gold" aria-hidden="true" />
                  {job.type}
                </li>
              </ul>
              <Link
                href={`/?job=${encodeURIComponent(job.title)}&category=${encodeURIComponent(job.category)}#contact`}
                className="mt-6 inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                aria-label={`Apply for ${job.title} in ${job.location}`}
              >
                Apply
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
