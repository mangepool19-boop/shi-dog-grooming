import { beforeAfter, galleryImages } from '../data/siteContent.js'
import Reveal from './Reveal.jsx'
import SectionHeader from './SectionHeader.jsx'

export default function Gallery() {
  return (
    <section id="gallery" className="bg-[#fffdf8] px-4 py-16 md:px-6 md:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="גלריה"
          title="דוגמאות לסגנון תצוגה"
          text="בקרוב יעלו עבודות אמיתיות מהמספרה. כרגע אלה תמונות השראה איכותיות שממחישות את הכיוון."
        />

        <Reveal className="mb-6 grid overflow-hidden rounded-[1.75rem] border border-[#e4d8c5] bg-white md:grid-cols-2">
          <BeforeAfterImage src={beforeAfter.before} label="לפני" alt="כלב לפני טיפול, להמחשת מבנה לפני ואחרי" />
          <BeforeAfterImage src={beforeAfter.after} label="אחרי" alt="כלב אחרי טיפוח, להמחשת מבנה לפני ואחרי" />
        </Reveal>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
          {galleryImages.map((image, index) => (
            <Reveal key={image.src} delay={index * 70} className="group overflow-hidden rounded-[1.25rem] bg-white">
              <div className="relative">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute right-3 top-3 rounded-full bg-[#fffdf8]/90 px-3 py-1 text-xs font-extrabold text-[#5f6f30]">
                  {image.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function BeforeAfterImage({ src, label, alt }) {
  return (
    <div className="relative min-h-64 overflow-hidden">
      <img src={src} alt={alt} className="h-full min-h-64 w-full object-cover" loading="lazy" />
      <span className="absolute right-4 top-4 rounded-full bg-[#2e261f]/80 px-4 py-2 text-sm font-extrabold text-white">
        {label}
      </span>
    </div>
  )
}
