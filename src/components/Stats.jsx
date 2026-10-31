import { useEffect, useRef, useState } from 'react';
import { animate, useInView, useReducedMotion } from 'framer-motion';
import { experience, ongoingResearch, projects, publications, skills } from '../data/portfolio.js';
import { pastel } from './ui/palette.js';

// Every number is derived from portfolio.js, so it stays true as the data changes.
const stats = [
  { value: projects.length, label: 'Projects Built' },
  { value: experience.length, label: 'Internships' },
  // published papers, with the in-progress ones called out separately
  { value: publications.length, label: 'Published Paper' + (publications.length === 1 ? '' : 's'), note: `+ ${ongoingResearch.length} in progress` },
  { value: skills.reduce((n, s) => n + s.items.length, 0), suffix: '+', label: 'Tools & Technologies' },
];

function Counter({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(reduce ? value : 0);

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(0, value, { duration: 1.6, ease: 'easeOut', onUpdate: (v) => setDisplay(Math.round(v)) });
    return () => controls.stop();
  }, [inView, reduce, value]);

  return (
    <span ref={ref} className="accent text-6xl leading-none sm:text-7xl">
      {display}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section aria-label="At a glance" className="py-6">
      <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-5 sm:px-8 lg:grid-cols-4">
        {stats.map((s, i) => (
          <div key={s.label} className="flex flex-col-reverse rounded-[1.75rem] px-6 py-8 text-center" style={{ background: pastel(i).bg, color: pastel(i).ink }}>
            <dt className="mt-3 text-sm font-semibold text-ink/70">
              {s.label}
              {s.note && (
                <span className="mx-auto mt-2 block w-fit rounded-full bg-white/[0.07] px-3 py-0.5 text-xs font-semibold" style={{ color: pastel(i).ink }}>
                  {s.note}
                </span>
              )}
            </dt>
            <dd>
              <Counter value={s.value} suffix={s.suffix} />
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
