import { services } from '../data/siteContent.js'
import Reveal from './Reveal.jsx'
import SectionHeader from './SectionHeader.jsx'

export default function Services() {
  return (
    <section id="services" className="px-4 py-16 md:px-6 md:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="השירותים"
          title="כל מה שהכלב צריך כדי לצאת מסודר ונעים"
          text="שירותי טיפוח בסיסיים וברורים, עם דגש על נוחות הכלב ועל תוצאה שנראית טבעית ונקייה."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Reveal key={service.title} delay={index * 80} className="warm-card rounded-[1.5rem] p-5">
                <div className="mb-5 grid size-12 place-items-center rounded-2xl bg-[#f4eadb] text-[#7c8b43]">
                  <Icon size={24} aria-hidden="true" />
                </div>
                <h3 className="text-xl font-extrabold text-[#2e261f]">{service.title}</h3>
                <p className="mt-3 leading-7 text-[#6f6255]">{service.description}</p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
