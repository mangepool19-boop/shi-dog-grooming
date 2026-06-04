import Reveal from './Reveal.jsx'

export default function SectionHeader({ eyebrow, title, text }) {
  return (
    <Reveal className="mx-auto mb-8 max-w-2xl text-center md:mb-10">
      <p className="mb-3 text-sm font-semibold text-emerald-600">{eyebrow}</p>
      <h2 className="text-3xl font-bold text-[#0f2f38] md:text-4xl">{title}</h2>
      {text ? <p className="mt-4 text-base leading-8 text-slate-600">{text}</p> : null}
    </Reveal>
  )
}
