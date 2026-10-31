import { Download } from 'lucide-react';
import { about, education, profile } from '../data/portfolio.js';
import Button from './ui/Button.jsx';
import Reveal from './ui/Reveal.jsx';
import Section from './ui/Section.jsx';
import Wipe from './ui/Wipe.jsx';

const initials = profile.name
  .split(' ')
  .map((w) => w[0])
  .join('');

// Stands in for the template's portrait photo. Drop a real photo in /public and swap this for an <img> if you like.
function Portrait() {
  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden bg-[linear-gradient(160deg,#2b2b2b_0%,#0e0e0e_70%)]">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.08]"
        style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '18px 18px' }}
      />
      <span
        aria-hidden="true"
        className="absolute inset-0 grid place-items-center font-black text-[9rem] leading-none text-transparent sm:text-[11rem]"
        style={{ WebkitTextStroke: '2px rgb(255 255 255 / 0.85)' }}
      >
        {initials}
      </span>
      <span className="absolute bottom-6 left-6 font-alt text-[11px] font-bold uppercase tracking-[0.1rem] text-white/60">
        Dubai · {education[0].school.split(',')[0]}
      </span>
      <span aria-hidden="true" className="absolute bottom-0 left-0 h-1.5 w-1/3 bg-accent" />
    </div>
  );
}

export default function About() {
  return (
    <Section id="about" title="About Me">
      <div className="grid items-center gap-12 lg:grid-cols-[5fr_7fr] lg:gap-16">
        <Wipe className="mx-auto w-full max-w-[420px]">
          <Portrait />
        </Wipe>

        <Reveal>
          <h3 className="text-[26px] font-black leading-snug">
            Computer Science undergraduate building where models meet real software.
          </h3>
          <div className="mt-6 space-y-5 text-white/75">
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>

          <p className="mt-8 font-alt text-[11px] font-bold uppercase tracking-[0.1rem] text-white/50">Interested in</p>
          <ul className="mt-3 grid gap-x-6 gap-y-1 sm:grid-cols-2">
            {about.interests.map(({ label }) => (
              <li key={label} className="flex items-center gap-3 text-[15px]">
                <span aria-hidden="true" className="h-px w-4 bg-accent" />
                {label}
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <Button href={profile.resume} download={profile.resumeDownloadName} icon={Download}>
              Download my CV
            </Button>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
