import Image from 'next/image'
import { CheckCircle2, Eye, Target } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { site } from '@/lib/site'

const points = [
  'Licensed, ethical and fully transparent recruitment',
  'Every employer and job offer verified before we share it',
  'Clear written terms — no hidden or illegal charges',
  'Personal support before departure and after arrival',
]

export function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
        <Reveal className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl">
            <Image
              src="/images/about-office.png"
              alt="A Mahek Overseas consultant reviewing documents with a job candidate"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -right-2 -top-6 hidden rounded-2xl bg-primary px-6 py-5 text-primary-foreground shadow-xl sm:block md:-right-6">
            <p className="font-serif text-4xl font-semibold text-gold">10+</p>
            <p className="text-sm text-primary-foreground/80">Years of experience</p>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">About us</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-primary md:text-4xl">
              A trusted bridge between talent and opportunity
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Mahek Overseas is a global recruitment consultancy founded by{' '}
              <strong className="text-foreground">{site.owners.join(' and ')}</strong>. For over a
              decade we have helped job seekers from India build secure careers abroad, while giving
              international employers a dependable source of skilled and unskilled manpower.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              We believe overseas work should change lives for the better. That is why we keep every
              step honest, documented and explained in plain language — so you always know where you
              stand.
            </p>
          </Reveal>

          <Reveal delay={100} className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-5">
              <Target className="size-6 text-gold" aria-hidden="true" />
              <h3 className="mt-3 text-lg font-semibold text-primary">Our mission</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                To place every candidate in a safe, fairly paid job with a genuine employer.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-5">
              <Eye className="size-6 text-gold" aria-hidden="true" />
              <h3 className="mt-3 text-lg font-semibold text-primary">Our vision</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                To be the most trusted name in ethical overseas recruitment from India.
              </p>
            </div>
          </Reveal>

          <Reveal delay={200} as="ul" className="mt-8 flex flex-col gap-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                <span className="text-foreground/85">{p}</span>
              </li>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
