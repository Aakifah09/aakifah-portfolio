import { Download } from 'lucide-react';
import { about, education, ongoingResearch, profile, publications } from '../data/portfolio.js';
import Button from './ui/Button.jsx';
import Reveal from './ui/Reveal.jsx';
import Section from './ui/Section.jsx';
import { pastel } from './ui/palette.js';

const facts = [
  { label: 'Studying', value: `${education[0]?.degree}`, sub: `${education[0]?.school} · ${education[0]?.period}` },
  { label: 'Based in', value: 'Dubai, United Arab Emirates' },
  { label: 'Focus', value: 'AI/ML, Generative AI & full-stack development' },
  {
    label: 'Research',
    value: `${publications.length} published paper${publications.length === 1 ? '' : 's'}`,
    sub: `+ ${ongoingResearch.length} in progress on single-cell RNA-seq`,
  },
  { label: 'Status', value: 'Open to internships', live: true },
];

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="about me"
      title={
        <>
          A little bit <em className="accent text-lavender-deep">about me</em>
        </>
      }
    >
      <div className="grid items-start gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <Reveal>
          <div className="space-y-5 text-lg leading-relaxed text-muted">
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>

          <p className="mt-9 text-sm font-semibold text-ink">things I love exploring</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {about.interests.map(({ label }, i) => (
              <li key={label} className="rounded-full px-4 py-2 text-sm font-semibold" style={{ background: pastel(i).bg, color: pastel(i).ink }}>
                {label}
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <Button href={profile.resume} download={profile.resumeDownloadName} icon={Download}>
              download my cv
            </Button>
          </div>
        </Reveal>

        {/* quick facts card */}
        <Reveal delay={0.1}>
          <dl className="glass divide-y divide-white/[0.07] rounded-[2rem] px-7 py-3">
            {facts.map(({ label, value, sub, live }) => (
              <div key={label} className="py-5">
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-lavender-deep">{label}</dt>
                <dd className="mt-1.5 flex items-center gap-2 font-semibold">
                  {live && (
                    <span className="relative flex h-2 w-2" aria-hidden="true">
                      <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400 opacity-60 motion-reduce:animate-none" />
                      <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
                    </span>
                  )}
                  {value}
                </dd>
                {sub && <dd className="mt-0.5 text-sm text-muted">{sub}</dd>}
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
