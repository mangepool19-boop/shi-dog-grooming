import { StarIcon, testimonials } from '../data/siteContent.js'
import Reveal from './Reveal.jsx'
import SectionHeader from './SectionHeader.jsx'

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#eefbf7] px-4 py-16 md:px-6 md:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="ביקורות לקוחות"
          title="לקוחות שמחים, כלבים רגועים"
          text="ביקורות דוגמה שמראות את הטון האישי והאמין של העסק."
        />

        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal
              key={testimonial.name}
              delay={index * 90}
              className="rounded-lg border border-white bg-white p-6 shadow-sm shadow-emerald-900/5"
            >
              <div className="mb-4 flex gap-1 text-amber-400" aria-label="דירוג 5 כוכבים">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <StarIcon key={starIndex} size={18} fill="currentColor" aria-hidden="true" />
                ))}
              </div>
              <p className="leading-8 text-slate-700">"{testimonial.text}"</p>
              <p className="mt-5 font-bold text-[#0f2f38]">{testimonial.name}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
