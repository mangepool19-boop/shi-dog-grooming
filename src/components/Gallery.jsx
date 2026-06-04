import { galleryImages } from '../data/siteContent.js'
import Reveal from './Reveal.jsx'
import SectionHeader from './SectionHeader.jsx'

export default function Gallery() {
  return (
    <section id="gallery" className="bg-white px-4 py-16 md:px-6 md:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="גלריה"
          title="מראה נקי, שמח ומטופח"
          text="כמה תמונות דוגמה שממחישות את האווירה והכיוון הוויזואלי לאתר."
        />

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
          {galleryImages.map((image, index) => (
            <Reveal key={image.src} delay={index * 70} className="group overflow-hidden rounded-lg">
              <img
                src={image.src}
                alt={image.alt}
                className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-105 md:aspect-[4/3]"
                loading="lazy"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
