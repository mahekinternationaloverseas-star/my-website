import Image from 'next/image'
import { cn } from '@/lib/utils'

// Crops the cream margins of the square source image so the full lockup
// (emblem + "MAHEK OVERSEAS" + tagline) fills the box and stays legible.
export function BrandLogo({ className, priority }: { className?: string; priority?: boolean }) {
  return (
    <span
      className={cn(
        'relative block aspect-[980/870] shrink-0 overflow-hidden rounded-md bg-[#fbf8ee]',
        className,
      )}
    >
      <Image
        src="/images/mahek-logo-full.jpg"
        alt="Mahek Overseas – Global Recruitment Solutions"
        width={1254}
        height={1254}
        priority={priority}
        sizes="200px"
        className="absolute left-[-14.29%] top-[-31.03%] aspect-square w-[127.96%] max-w-none"
      />
    </span>
  )
}
