import { ArrowDown, MessageCircle, Phone } from 'lucide-react'
import { contact, heroImage } from '../data/siteContent.js'
import Reveal from './Reveal.jsx'

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[76svh] items-end overflow-hidden bg-[#0f2f38] text-white">
      <img
        src={heroImage}
        alt="כלב מטופח לאחר רחצה ותספורת"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 -z-10 bg-[#0f2f38]/50" />

      <div className="mx-auto w-full max-w-6xl px-4 pb-12 pt-24 md:px-6 md:pb-16">
        <Reveal className="max-w-2xl">
          <p className="mb-4 inline-flex rounded-full bg-white/16 px-4 py-2 text-sm font-semibold backdrop-blur">
            מספרת כלבים מקצועית ונעימה
          </p>
          <h1 className="text-5xl font-extrabold leading-tight md:text-7xl">שי ספר כלבים</h1>
          <p className="mt-4 text-2xl font-semibold text-sky-100 md:text-3xl">
            הכלב שלכם ייראה וירגיש נהדר
          </p>
          <p className="mt-5 max-w-xl text-lg leading-8 text-white/90">
            תספורות, רחצה וטיפוח מקצועי באהבה ובסבלנות לכל כלב
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={contact.whatsappHref}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-emerald-400 px-6 text-base font-bold text-[#06342f] shadow-lg shadow-emerald-900/20 transition hover:bg-emerald-300"
            >
              <MessageCircle size={20} aria-hidden="true" />
              קביעת תור בוואטסאפ
            </a>
            <a
              href={contact.phoneHref}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/65 bg-white/12 px-6 text-base font-bold text-white backdrop-blur transition hover:bg-white/20"
            >
              <Phone size={20} aria-hidden="true" />
              התקשר עכשיו
            </a>
          </div>
        </Reveal>

        <a
          href="#services"
          className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-white/85 transition hover:text-white"
        >
          גלול לשירותים
          <ArrowDown size={18} aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}
