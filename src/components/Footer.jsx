import { PawPrint } from 'lucide-react'
import { socialLinks } from '../data/siteContent.js'

export default function Footer() {
  return (
    <footer className="border-t border-[#dfd0b8]/70 bg-[#fffdf8] px-4 py-8 md:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex items-center gap-2 text-lg font-extrabold text-[#2e261f]">
            <span className="grid size-10 place-items-center rounded-xl bg-[#e7dcc8] text-[#6f7d38]">
              <PawPrint size={22} aria-hidden="true" />
            </span>
            שי ספר כלבים
          </div>
          <p className="mt-2 text-sm text-[#756a5d]">
            © {new Date().getFullYear()} שי ספר כלבים. כל הזכויות שמורות.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {socialLinks.map((link) => {
            const Icon = link.icon
            return (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                className="grid size-10 place-items-center rounded-full border border-[#dfd0b8] bg-white text-[#6f6255] transition hover:border-[#7c8b43] hover:text-[#6f7d38]"
              >
                <Icon size={19} aria-hidden="true" />
              </a>
            )
          })}
        </div>
      </div>
    </footer>
  )
}
