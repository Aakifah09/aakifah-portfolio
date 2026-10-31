import { motion } from 'framer-motion';
import { ArrowDown, BookOpen, Download, FlaskConical, GraduationCap, MapPin } from 'lucide-react';
import { education, ongoingResearch, profile, publications } from '../data/portfolio.js';
import Button from './ui/Button.jsx';
import { pastel } from './ui/palette.js';

const ease = [0.21, 0.47, 0.32, 0.98];
const rise = (delay) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease },
});

const firstName = profile.name.split(' ')[0];
const researchName = ongoingResearch[ongoingResearch.length - 1]?.title.split(':')[0];

// Staggered stack of frosted "sticker" cards beside the headline (desktop only).
const floaters = [
  { icon: FlaskConical, label: 'currently researching', value: researchName, tone: 0, offset: 'ml-16' },
  { icon: BookOpen, label: 'published in', value: publications[0]?.journal, tone: 5, offset: 'ml-0' },
  { icon: GraduationCap, label: 'studying at', value: education[0]?.school.split(',')[0], tone: 2, offset: 'ml-24' },
  { icon: MapPin, label: 'based in', value: 'Dubai, UAE', tone: 1, offset: 'ml-8' },
];

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-svh items-center pb-16 pt-32">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.35fr_1fr]">
        <div>
          <motion.p {...rise(0.05)} className="glass inline-flex items-center gap-2.5 rounded-full py-1.5 pl-2 pr-4 text-sm font-medium text-muted">
            <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
              <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400 opacity-60 motion-reduce:animate-none" />
              <span className="relative h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>
            open to internships
          </motion.p>

          <motion.p {...rise(0.12)} className="mt-8 text-lg font-medium text-muted">
            hi, i&rsquo;m {firstName} <span className="text-lavender-deep">✦</span>
          </motion.p>
          <motion.h1 {...rise(0.2)} className="mt-3 text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            I build <em className="accent text-lavender-deep">intelligent</em> software that feels <em className="accent">human.</em>
          </motion.h1>
          <motion.p {...rise(0.3)} className="mt-7 max-w-xl text-lg leading-relaxed text-muted">
            {profile.roles[0]} and CS undergrad working where models meet real software &mdash; LLM apps, RAG pipelines, agentic
            workflows and single-cell research.
          </motion.p>

          <motion.div {...rise(0.4)} className="mt-10 flex flex-wrap gap-3">
            <Button href="#projects" icon={ArrowDown}>
              see my work
            </Button>
            <Button href={profile.resume} download={profile.resumeDownloadName} variant="light" icon={Download}>
              download cv
            </Button>
          </motion.div>
        </div>

        <ul aria-hidden="true" className="hidden space-y-4 lg:block">
          {floaters.map(({ icon: Icon, label, value, tone, offset }, i) => (
            <motion.li key={label} {...rise(0.45 + i * 0.12)} className={offset}>
              <div className="bob glass inline-flex items-center gap-3.5 rounded-2xl py-3.5 pl-3.5 pr-6" style={{ animationDelay: `${i * -1.5}s` }}>
                <span className="grid h-11 w-11 place-items-center rounded-xl" style={{ background: pastel(tone).bg, color: pastel(tone).ink }}>
                  <Icon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs font-medium text-muted">{label}</span>
                  <span className="block font-bold">{value}</span>
                </span>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
