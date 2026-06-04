import { UserRound } from 'lucide-react'
import { aboutPoints, icons } from '../data/siteContent.js'
import Reveal from './Reveal.jsx'
import SectionHeader from './SectionHeader.jsx'

export default function MeetShi() {
  const CheckIcon = icons.CheckCircle

  return (
    <section id="about" className="px-4 py-14 md:px-6 md:py-18">
      <div className="mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-[0.85fr_1fr]">
        <Reveal className="warm-card rounded-[1.75rem] p-6">
          <div className="grid aspect-[4/3] place-items-center rounded-[1.25rem] border border-dashed border-[#c9b38f] bg-[#f4eadb] text-center">
            <div className="max-w-xs px-6">
              <div className="mx-auto mb-4 grid size-16 place-items-center rounded-2xl bg-[#fffdf8] text-[#7c8b43]">
                <UserRound size={30} aria-hidden="true" />
              </div>
              <p className="font-extrabold text-[#2e261f]">כאן תופיע תמונה של שי עם כלב</p>
              <p className="mt-2 text-sm leading-6 text-[#7a6b5a]">
                מקום שמור לתמונה אמיתית מהעסק, כשהיא תהיה זמינה.
              </p>
            </div>
          </div>
        </Reveal>

        <div>
          <SectionHeader
            align="start"
            eyebrow="הכירו את שי"
            title="טיפול רגוע שמתחיל בהקשבה לכלב"
            text="שי מאמין שכל כלב צריך לקבל טיפול רגוע, סבלני ומותאם לאופי שלו. המטרה היא לא רק תספורת יפה, אלא חוויה נעימה ובטוחה לכלב ולבעלים."
          />

          <div className="grid gap-3 sm:grid-cols-3">
            {aboutPoints.map((point, index) => (
              <Reveal
                key={point}
                delay={index * 80}
                className="rounded-2xl bg-white/75 p-4 font-bold text-[#4d453c]"
              >
                <CheckIcon className="mb-3 text-[#7c8b43]" size={22} aria-hidden="true" />
                {point}
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
