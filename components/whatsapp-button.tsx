import { WhatsAppIcon } from '@/components/whatsapp-icon'
import { primaryContact, whatsappLink } from '@/lib/site'

export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink(primaryContact.number, 'Hello Mahek Overseas, I would like to know more about overseas jobs.')}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] shadow-xl ring-4 ring-[#25D366]/25 transition-transform hover:scale-105"
    >
      <WhatsAppIcon className="size-7 brightness-0 invert" />
      <span className="sr-only">Chat with us on WhatsApp</span>
    </a>
  )
}
