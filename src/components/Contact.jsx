import { MessageCircle } from 'lucide-react'
import { contact, contactCards } from '../data/siteContent.js'
import Reveal from './Reveal.jsx'
import SectionHeader from './SectionHeader.jsx'

export default function Contact() {
  return (
    <section id="contact" className="px-4 py-16 pb-28 md:px-6 md:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="יצירת קשר"
          title="רוצים לקבוע תור או לקבל הערכה?"
          text="אפשר לשלוח הודעה קצרה בוואטסאפ עם פרטי הכלב ולקבל תיאום נוח."
        />

        <div className="grid gap-4 md:grid-cols-3">
          {contactCards.map((card, index) => {
            const Icon = card.icon
            return (
              <Reveal key={card.label} delay={index * 80} className="warm-card rounded-[1.5rem] p-5">
                <div className="mb-4 grid size-11 place-items-center rounded-2xl bg-[#f4eadb] text-[#7c8b43]">
                  <Icon size={22} aria-hidden="true" />
                </div>
                <p className="text-sm font-bold text-[#7c8b43]">{card.label}</p>
                <p className="mt-2 text-lg font-extrabold leading-8 text-[#2e261f]">{card.value}</p>
              </Reveal>
            )
          })}
        </div>

        <Reveal className="mt-8 rounded-[1.75rem] bg-[#2e261f] p-6 text-center text-white md:p-8">
          <h3 className="text-2xl font-extrabold">לחיצה אחת וקובעים תור בוואטסאפ</h3>
          <p className="mx-auto mt-3 max-w-2xl leading-8 text-[#eadfce]">
            ההודעה כבר מוכנה עם מקום לשם הכלב, סוג הכלב והזמן שנוח לכם.
          </p>
          <a
            href={contact.whatsappHref}
            className="mt-6 inline-flex h-14 items-center justify-center gap-3 rounded-full bg-[#d9be96] px-8 text-base font-extrabold text-[#2e261f] shadow-lg shadow-black/20 transition hover:bg-[#e6ceb0]"
          >
            <MessageCircle size={22} aria-hidden="true" />
            קביעת תור בוואטסאפ
          </a>
        </Reveal>
      </div>
    </section>
  )
}
