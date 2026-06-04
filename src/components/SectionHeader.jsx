import Reveal from './Reveal.jsx'

export default function SectionHeader({ eyebrow, title, text, align = 'center' }) {
  const alignment = align === 'start' ? 'text-right md:mx-0' : 'mx-auto text-center'

  return (
    <Reveal className={`mb-8 max-w-2xl md:mb-10 ${alignment}`}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-bold text-[#7c8b43]">{eyebrow}</p>
      ) : null}
      <h2 className="text-3xl font-extrabold leading-tight text-[#2e261f] md:text-4xl">{title}</h2>
      {text ? <p className="mt-4 text-base leading-8 text-[#6f6255]">{text}</p> : null}
    </Reveal>
  )
}
