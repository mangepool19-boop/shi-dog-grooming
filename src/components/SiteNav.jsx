import { MessageCircle, PawPrint } from 'lucide-react'
import { contact, navLinks } from '../data/siteContent.js'

export default function SiteNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#dfd0b8]/60 bg-[#fffdf8]/92 backdrop-blur-xl">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6"
        aria-label="ניווט ראשי"
      >
        <a href="#" className="flex items-center gap-2 text-base font-extrabold text-[#2e261f]">
          <span className="grid size-10 place-items-center rounded-xl bg-[#e7dcc8] text-[#6f7d38]">
            <PawPrint size={22} aria-hidden="true" />
          </span>
          שי ספר כלבים
        </a>

        <div className="hidden items-center gap-6 text-sm font-semibold text-[#6f6255] md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-[#6f7d38]">
              {link.label}
            </a>
          ))}
        </div>

        <a
          href={contact.whatsappHref}
          className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-[#7c8b43] px-4 text-sm font-extrabold text-white shadow-sm shadow-[#6f7d38]/20 transition hover:bg-[#687636]"
        >
          <MessageCircle size={18} aria-hidden="true" />
          תור
        </a>
      </nav>
    </header>
  )
}
