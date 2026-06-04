import { faqs } from '../data/siteContent.js'
import Reveal from './Reveal.jsx'
import SectionHeader from './SectionHeader.jsx'

export default function FAQ() {
  return (
    <section id="faq" className="bg-[#fffdf8] px-4 py-16 md:px-6 md:py-20">
      <div className="mx-auto max-w-4xl">
        <SectionHeader eyebrow="שאלות נפוצות" title="כל מה שחשוב לדעת לפני שקובעים" />

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <Reveal key={faq.question} delay={index * 60} className="rounded-2xl border border-[#e4d8c5] bg-white/80 p-5">
              <h3 className="font-extrabold text-[#2e261f]">{faq.question}</h3>
              <p className="mt-2 leading-7 text-[#6f6255]">{faq.answer}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
