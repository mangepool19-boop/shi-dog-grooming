import { MessageCircle } from 'lucide-react'
import { createWhatsAppLink, priceEstimateMessage, prices } from '../data/siteContent.js'
import Reveal from './Reveal.jsx'
import SectionHeader from './SectionHeader.jsx'

export default function Pricing() {
  return (
    <section id="pricing" className="px-4 py-16 md:px-6 md:py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          eyebrow="מחירים נפוצים"
          title="הערכה ראשונית לפני שמגיעים"
          text="המחיר הסופי משתנה לפי גודל הכלב, סוג הפרווה ומצב הקשרים."
        />

        <Reveal className="warm-card overflow-hidden rounded-[1.5rem]">
          <div className="divide-y divide-[#e4d8c5]">
            {prices.map((item) => (
              <div key={item.service} className="flex items-center justify-between gap-4 px-5 py-4 md:px-7">
                <p className="font-bold text-[#2e261f]">{item.service}</p>
                <p className="shrink-0 rounded-full bg-[#f4eadb] px-4 py-2 text-sm font-extrabold text-[#6f7d38]">
                  {item.price}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-6 text-center">
          <a
            href={createWhatsAppLink(priceEstimateMessage)}
            className="inline-flex h-13 items-center justify-center gap-2 rounded-full bg-[#7c8b43] px-6 font-extrabold text-white shadow-lg shadow-[#6f7d38]/20 transition hover:bg-[#687636]"
          >
            <MessageCircle size={20} aria-hidden="true" />
            קבלו הערכת מחיר בוואטסאפ
          </a>
        </Reveal>
      </div>
    </section>
  )
}
