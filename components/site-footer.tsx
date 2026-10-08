import { BrandLogo } from '@/components/brand-logo'
import { Mail, Phone } from 'lucide-react'
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from '@/components/whatsapp-icon'
import { navLinks, primaryContact, site, telLink, whatsappLink } from '@/lib/site'

export function SiteFooter() {
  const year = new Date().getFullYear()
  const socials = [
    { label: 'Facebook', href: site.social.facebook, Icon: FacebookIcon },
    { label: 'Instagram', href: site.social.instagram, Icon: InstagramIcon },
    { label: 'WhatsApp', href: whatsappLink(primaryContact.number), Icon: WhatsAppIcon },
  ]

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-2 md:px-6 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <BrandLogo className="h-32 rounded-xl" />
          <p className="mt-5 max-w-md text-sm leading-relaxed text-primary-foreground/75">
            Ethical overseas recruitment connecting skilled professionals with trusted employers
            across the Gulf and international markets. Founded by {site.owners.join(' & ')}.
          </p>
          <ul className="mt-6 flex gap-3">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex size-10 items-center justify-center rounded-full bg-background transition-transform hover:-translate-y-0.5"
                >
                  <Icon />
                  <span className="sr-only">{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Footer">
          <p className="font-semibold text-gold">Quick links</p>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-primary-foreground/75 hover:text-gold">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="font-semibold text-gold">Get in touch</p>
          <ul className="mt-4 flex flex-col gap-3 text-sm">
            {site.contacts.map((c) => (
              <li key={c.number}>
                <a href={telLink(c.number)} className="flex items-center gap-2 text-primary-foreground/75 hover:text-gold">
                  <Phone className="size-4" aria-hidden="true" />
                  {c.name}: {c.display}
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${site.email}`} className="flex items-start gap-2 break-all text-primary-foreground/75 hover:text-gold">
                <Mail className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-xs text-primary-foreground/60 md:flex-row md:justify-between md:px-6">
          <p>{`© ${year} Mahek Overseas. All rights reserved.`}</p>
          <p>We never charge illegal fees. Always verify job offers.</p>
        </div>
      </div>
    </footer>
  )
}
