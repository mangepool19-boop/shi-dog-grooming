import { MessageCircle } from 'lucide-react'
import { contact, contactCards } from '../data/siteContent.js'
import Reveal from './Reveal.jsx'
import SectionHeader from './SectionHeader.jsx'

export default function Contact() {
  return (
    <section id="contact" className="bg-white px-4 py-16 md:px-6 md:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="יצירת קשר"
          title="לקבוע תור בקלות"
          text="אפשר לפנות בוואטסאפ או בטלפון, ולקבל תיאום מהיר ונוח."
        />

        <div className="grid gap-4 md:grid-cols-3">
          {contactCards.map((card, index) => {
            const Icon = card.icon
            return (
              <Reveal
                key={card.label}
                delay={index * 80}
                className="rounded-lg border border-sky-100 bg-[#f8fdfc] p-5"
              >
                <div className="mb-4 grid size-11 place-items-center rounded-lg bg-sky-50 text-sky-600">
                  <Icon size={22} aria-hidden="true" />
                </div>
                <p className="text-sm font-semibold text-emerald-600">{card.label}</p>
                <p className="mt-2 text-lg font-bold leading-8 text-[#0f2f38]">{card.value}</p>
              </Reveal>
            )
          })}
        </div>

        <Reveal className="mt-8 rounded-lg bg-[#0f766e] p-6 text-center text-white md:p-8">
          <h3 className="text-2xl font-bold">רוצים שהכלב ייצא מסודר, נקי ושמח?</h3>
          <p className="mx-auto mt-3 max-w-2xl leading-8 text-emerald-50">
            לחיצה אחת וקובעים תור ישירות בוואטסאפ.
          </p>
          <a
            href={contact.whatsappHref}
            className="mt-6 inline-flex h-14 items-center justify-center gap-3 rounded-full bg-white px-8 text-base font-extrabold text-[#0f766e] shadow-lg shadow-emerald-950/20 transition hover:bg-emerald-50"
          >
            <MessageCircle size={22} aria-hidden="true" />
            קביעת תור בוואטסאפ
          </a>
        </Reveal>
      </div>
    </section>
  )
}
