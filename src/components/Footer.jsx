import { PawPrint } from 'lucide-react'
import { socialLinks } from '../data/siteContent.js'

export default function Footer() {
  return (
    <footer className="border-t border-sky-100 bg-[#f7fcfb] px-4 py-8 md:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex items-center gap-2 text-lg font-extrabold text-[#0f2f38]">
            <span className="grid size-10 place-items-center rounded-lg bg-emerald-100 text-emerald-700">
              <PawPrint size={22} aria-hidden="true" />
            </span>
            שי ספר כלבים
          </div>
          <p className="mt-2 text-sm text-slate-500">
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
                className="grid size-10 place-items-center rounded-full border border-sky-100 bg-white text-slate-600 transition hover:border-emerald-200 hover:text-emerald-700"
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
