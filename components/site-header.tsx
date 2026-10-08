'use client'

import { useState } from 'react'
import { BrandLogo } from '@/components/brand-logo'
import { Mail, Menu, Phone, X } from 'lucide-react'
import { navLinks, site, telLink } from '@/lib/site'

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50">
      <div className="hidden bg-primary text-primary-foreground md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-2 text-xs">
          <div className="flex items-center gap-5">
            {site.contacts.map((c) => (
              <a
                key={c.number}
                href={telLink(c.number)}
                className="flex items-center gap-1.5 transition-colors hover:text-gold"
              >
                <Phone className="size-3.5" aria-hidden="true" />
                <span>
                  {c.name}: {c.display}
                </span>
              </a>
            ))}
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-1.5 transition-colors hover:text-gold"
            >
              <Mail className="size-3.5" aria-hidden="true" />
              {site.email}
            </a>
          </div>
          <p className="text-primary-foreground/70">We never charge illegal fees.</p>
        </div>
      </div>

      <div className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/85">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-6"
          aria-label="Main"
        >
          <a href="#top" className="flex items-center gap-3" aria-label="Mahek Overseas home">
            <BrandLogo className="h-12 md:h-14" priority />
            <span className="flex flex-col leading-none">
              <span className="font-serif text-lg font-semibold tracking-wide text-primary md:text-2xl">
                MAHEK
              </span>
              <span className="mt-1 font-serif text-[0.65rem] font-medium tracking-[0.35em] text-gold md:text-xs">
                OVERSEAS
              </span>
            </span>
          </a>

          <ul className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-gold-foreground shadow-sm transition-transform hover:-translate-y-0.5 sm:inline-flex"
            >
              Apply Now
            </a>
            <button
              type="button"
              className="inline-flex size-10 items-center justify-center rounded-full text-primary hover:bg-secondary lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
              <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
            </button>
          </div>
        </nav>

        {open && (
          <div id="mobile-menu" className="border-t border-border bg-background lg:hidden">
            <ul className="mx-auto flex max-w-7xl flex-col px-4 py-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3 font-medium text-foreground/85 hover:bg-secondary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-2 flex flex-col gap-2 border-t border-border pt-3">
                {site.contacts.map((c) => (
                  <a
                    key={c.number}
                    href={telLink(c.number)}
                    className="flex items-center gap-2 px-3 py-2 text-sm text-primary"
                  >
                    <Phone className="size-4" aria-hidden="true" />
                    Call {c.name}: {c.display}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-1 rounded-full bg-gold px-5 py-3 text-center font-semibold text-gold-foreground"
                >
                  Apply Now
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  )
}
