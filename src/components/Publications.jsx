import { ArrowUpRight, FileText, GraduationCap } from 'lucide-react';
import { education, publications } from '../data/portfolio.js';
import Section from './ui/Section.jsx';
import Wipe from './ui/Wipe.jsx';

// Unfold's journal tiles: a dark cover with title and meta always overlaid at the bottom.
function Tile({ href, kicker, title, meta, icon: Icon, tint }) {
  const Tag = href ? 'a' : 'div';
  return (
    <Tag
      {...(href && { href, target: '_blank', rel: 'noopener noreferrer' })}
      className="group relative block aspect-[4/3] overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
    >
      <div
        className="absolute inset-0 transition-transform duration-300 ease-out group-hover:scale-[1.09]"
        style={{ background: `linear-gradient(150deg, ${tint} 0%, #0c0c0c 75%)` }}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.08]"
          style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '16px 16px' }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
      <Icon className="absolute right-5 top-5 h-5 w-5 text-white" aria-hidden="true" />
      <div className="absolute inset-x-6 bottom-6">
        <p className="font-alt text-[11px] font-bold uppercase tracking-[0.1rem] text-accent">{kicker}</p>
        <h3 className="mt-2 text-lg font-bold leading-snug sm:text-xl">{title}</h3>
        <p className="mt-2 font-alt text-xs text-white/55">{meta}</p>
      </div>
    </Tag>
  );
}

export default function Publications() {
  return (
    <Section id="research" title="Research & Education">
      <ul className="grid gap-7 md:grid-cols-2">
        {publications.map((pub) => (
          <li key={pub.title}>
            <Wipe>
              <Tile
                href={pub.doi ? `https://doi.org/${pub.doi}` : null}
                kicker={pub.type}
                title={pub.title}
                meta={[pub.journal, pub.publisher, pub.date].filter(Boolean).join(' · ')}
                icon={pub.doi ? ArrowUpRight : FileText}
                tint="#4a1520"
              />
            </Wipe>
            <p className="mt-4 text-[15px] text-white/65">{pub.contribution}</p>
          </li>
        ))}
        {education.map((ed) => (
          <li key={ed.degree}>
            <Wipe delay={0.15}>
              <Tile kicker="Education" title={ed.degree} meta={`${ed.school} · ${ed.period}`} icon={GraduationCap} tint="#1d2a44" />
            </Wipe>
          </li>
        ))}
      </ul>
    </Section>
  );
}
