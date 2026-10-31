import { experience } from '../data/portfolio.js';
import Reveal from './ui/Reveal.jsx';
import Section from './ui/Section.jsx';

const initialsOf = (name) =>
  name
    .split(/\s+/)
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

// Styled after Unfold's testimonial cards: dark panel, crimson offset shadow, round badge overlapping the bottom edge.
export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ul className="grid gap-16 lg:grid-cols-2 lg:gap-10">
        {experience.map((job, i) => (
          <li key={job.company} className="flex">
            <Reveal delay={i * 0.12} className="flex w-full flex-col">
              <div className="relative z-[1] flex-1 bg-panel px-7 pb-16 pt-9 shadow-[0_30px_0_-20px_var(--color-accent)] sm:px-11 sm:pt-11">
                <span aria-hidden="true" className="block font-[Georgia,serif] text-[80px] leading-[0.6] text-white/90">
                  &ldquo;
                </span>
                <ul className="mt-4 space-y-3 text-[15px] leading-[1.75] text-white/80">
                  {job.points.map((p) => (
                    <li key={p.slice(0, 30)} className="flex gap-3">
                      <span aria-hidden="true" className="mt-[0.85em] h-px w-3 shrink-0 bg-accent" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 font-alt text-xs text-white/45">{job.tech.join(' · ')}</p>
              </div>
              <div className="relative z-[2] -mt-[45px] text-center">
                <span className="mx-auto mb-6 grid h-[90px] w-[90px] place-items-center rounded-full border-4 border-black bg-white font-black text-2xl text-black">
                  {initialsOf(job.company)}
                </span>
                <h3 className="text-xl font-bold leading-tight">{job.role}</h3>
                <p className="mt-1 text-xs text-white/50">
                  {job.company} · {job.period}
                </p>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
