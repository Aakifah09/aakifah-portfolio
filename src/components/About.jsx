import { Download } from 'lucide-react';
import { about, education, profile } from '../data/portfolio.js';
import Button from './ui/Button.jsx';
import Reveal from './ui/Reveal.jsx';
import Section from './ui/Section.jsx';
import { pastel } from './ui/palette.js';

const initials = profile.name
  .split(' ')
  .map((w) => w[0])
  .join('');

// Polaroid-style card standing in for a photo. Swap the gradient block for an <img> to use a real one.
function Polaroid() {
  return (
    <div className="relative mx-auto w-full max-w-[360px]">
      <div className="glass rotate-[-3deg] rounded-[2rem] p-3 pb-6 transition-transform duration-500 hover:rotate-0">
        <div className="relative grid aspect-[4/5] place-items-center overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-lavender via-rose to-peach">
          <span aria-hidden="true" className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-sky blur-2xl" />
          <span aria-hidden="true" className="absolute -bottom-10 right-0 h-40 w-40 rounded-full bg-butter blur-2xl" />
          <span className="accent relative text-[8rem] leading-none text-white">{initials}</span>
        </div>
        <p className="accent mt-4 text-center text-2xl">{profile.name}</p>
      </div>
      <span className="glass absolute -right-3 top-8 rotate-6 rounded-full px-4 py-2 text-sm font-semibold">Dubai ✦</span>
      <span className="glass absolute -left-4 bottom-20 -rotate-6 rounded-full px-4 py-2 text-sm font-semibold">
        {education[0]?.school.split(',')[0]} &rsquo;{education[0]?.period.slice(-2)}
      </span>
    </div>
  );
}

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
      <div className="grid items-center gap-16 lg:grid-cols-[1fr_1.35fr]">
        <Reveal>
          <Polaroid />
        </Reveal>

        <Reveal delay={0.1}>
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
      </div>
    </Section>
  );
}
