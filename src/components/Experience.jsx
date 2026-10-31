import { experience } from '../data/portfolio.js';
import Reveal from './ui/Reveal.jsx';
import Section from './ui/Section.jsx';
import { pastel } from './ui/palette.js';

const initialsOf = (name) =>
  name
    .split(/\s+/)
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="experience"
      title={
        <>
          Where I&rsquo;ve <em className="accent text-lavender-deep">worked</em>
        </>
      }
    >
      <ol className="space-y-5">
        {experience.map((job, i) => {
          const p = pastel(i + 1);
          return (
            <li key={job.company}>
              <Reveal delay={i * 0.08}>
                <article className="glass grid gap-6 rounded-[2rem] p-6 sm:p-9 md:grid-cols-[220px_1fr] md:gap-10">
                  <div className="flex items-center gap-4 md:flex-col md:items-start">
                    {job.logo ? (
                      <span className="grid h-16 min-w-16 shrink-0 place-items-center rounded-2xl bg-white px-3 shadow-sm ring-1 ring-ink/5">
                        <img src={job.logo} alt={`${job.company} logo`} className="max-h-11 w-auto max-w-[150px] object-contain" loading="lazy" />
                      </span>
                    ) : (
                      <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl text-lg font-bold" style={{ background: p.bg, color: p.ink }}>
                        {initialsOf(job.company)}
                      </span>
                    )}
                    <div>
                      <p className="font-bold">{job.company}</p>
                      <p className="mt-0.5 text-sm text-muted">{job.period}</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight">{job.role}</h3>
                    <ul className="mt-4 space-y-2.5 leading-relaxed text-muted">
                      {job.points.map((pt) => (
                        <li key={pt.slice(0, 30)} className="flex gap-3">
                          <span aria-hidden="true" className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: p.ink }} />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                    <ul className="mt-6 flex flex-wrap gap-1.5">
                      {job.tech.map((t) => (
                        <li key={t} className="rounded-full px-3 py-1 text-xs font-semibold" style={{ background: p.bg, color: p.ink }}>
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
