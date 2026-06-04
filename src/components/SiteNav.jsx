import { MessageCircle, PawPrint } from 'lucide-react'
import { contact, navLinks } from '../data/siteContent.js'

export default function SiteNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-sky-100 bg-white/92 backdrop-blur-xl">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6"
        aria-label="ניווט ראשי"
      >
        <a href="#" className="flex items-center gap-2 text-base font-bold text-[#0f2f38]">
          <span className="grid size-10 place-items-center rounded-lg bg-emerald-100 text-emerald-700">
            <PawPrint size={22} aria-hidden="true" />
          </span>
          שי ספר כלבים
        </a>

        <div className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-emerald-700">
              {link.label}
            </a>
          ))}
        </div>

        <a
          href={contact.whatsappHref}
          className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-emerald-500 px-4 text-sm font-bold text-white shadow-sm shadow-emerald-600/20 transition hover:bg-emerald-600"
        >
          <MessageCircle size={18} aria-hidden="true" />
          תור
        </a>
      </nav>
    </header>
  )
}
