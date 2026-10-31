import { ArrowUpRight, BookOpen, GraduationCap } from 'lucide-react';
import { education, publications } from '../data/portfolio.js';
import Reveal from './ui/Reveal.jsx';
import Section from './ui/Section.jsx';
import { pastel } from './ui/palette.js';

function Card({ href, kicker, title, meta, note, icon: Icon, tone }) {
  const p = pastel(tone);
  const Tag = href ? 'a' : 'div';
  return (
    <Tag
      {...(href && { href, target: '_blank', rel: 'noopener noreferrer' })}
      className={`glass group flex h-full flex-col rounded-[2rem] p-7 transition-all duration-300 sm:p-8 ${
        href ? 'hover:-translate-y-1 hover:bg-white/[0.1] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lavender-deep' : ''
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <span className="grid h-12 w-12 place-items-center rounded-2xl" style={{ background: p.bg, color: p.ink }}>
          <Icon className="h-6 w-6" aria-hidden="true" />
        </span>
        {href && (
          <span className="grid h-9 w-9 place-items-center rounded-full bg-ink text-night transition-transform duration-300 group-hover:rotate-45">
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </span>
        )}
      </div>
      <p className="mt-6 text-sm font-semibold" style={{ color: p.ink }}>
        {kicker}
      </p>
      <h3 className="mt-2 text-xl font-bold leading-snug">{title}</h3>
      <p className="mt-3 text-sm text-muted">{meta}</p>
      {note && <p className="mt-4 border-t border-ink/10 pt-4 text-sm leading-relaxed text-muted">{note}</p>}
    </Tag>
  );
}

export default function Publications() {
  return (
    <Section
      id="publications"
      eyebrow="publications & education"
      title={
        <>
          Published work &amp; <em className="accent text-lavender-deep">studies</em>
        </>
      }
    >
      <ul className="grid gap-5 md:grid-cols-2">
        {publications.map((pub) => (
          <li key={pub.title}>
            <Reveal className="h-full">
              <Card
                href={pub.doi ? `https://doi.org/${pub.doi}` : null}
                kicker={pub.type}
                title={pub.title}
                meta={[pub.journal, pub.publisher, pub.date].filter(Boolean).join(' · ')}
                note={pub.contribution}
                icon={BookOpen}
                tone={5}
              />
            </Reveal>
          </li>
        ))}
        {education.map((ed) => (
          <li key={ed.degree}>
            <Reveal delay={0.08} className="h-full">
              <Card kicker="Education" title={ed.degree} meta={`${ed.school} · ${ed.period}`} icon={GraduationCap} tone={2} />
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
