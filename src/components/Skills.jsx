import { skills } from '../data/portfolio.js';
import Reveal from './ui/Reveal.jsx';
import Section from './ui/Section.jsx';
import { iconMap } from './ui/icons.jsx';
import { pastel } from './ui/palette.js';

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="toolkit"
      title={
        <>
          What I <em className="accent text-lavender-deep">work</em> with
        </>
      }
    >
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map(({ category, icon, items }, i) => {
          const Icon = iconMap[icon];
          const p = pastel(i);
          return (
            <li key={category} className="flex">
              <Reveal delay={(i % 3) * 0.08} className="flex w-full">
                <div className="relative w-full overflow-hidden rounded-[1.75rem] p-7" style={{ background: p.bg }}>
                  <span aria-hidden="true" className="absolute -right-12 -top-12 h-36 w-36 rounded-full blur-2xl" style={{ background: p.blob }} />
                  <span className="relative grid h-12 w-12 place-items-center rounded-2xl bg-white/80" style={{ color: p.ink }}>
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="relative mt-5 text-xl font-bold">{category}</h3>
                  <ul className="relative mt-4 flex flex-wrap gap-1.5">
                    {items.map((item) => (
                      <li key={item} className="rounded-full bg-white/75 px-3 py-1 text-[13px] font-semibold text-ink/80">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
