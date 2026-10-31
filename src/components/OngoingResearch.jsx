import { ongoingResearch } from '../data/portfolio.js';
import Reveal from './ui/Reveal.jsx';
import Section from './ui/Section.jsx';

function StatusPill({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-accent/60 px-3 py-0.5 text-[10px] font-black uppercase tracking-[0.12em] text-white">
      <span className="relative flex h-2 w-2" aria-hidden="true">
        <span className="absolute inset-0 animate-ping rounded-full bg-accent opacity-75 motion-reduce:animate-none" />
        <span className="relative h-2 w-2 rounded-full bg-accent" />
      </span>
      {children}
    </span>
  );
}

// Papers still being written: dark panels with Unfold's crimson offset edge and counter-style highlights.
export default function OngoingResearch() {
  return (
    <Section id="research" title="Ongoing Research">
      <ol className="grid gap-14 lg:grid-cols-2 lg:gap-10">
        {ongoingResearch.map((paper, i) => (
          <li key={paper.title} className="flex">
            <Reveal delay={i * 0.12} className="flex w-full">
              <article className="flex w-full flex-col bg-panel p-7 shadow-[0_30px_0_-20px_var(--color-accent)] sm:p-10">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="font-alt text-[11px] font-bold uppercase tracking-[0.1rem] text-white/50">
                    Paper {String(i + 1).padStart(2, '0')} · {paper.kind}
                  </span>
                  <StatusPill>{paper.status}</StatusPill>
                </div>

                <h3 className="mt-5 text-[24px] font-black leading-snug sm:text-[26px]">{paper.title}</h3>
                <p className="mt-4 flex-1 text-[15px] leading-[1.8] text-white/75">{paper.description}</p>

                <dl className="mt-8 grid grid-cols-3 gap-4 border-y border-white/10 py-6 text-center">
                  {paper.highlights.map((h) => (
                    <div key={h.label} className="flex flex-col-reverse">
                      <dt className="mt-2 text-[10px] font-black uppercase tracking-[0.1rem] text-white/70">{h.label}</dt>
                      <dd className="font-alt text-3xl font-bold leading-none text-accent sm:text-4xl">{h.value}</dd>
                    </div>
                  ))}
                </dl>

                <p className="mt-6 font-alt text-xs text-white/45">{paper.tags.join(' · ')}</p>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
