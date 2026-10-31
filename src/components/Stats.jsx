import { useEffect, useRef, useState } from 'react';
import { animate, useInView, useReducedMotion } from 'framer-motion';
import { experience, ongoingResearch, projects, publications, skills } from '../data/portfolio.js';

// Every number is derived from portfolio.js, so it stays true as the data changes.
const stats = [
  { value: projects.length, label: 'Projects Built' },
  { value: experience.length, label: 'Internships' },
  // published + in-progress papers
  { value: publications.length + ongoingResearch.length, label: 'Research Papers' },
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
    <span ref={ref} className="relative inline-block font-alt text-[69px] font-bold leading-none text-accent">
      {display}
      {/* superscript suffix, positioned so it doesn't shift the number's baseline */}
      {suffix && <span className="absolute -right-5 top-0 font-sans text-[28px] font-black text-white">{suffix}</span>}
    </span>
  );
}

export default function Stats() {
  return (
    <section aria-label="At a glance" className="py-10 sm:py-16">
      <dl className="mx-auto grid max-w-[1140px] grid-cols-2 gap-y-12 px-5 text-center sm:px-8 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col-reverse">
            <dt className="mt-3 text-[11px] font-black uppercase tracking-[0.1rem]">{s.label}</dt>
            <dd>
              <Counter value={s.value} suffix={s.suffix} />
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
