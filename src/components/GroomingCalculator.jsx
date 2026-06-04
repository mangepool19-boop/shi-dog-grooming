import { useMemo, useState } from 'react'
import { MessageCircle } from 'lucide-react'
import { createWhatsAppLink } from '../data/siteContent.js'
import Reveal from './Reveal.jsx'
import SectionHeader from './SectionHeader.jsx'

const options = {
  size: ['קטן', 'בינוני', 'גדול'],
  coat: ['קצרה', 'ארוכה', 'מתולתלת', 'סבוכה'],
  condition: ['רגילה', 'יש קשרים', 'הרבה קשרים'],
}

function buildResult(size, coat, condition) {
  if (condition === 'הרבה קשרים' || coat === 'סבוכה') {
    return {
      frequency: 'מומלץ להגיע לבדיקה לפני קביעת מחיר סופי.',
      time: 'זמן הטיפול משתנה לפי כמות הקשרים ונוחות הכלב.',
      price: 'טיפול קשרים דורש זמן נוסף כדי לשמור על נוחות הכלב.',
    }
  }

  if (size === 'קטן' && condition === 'רגילה') {
    return {
      frequency: 'מומלץ להגיע כל 6-8 שבועות.',
      time: 'זמן טיפול משוער: כשעה עד שעה וחצי.',
      price: 'מחיר משוער: 150-200 ₪.',
    }
  }

  if (size === 'גדול') {
    return {
      frequency: 'מומלץ להגיע כל 6-10 שבועות, בהתאם לפרווה.',
      time: 'זמן טיפול משוער: כשעתיים.',
      price: 'מחיר משוער: 220-320 ₪.',
    }
  }

  return {
    frequency: 'מומלץ להגיע כל 6-8 שבועות.',
    time: 'זמן טיפול משוער: שעה וחצי עד שעתיים.',
    price: 'מחיר משוער: 180-260 ₪.',
  }
}

export default function GroomingCalculator() {
  const [size, setSize] = useState('קטן')
  const [coat, setCoat] = useState('ארוכה')
  const [condition, setCondition] = useState('רגילה')

  const result = useMemo(() => buildResult(size, coat, condition), [size, coat, condition])
  const message = `שלום שי, אשמח להתייעץ לגבי טיפוח הכלב שלי. גודל הכלב: ${size}. סוג פרווה: ${coat}. מצב הפרווה: ${condition}.`

  return (
    <section className="px-4 py-16 md:px-6 md:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="מיני מחשבון"
          title="מתי הכלב שלי צריך תספורת?"
          text="כלי POC פשוט שעוזר לבעלים להבין תדירות, זמן טיפול וטווח מחיר לפני פנייה."
        />

        <Reveal className="warm-card grid gap-6 rounded-[1.75rem] p-5 md:grid-cols-[1fr_0.9fr] md:p-7">
          <div className="space-y-5">
            <OptionGroup label="גודל הכלב" value={size} values={options.size} onChange={setSize} />
            <OptionGroup label="סוג פרווה" value={coat} values={options.coat} onChange={setCoat} />
            <OptionGroup
              label="מצב הפרווה"
              value={condition}
              values={options.condition}
              onChange={setCondition}
            />
          </div>

          <div className="rounded-[1.25rem] bg-[#f4eadb] p-5">
            <h3 className="text-xl font-extrabold text-[#2e261f]">הערכת טיפול</h3>
            <div className="mt-4 space-y-3 leading-8 text-[#5b5147]">
              <p>{result.frequency}</p>
              <p>{result.time}</p>
              <p>{result.price}</p>
            </div>
            <a
              href={createWhatsAppLink(message)}
              className="mt-6 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#7c8b43] px-5 font-extrabold text-white transition hover:bg-[#687636]"
            >
              <MessageCircle size={19} aria-hidden="true" />
              שלחו את הפרטים לשי בוואטסאפ
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function OptionGroup({ label, value, values, onChange }) {
  return (
    <div>
      <p className="mb-3 font-extrabold text-[#2e261f]">{label}</p>
      <div className="flex flex-wrap gap-2">
        {values.map((item) => {
          const isActive = item === value
          return (
            <button
              key={item}
              type="button"
              onClick={() => onChange(item)}
              className={`rounded-full border px-4 py-2 text-sm font-bold transition ${
                isActive
                  ? 'border-[#7c8b43] bg-[#7c8b43] text-white'
                  : 'border-[#d6c2a3] bg-white text-[#5b5147] hover:border-[#7c8b43]'
              }`}
            >
              {item}
            </button>
          )
        })}
      </div>
    </div>
  )
}
