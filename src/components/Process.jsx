import { processSteps } from '../data/siteContent.js'
import Reveal from './Reveal.jsx'
import SectionHeader from './SectionHeader.jsx'

export default function Process() {
  return (
    <section className="bg-[#fffdf8] px-4 py-16 md:px-6 md:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="איך זה עובד?"
          title="מהרגע שפונים ועד שהכלב יוצא מטופח"
          text="תהליך פשוט וברור שמוריד חשש, במיוחד ללקוחות שמגיעים בפעם הראשונה."
        />

        <div className="grid gap-4 md:grid-cols-5">
          {processSteps.map((step, index) => (
            <Reveal key={step} delay={index * 70} className="warm-card rounded-2xl p-5">
              <div className="mb-4 flex size-10 items-center justify-center rounded-full bg-[#7c8b43] text-lg font-black text-white">
                {index + 1}
              </div>
              <p className="font-extrabold leading-7 text-[#2e261f]">{step}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
