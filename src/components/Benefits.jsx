import { benefits } from '../data/siteContent.js'
import Reveal from './Reveal.jsx'
import SectionHeader from './SectionHeader.jsx'

export default function Benefits() {
  return (
    <section className="px-4 py-16 md:px-6 md:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="למה לבחור בנו"
          title="מקצועיות שקטה, בלי לחץ ובלי רעש"
          text="האתר מציג כיוון עסקי אמין: שירות אישי, סביבת עבודה נקייה ותיאום פשוט."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <Reveal key={benefit.title} delay={index * 80} className="warm-card flex gap-4 rounded-[1.5rem] p-5">
                <div className="grid size-12 shrink-0 place-items-center rounded-2xl bg-[#f4eadb] text-[#7c8b43]">
                  <Icon size={24} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-[#2e261f]">{benefit.title}</h3>
                  <p className="mt-2 leading-7 text-[#6f6255]">{benefit.description}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
