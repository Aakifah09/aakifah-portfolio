import { skills } from '../data/portfolio.js';
import Reveal from './ui/Reveal.jsx';
import Section from './ui/Section.jsx';
import { iconMap } from './ui/icons.jsx';

// Laid out like Unfold's "My Services" feature grid.
export default function Skills() {
  return (
    <Section id="skills" title="What I Work With">
      <ul className="grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map(({ category, icon, items }, i) => {
          const Icon = iconMap[icon];
          return (
            <li key={category}>
              <Reveal delay={(i % 3) * 0.1} className="text-center sm:text-left">
                <Icon className="mx-auto h-11 w-11 stroke-[1.25] text-accent sm:mx-0" aria-hidden="true" />
                <h3 className="mt-6 text-[22px] font-black leading-tight">{category}</h3>
                <p className="mt-3 text-white/70">{items.join(' · ')}</p>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
