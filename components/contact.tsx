import { Mail, MapPin, Phone } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/reveal'
import { EnquiryForm } from '@/components/enquiry-form'
import { WhatsAppIcon } from '@/components/whatsapp-icon'
import { site, telLink, whatsappLink } from '@/lib/site'

export function Contact({ job, category }: { job?: string; category?: string }) {
  return (
    <section id="contact" className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Contact us"
          title="Start your journey today"
          description="Job seekers and employers — send us an enquiry and our team will get back to you within one working day."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.6fr]">
          <Reveal className="flex flex-col gap-5">
            {site.contacts.map((c) => (
              <div key={c.number} className="rounded-2xl border border-border bg-card p-5">
                <p className="text-sm font-semibold uppercase tracking-wider text-gold">{c.name}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <a
                    href={telLink(c.number)}
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
                  >
                    <Phone className="size-4" aria-hidden="true" />
                    {c.display}
                  </a>
                  <a
                    href={whatsappLink(c.number, 'Hello Mahek Overseas, I would like to know more.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold text-primary hover:border-[#25D366]"
                    aria-label={`WhatsApp ${c.name}`}
                  >
                    <WhatsAppIcon className="size-4" />
                    WhatsApp
                  </a>
                </div>
              </div>
            ))}

            <a
              href={`mailto:${site.email}`}
              className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5 hover:border-gold"
            >
              <Mail className="mt-0.5 size-5 shrink-0 text-gold" aria-hidden="true" />
              <span className="min-w-0">
                <span className="block text-sm font-semibold text-primary">Email</span>
                <span className="block break-all text-sm text-muted-foreground">{site.email}</span>
              </span>
            </a>

            <div className="overflow-hidden rounded-2xl border border-border bg-card">
              <div className="flex items-start gap-3 p-5">
                <MapPin className="mt-0.5 size-5 shrink-0 text-gold" aria-hidden="true" />
                <div>
                  <p className="text-sm font-semibold text-primary">Office</p>
                  <p className="text-sm text-muted-foreground">{site.address}</p>
                </div>
              </div>
              <iframe
                title="Mahek Overseas office location"
                src={`https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&output=embed`}
                className="h-56 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <EnquiryForm key={`${job}-${category}`} defaultJob={job} defaultCategory={category} />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
