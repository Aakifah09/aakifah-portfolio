import { motion } from 'framer-motion';
import { ArrowDown, Download, FlaskConical, GraduationCap, MapPin } from 'lucide-react';
import { education, ongoingResearch, profile } from '../data/portfolio.js';
import Button from './ui/Button.jsx';

const ease = [0.21, 0.47, 0.32, 0.98];
const rise = (delay) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease },
});

const firstName = profile.name.split(' ')[0];
const researchName = ongoingResearch[ongoingResearch.length - 1]?.title.split(':')[0];

// Little frosted "sticker" cards floating beside the headline (desktop only).
const floaters = [
  { icon: FlaskConical, label: 'currently researching', value: researchName, tint: 'bg-lavender/60', className: 'right-0 top-6', delay: 0.5 },
  { icon: GraduationCap, label: 'studying at', value: education[0]?.school.split(',')[0], tint: 'bg-mint/70', className: '-left-6 bottom-16', delay: 0.65 },
  { icon: MapPin, label: 'based in', value: 'Dubai, UAE', tint: 'bg-peach/70', className: '-right-4 top-[52%]', delay: 0.8 },
];

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-svh items-center pb-16 pt-32">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.25fr_1fr]">
        <div>
          <motion.p {...rise(0.05)} className="glass inline-flex items-center gap-2.5 rounded-full py-1.5 pl-2 pr-4 text-sm font-medium text-muted">
            <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
              <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400 opacity-60 motion-reduce:animate-none" />
              <span className="relative h-2.5 w-2.5 rounded-full bg-emerald-500" />
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

        {/* floating stickers */}
        <div aria-hidden="true" className="relative hidden h-[440px] lg:block">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease }}
            className="absolute inset-10 rounded-[3rem] bg-gradient-to-br from-lavender via-rose to-peach opacity-70"
          >
            <span className="accent absolute inset-0 grid place-items-center text-[9rem] leading-none text-white/90">
              {profile.name
                .split(' ')
                .map((w) => w[0])
                .join('')}
            </span>
          </motion.div>
          {floaters.map(({ icon: Icon, label, value, tint, className, delay }, i) => (
            <motion.div key={label} {...rise(delay)} className={`absolute ${className}`}>
              <div className="bob glass flex items-center gap-3 rounded-2xl py-3 pl-3 pr-5" style={{ animationDelay: `${i * -2}s` }}>
                <span className={`grid h-10 w-10 place-items-center rounded-xl ${tint}`}>
                  <Icon className="h-5 w-5 text-ink" />
                </span>
                <span>
                  <span className="block text-[11px] font-medium text-muted">{label}</span>
                  <span className="block text-sm font-bold">{value}</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
