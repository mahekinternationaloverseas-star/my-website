import { AlertTriangle, FileCheck2, Handshake, ShieldCheck, Clock } from 'lucide-react'

const badges = [
  { icon: ShieldCheck, label: 'Ethical Recruitment' },
  { icon: FileCheck2, label: 'Transparent Documentation' },
  { icon: Handshake, label: 'Genuine Employers' },
  { icon: Clock, label: 'Fast Processing' },
]

export function TrustBar() {
  return (
    <section aria-label="Trust and safety" className="border-b border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-8 md:px-6">
        <ul className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {badges.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-3">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-accent text-primary">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <span className="text-sm font-semibold text-primary">{label}</span>
            </li>
          ))}
        </ul>
        <div
          role="note"
          className="mt-6 flex items-start gap-3 rounded-xl border border-gold/50 bg-accent px-4 py-3 text-sm text-accent-foreground"
        >
          <AlertTriangle className="mt-0.5 size-5 shrink-0 text-gold" aria-hidden="true" />
          <p>
            <strong>Important notice:</strong> We never charge illegal fees. Always verify job
            offers. Contact us directly on our official numbers if you are unsure about any offer
            made in our name.
          </p>
        </div>
      </div>
    </section>
  )
}
