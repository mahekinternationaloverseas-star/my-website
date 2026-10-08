'use client'

import { useState, type FormEvent } from 'react'
import { CheckCircle2, Mail, Paperclip, Send } from 'lucide-react'
import { destinationCountries, jobCategories, primaryContact, site, whatsappLink } from '@/lib/site'
import { WhatsAppIcon } from '@/components/whatsapp-icon'

type Enquiry = {
  name: string
  phone: string
  email: string
  category: string
  country: string
  message: string
  cvName: string
}

const MAX_CV_BYTES = 5 * 1024 * 1024
const ACCEPTED_CV = '.pdf,.doc,.docx'

const inputClass =
  'w-full rounded-xl border border-input bg-card px-4 py-3 text-foreground placeholder:text-muted-foreground/70 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30'

function buildMessage(e: Enquiry) {
  return [
    'New enquiry from the Mahek Overseas website',
    '',
    `Name: ${e.name}`,
    `Phone: ${e.phone}`,
    e.email && `Email: ${e.email}`,
    `Job category: ${e.category}`,
    `Preferred country: ${e.country}`,
    e.cvName && `CV: ${e.cvName} (attaching separately)`,
    '',
    e.message && `Message: ${e.message}`,
  ]
    .filter((line) => line !== false && line !== undefined)
    .join('\n')
}

