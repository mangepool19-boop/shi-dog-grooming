import { MessageCircle } from 'lucide-react'
import { contact } from '../data/siteContent.js'

export default function FloatingWhatsApp() {
  return (
    <a
      href={contact.whatsappHref}
      className="fixed bottom-4 left-4 z-50 inline-flex h-13 items-center justify-center gap-2 rounded-full bg-[#7c8b43] px-5 text-sm font-extrabold text-white shadow-xl shadow-[#2e261f]/20 transition hover:bg-[#687636] md:hidden"
      aria-label="קביעת תור בוואטסאפ"
    >
      <MessageCircle size={20} aria-hidden="true" />
      קביעת תור
    </a>
  )
}
