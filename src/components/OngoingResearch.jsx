import { ongoingResearch } from '../data/portfolio.js';
import Reveal from './ui/Reveal.jsx';
import Section from './ui/Section.jsx';
import { pastel } from './ui/palette.js';

function StatusPill({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-white/[0.07] px-3.5 py-1 text-xs font-semibold text-ink">
      <span className="relative flex h-2 w-2" aria-hidden="true">
        <span className="absolute inset-0 animate-ping rounded-full bg-amber-400 opacity-75 motion-reduce:animate-none" />
        <span className="relative h-2 w-2 rounded-full bg-amber-500" />
      </span>
      {children}
    </span>
  );
}

// Papers still being written, as large pastel cards.
export default function OngoingResearch() {
  return (
    <Section
      id="research"
      eyebrow="ongoing research"
      title={
        <>
          What I&rsquo;m <em className="accent text-lavender-deep">researching</em> now
        </>
      }
      intro="Two papers in progress on single-cell RNA sequencing — one benchmarking the field, one proposing a new method."
    >
      <ol className="grid gap-6 lg:grid-cols-2">
        {ongoingResearch.map((paper, i) => {
          const p = pastel(i === 0 ? 3 : 0);
          return (
            <li key={paper.title} className="flex">
              <Reveal delay={i * 0.1} className="flex w-full">
                <article className="relative flex w-full flex-col overflow-hidden rounded-[2rem] p-7 sm:p-9" style={{ background: p.bg }}>
                  <span aria-hidden="true" className="absolute -right-16 -top-16 h-56 w-56 rounded-full blur-3xl" style={{ background: p.blob }} />
                  <span aria-hidden="true" className="absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-white/[0.07] blur-3xl" />

                  <div className="relative flex flex-wrap items-center justify-between gap-3">
                    <span className="text-sm font-semibold" style={{ color: p.ink }}>
                      paper {String(i + 1).padStart(2, '0')} · {paper.kind.toLowerCase()}
                    </span>
                    <StatusPill>{paper.status.toLowerCase()}</StatusPill>
                  </div>

                  <h3 className="relative mt-6 text-2xl font-bold leading-snug tracking-tight sm:text-[1.7rem]">{paper.title}</h3>
                  <p className="relative mt-4 flex-1 leading-relaxed text-ink/70">{paper.description}</p>

                  <dl className="relative mt-8 grid grid-cols-3 gap-3">
                    {paper.highlights.map((h) => (
                      <div key={h.label} className="flex flex-col-reverse rounded-2xl bg-white/[0.07] px-3 py-4 text-center">
                        <dt className="mt-1.5 text-xs font-semibold text-muted">{h.label}</dt>
                        <dd className="accent text-3xl leading-none sm:text-4xl" style={{ color: p.ink }}>
                          {h.value}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  <ul className="relative mt-6 flex flex-wrap gap-1.5">
                    {paper.tags.map((t) => (
                      <li key={t} className="rounded-full border border-ink/10 bg-white/[0.07] px-3 py-1 text-xs font-semibold text-ink/75">
                        {t}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