export function EnquiryForm({
  defaultCategory,
  defaultJob,
}: {
  defaultCategory?: string
  defaultJob?: string
}) {
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState<Enquiry | null>(null)

  const initialCategory =
    defaultCategory && jobCategories.some((c) => defaultCategory.startsWith(c.split(' ')[0]))
      ? jobCategories.find((c) => defaultCategory.startsWith(c.split(' ')[0]))
      : ''

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const cv = data.get('cv')
    const enquiry: Enquiry = {
      name: String(data.get('name') ?? '').trim(),
      phone: String(data.get('phone') ?? '').trim(),
      email: String(data.get('email') ?? '').trim(),
      category: String(data.get('category') ?? ''),
      country: String(data.get('country') ?? ''),
      message: String(data.get('message') ?? '').trim(),
      cvName: cv instanceof File && cv.size > 0 ? cv.name : '',
    }

    const next: Record<string, string> = {}
    if (enquiry.name.length < 2) next.name = 'Please enter your full name.'
    if (!/^[+\d][\d\s-]{7,16}$/.test(enquiry.phone)) next.phone = 'Please enter a valid phone number.'
    if (enquiry.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(enquiry.email))
      next.email = 'Please enter a valid email address.'
    if (!enquiry.category) next.category = 'Please choose a job category.'
    if (!enquiry.country) next.country = 'Please choose a country.'
    if (cv instanceof File && cv.size > MAX_CV_BYTES) next.cv = 'CV must be smaller than 5 MB.'

    setErrors(next)
    if (Object.keys(next).length === 0) setSubmitted(enquiry)
  }

  if (submitted) {
    const text = buildMessage(submitted)
    return (
      <div className="flex flex-col items-center rounded-2xl border border-border bg-card p-8 text-center" role="status">
        <CheckCircle2 className="size-12 text-primary" aria-hidden="true" />
        <h3 className="mt-4 text-2xl font-semibold text-primary">Almost done, {submitted.name.split(' ')[0]}!</h3>
        <p className="mt-2 max-w-md leading-relaxed text-muted-foreground">
          Send your details to our team on WhatsApp or email to complete your enquiry.
          {submitted.cvName && ' Please attach your CV in the chat or email.'}
        </p>
        <div className="mt-6 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <a
            href={whatsappLink(primaryContact.number, text)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 font-semibold text-[#0b2a1a]"
          >
            <WhatsAppIcon className="size-5" />
            Send on WhatsApp
          </a>
          <a
            href={`mailto:${site.email}?subject=${encodeURIComponent(`Enquiry: ${submitted.category} – ${submitted.name}`)}&body=${encodeURIComponent(text)}`}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground"
          >
            <Mail className="size-5" aria-hidden="true" />
            Send by email
          </a>
        </div>
        <button
          type="button"
          onClick={() => setSubmitted(null)}
          className="mt-5 text-sm font-medium text-muted-foreground underline underline-offset-4 hover:text-primary"
        >
          Edit my details
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="grid gap-5 rounded-2xl border border-border bg-card p-6 shadow-sm md:grid-cols-2 md:p-8"
    >
      <Field label="Full name" id="name" error={errors.name} required>
        <input id="name" name="name" autoComplete="name" className={inputClass} placeholder="Your full name" aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-error' : undefined} />
      </Field>
      <Field label="Phone / WhatsApp" id="phone" error={errors.phone} required>
        <input id="phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" className={inputClass} placeholder="+91 98765 43210" aria-invalid={!!errors.phone} aria-describedby={errors.phone ? 'phone-error' : undefined} />
      </Field>
      <Field label="Email" id="email" error={errors.email}>
        <input id="email" name="email" type="email" autoComplete="email" className={inputClass} placeholder="you@example.com" aria-invalid={!!errors.email} aria-describedby={errors.email ? 'email-error' : undefined} />
      </Field>
      <Field label="Job category" id="category" error={errors.category} required>
        <select id="category" name="category" defaultValue={initialCategory} className={inputClass} aria-invalid={!!errors.category} aria-describedby={errors.category ? 'category-error' : undefined}>
          <option value="" disabled>
            Select a category
          </option>
          {jobCategories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </Field>
      <Field label="Preferred country" id="country" error={errors.country} required>
        <select id="country" name="country" defaultValue="" className={inputClass} aria-invalid={!!errors.country} aria-describedby={errors.country ? 'country-error' : undefined}>
          <option value="" disabled>
            Select a country
          </option>
          {destinationCountries.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </Field>
      <Field label="Upload CV (PDF or Word, max 5 MB)" id="cv" error={errors.cv}>
        <label
          htmlFor="cv"
          className="flex cursor-pointer items-center gap-2 rounded-xl border border-dashed border-input bg-secondary/60 px-4 py-3 text-sm text-muted-foreground hover:border-gold"
        >
          <Paperclip className="size-4 text-gold" aria-hidden="true" />
          <span className="truncate" id="cv-label">Choose file</span>
        </label>
        <input
          id="cv"
          name="cv"
          type="file"
          accept={ACCEPTED_CV}
          className="sr-only"
          onChange={(e) => {
            const label = document.getElementById('cv-label')
            if (label) label.textContent = e.target.files?.[0]?.name ?? 'Choose file'
          }}
        />
      </Field>
      <div className="md:col-span-2">
        <Field label="Message" id="message">
          <textarea
            id="message"
            name="message"
            rows={4}
            defaultValue={defaultJob ? `I would like to apply for the ${defaultJob} position.` : ''}
            className={inputClass}
            placeholder="Tell us about your experience or hiring needs"
          />
        </Field>
      </div>
      <div className="flex flex-col gap-3 md:col-span-2 md:flex-row md:items-center md:justify-between">
        <p className="text-xs text-muted-foreground">
          Your details are shared only with the Mahek Overseas team.
        </p>
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-3.5 font-semibold text-gold-foreground shadow-sm transition-transform hover:-translate-y-0.5"
        >
          <Send className="size-4" aria-hidden="true" />
          Submit enquiry
        </button>
      </div>
    </form>
  )
}

function Field({
  label,
  id,
  error,
  required,
  children,
}: {
  label: string
  id: string
  error?: string
  required?: boolean
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-semibold text-primary">
        {label}
        {required && <span className="text-gold"> *</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="text-sm text-destructive">
          {error}
        </p>
      )}
    </div>
  )
}
