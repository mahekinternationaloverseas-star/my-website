/* eslint-disable @next/next/no-img-element */
import { cn } from '@/lib/utils'

const ICON_BASE = 'https://thesvg.org/icons'

function BrandIcon({ slug, className }: { slug: string; className?: string }) {
  return (
    <img
      src={`${ICON_BASE}/${slug}/default.svg`}
      alt=""
      aria-hidden="true"
      width={20}
      height={20}
      className={cn('size-5', className)}
    />
  )
}

export function WhatsAppIcon({ className }: { className?: string }) {
  return <BrandIcon slug="whatsapp" className={className} />
}

export function FacebookIcon({ className }: { className?: string }) {
  return <BrandIcon slug="facebook" className={className} />
}

export function InstagramIcon({ className }: { className?: string }) {
  return <BrandIcon slug="instagram" className={className} />
}
