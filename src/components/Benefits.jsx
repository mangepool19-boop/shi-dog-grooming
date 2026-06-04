import { benefits } from '../data/siteContent.js'
import Reveal from './Reveal.jsx'
import SectionHeader from './SectionHeader.jsx'

export default function Benefits() {
  return (
    <section className="px-4 py-16 md:px-6 md:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="למה לבחור בנו"
          title="מקום שכלבים מרגישים בו בטוחים"
          text="POC שמציג עסק מקצועי, נגיש ואמין כבר מהמסך הראשון."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <Reveal
                key={benefit.title}
                delay={index * 80}
                className="flex gap-4 rounded-lg border border-emerald-100 bg-white p-5 shadow-sm shadow-emerald-900/5"
              >
                <div className="grid size-12 shrink-0 place-items-center rounded-lg bg-emerald-50 text-emerald-600">
                  <Icon size={24} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0f2f38]">{benefit.title}</h3>
                  <p className="mt-2 leading-7 text-slate-600">{benefit.description}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
