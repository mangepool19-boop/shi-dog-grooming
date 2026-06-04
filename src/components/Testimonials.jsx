import { icons, testimonials } from '../data/siteContent.js'
import Reveal from './Reveal.jsx'
import SectionHeader from './SectionHeader.jsx'

export default function Testimonials() {
  const StarIcon = icons.Star

  return (
    <section id="testimonials" className="bg-[#f4eadb] px-4 py-16 md:px-6 md:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="המלצות לדוגמה ל-POC"
          title="כך אזור ההמלצות יוכל להיראות"
          text="בהמשך ניתן לחבר ביקורות אמיתיות מגוגל ולהחליף את הטקסטים לדברים של לקוחות אמיתיים."
        />

        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={`${testimonial.name}-${index}`} delay={index * 90} className="rounded-[1.5rem] bg-[#fffdf8] p-6 shadow-sm">
              <div className="mb-4 flex gap-1 text-[#c89335]" aria-label="דירוג 5 כוכבים לדוגמה">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <StarIcon key={starIndex} size={18} fill="currentColor" aria-hidden="true" />
                ))}
              </div>
              <p className="leading-8 text-[#5b5147]">"{testimonial.text}"</p>
              <p className="mt-5 font-extrabold text-[#2e261f]">{testimonial.name}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
