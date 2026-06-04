import { services } from '../data/siteContent.js'
import Reveal from './Reveal.jsx'
import SectionHeader from './SectionHeader.jsx'

export default function Services() {
  return (
    <section id="services" className="px-4 py-16 md:px-6 md:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="השירותים שלנו"
          title="טיפוח מלא, רגוע ומדויק"
          text="כל טיפול נבנה סביב הכלב: סוג הפרווה, רמת הרגישות והקצב שמתאים לו."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Reveal
                key={service.title}
                delay={index * 90}
                className="rounded-lg border border-sky-100 bg-white p-5 shadow-sm shadow-sky-900/5"
              >
                <div className="mb-5 grid size-12 place-items-center rounded-lg bg-sky-50 text-sky-600">
                  <Icon size={24} aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-[#0f2f38]">{service.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{service.description}</p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
