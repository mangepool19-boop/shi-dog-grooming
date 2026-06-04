import { MessageCircle } from 'lucide-react'
import { availability, createWhatsAppLink } from '../data/siteContent.js'
import Reveal from './Reveal.jsx'
import SectionHeader from './SectionHeader.jsx'

export default function Availability() {
  return (
    <section id="availability" className="bg-[#f4eadb] px-4 py-16 md:px-6 md:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="תצוגת POC"
          title="שעות פנויות השבוע"
          text="תצוגה לדוגמה שמראה איך אזור הזמינות יכול להיראות לפני חיבור ליומן אמיתי."
        />

        <div className="grid gap-4 md:grid-cols-3">
          {availability.map((day, index) => (
            <Reveal key={day.day} delay={index * 80} className="rounded-[1.5rem] bg-[#fffdf8] p-5 shadow-sm">
              <h3 className="text-xl font-extrabold text-[#2e261f]">{day.day}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {day.slots.map((slot) => {
                  const message = `שלום שי, ראיתי באתר שהתור בתאריך ${day.day} בשעה ${slot} פנוי. אשמח לקבוע אותו לכלב שלי.`
                  return (
                    <a
                      key={slot}
                      href={createWhatsAppLink(message)}
                      className="inline-flex items-center gap-2 rounded-full border border-[#d6c2a3] bg-white px-4 py-2 text-sm font-extrabold text-[#5f6f30] transition hover:border-[#7c8b43] hover:bg-[#fbf8f1]"
                    >
                      <MessageCircle size={16} aria-hidden="true" />
                      {slot}
                    </a>
                  )
                })}
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-5 text-center text-sm text-[#756a5d]">
          *הזמנים להמחשה בלבד. בהמשך ניתן יהיה לחבר ליומן אמיתי.
        </p>
      </div>
    </section>
  )
}
