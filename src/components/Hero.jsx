import { ArrowDown, MessageCircle, Sparkles } from 'lucide-react'
import { contact, heroImage, trustStats } from '../data/siteContent.js'
import Reveal from './Reveal.jsx'

export default function Hero() {
  return (
    <section className="relative px-4 pb-14 pt-8 md:px-6 md:pb-20 md:pt-14">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1fr_0.92fr]">
        <Reveal className="max-w-2xl">
          <p className="mb-5 inline-flex rounded-full border border-[#d9c7a8] bg-white/70 px-4 py-2 text-sm font-bold text-[#6f7d38] shadow-sm">
            מספרת כלבים רגועה ומקצועית
          </p>
          <h1 className="text-5xl font-black leading-tight text-[#2e261f] md:text-7xl">
            שי ספר כלבים
          </h1>
          <p className="mt-4 text-2xl font-extrabold leading-snug text-[#5f6f30] md:text-3xl">
            הכלב שלכם חוזר נקי, ריחני ומטופח
          </p>
          <p className="mt-5 max-w-xl text-lg leading-8 text-[#6f6255]">
            תספורת, רחצה וטיפוח מקצועי באווירה רגועה, עם יחס אישי וסבלנות לכל כלב.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={contact.whatsappHref}
              className="inline-flex h-13 items-center justify-center gap-2 rounded-full bg-[#7c8b43] px-6 text-base font-extrabold text-white shadow-lg shadow-[#6f7d38]/20 transition hover:bg-[#687636]"
            >
              <MessageCircle size={20} aria-hidden="true" />
              קביעת תור בוואטסאפ
            </a>
            <a
              href="#services"
              className="inline-flex h-13 items-center justify-center gap-2 rounded-full border border-[#d9c7a8] bg-white/70 px-6 text-base font-extrabold text-[#2e261f] transition hover:bg-white"
            >
              לצפייה בשירותים
              <ArrowDown size={18} aria-hidden="true" />
            </a>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-3 text-center">
            {trustStats.map((stat) => (
              <div key={stat} className="rounded-2xl bg-white/70 px-3 py-4 text-sm font-bold text-[#5b5147]">
                {stat}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120} className="relative">
          <div className="warm-card relative overflow-hidden rounded-[2rem] p-3">
            <img
              src={heroImage}
              alt="כלב מטופח ונקי אחרי טיפול במספרה"
              className="aspect-[4/5] w-full rounded-[1.5rem] object-cover md:aspect-[5/6]"
              fetchPriority="high"
            />
            <div className="absolute right-6 top-6 inline-flex items-center gap-2 rounded-full bg-[#fffdf8]/92 px-4 py-2 text-sm font-extrabold text-[#5f6f30] shadow-md">
              <Sparkles size={17} aria-hidden="true" />
              טיפוח מקצועי באהבה
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
