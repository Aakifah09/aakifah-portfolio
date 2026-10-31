import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, X } from 'lucide-react';
import { projects } from '../data/portfolio.js';
import Button from './ui/Button.jsx';
import Reveal from './ui/Reveal.jsx';
import Section from './ui/Section.jsx';
import { GithubIcon } from './ui/icons.jsx';
import { pastel } from './ui/palette.js';

// Pastel header art: soft blob + the project's pipeline as little chips.
function Art({ project, index, large = false }) {
  const p = pastel(index);
  return (
    <div className={`relative overflow-hidden rounded-[1.4rem] ${large ? 'h-64 sm:h-72' : 'h-44'}`} style={{ background: p.bg }}>
      <span
        aria-hidden="true"
        className="absolute -right-10 -top-12 h-48 w-48 rounded-full blur-2xl transition-transform duration-700 group-hover:scale-125"
        style={{ background: p.blob }}
      />
      <span aria-hidden="true" className="absolute -bottom-16 -left-8 h-40 w-40 rounded-full bg-white/70 blur-2xl" />
      <span className="accent absolute right-5 top-3 text-5xl leading-none" style={{ color: p.ink, opacity: 0.35 }} aria-hidden="true">
        {String(index + 1).padStart(2, '0')}
      </span>
      <ol aria-hidden="true" className="absolute inset-x-5 bottom-5 flex flex-wrap items-center gap-1.5">
        {project.pipeline.map((step, i) => (
          <li key={step} className="flex items-center gap-1.5">
            <span className="rounded-full bg-white/80 px-2.5 py-1 text-[11px] font-semibold" style={{ color: p.ink }}>
              {step}
            </span>
            {i < project.pipeline.length - 1 && <ArrowRight className="h-3 w-3" style={{ color: p.ink }} />}
          </li>
        ))}
      </ol>
    </div>
  );
}

function ProjectDialog({ project, index, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    closeRef.current?.focus();
    document.body.style.overflow = 'hidden';
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[80] grid place-items-center overflow-y-auto bg-ink/25 p-4 backdrop-blur-md"
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-title"
        initial={{ y: 30, opacity: 0, scale: 0.97 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 30, opacity: 0, scale: 0.97 }}
        transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl rounded-[2rem] bg-white p-3 shadow-2xl shadow-lavender-deep/20"
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close project"
          className="absolute left-6 top-6 z-10 grid h-10 w-10 place-items-center rounded-full bg-white/85 text-ink shadow-sm hover:bg-white"
        >
          <X className="h-5 w-5" />
        </button>
        <Art project={project} index={index} large />
        <div className="px-4 pb-5 pt-7 sm:px-7">
          <p className="text-sm font-semibold" style={{ color: pastel(index).ink }}>
            {project.subtitle}
          </p>
          <h3 id="project-title" className="mt-1.5 text-3xl font-bold tracking-tight">
            {project.title}
          </h3>
          <p className="mt-4 leading-relaxed text-muted">{project.description}</p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <li key={t} className="rounded-full border border-ink/10 px-3 py-1 text-xs font-semibold text-ink/80">
                {t}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={project.github} icon={GithubIcon} external disabledLabel="Code not public yet">
              view on github
            </Button>
            <Button href={project.demo} variant="light" icon={ArrowUpRight} external disabledLabel="Demo coming soon">
              live demo
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [openIndex, setOpenIndex] = useState(null);
  const lastOpened = useRef(null);
  const triggerRefs = useRef([]);

  const open = (i) => {
    lastOpened.current = i;
    setOpenIndex(i);
  };

  const close = useCallback(() => {
    setOpenIndex(null);
    // return focus to the card that opened the dialog
    requestAnimationFrame(() => triggerRefs.current[lastOpened.current]?.focus());
  }, []);

  return (
    <Section
      id="projects"
      eyebrow="selected work"
      title={
        <>
          Things I&rsquo;ve <em className="accent text-lavender-deep">built</em>
        </>
      }
      intro="AI applications, retrieval systems and engineering projects — tap any card for the full story."
    >
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <li key={project.title} className="flex">
            <Reveal delay={(i % 3) * 0.08} className="flex w-full">
              <button
                ref={(el) => (triggerRefs.current[i] = el)}
                type="button"
                onClick={() => open(i)}
                aria-haspopup="dialog"
                className="glass group flex w-full flex-col rounded-[1.75rem] p-2.5 text-left transition-all duration-300 hover:-translate-y-1.5 hover:bg-white/90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lavender-deep"
              >
                <Art project={project} index={i} />
                <span className="flex flex-1 flex-col px-3 pb-3 pt-5">
                  <span className="text-lg font-bold leading-snug">{project.title}</span>
                  <span className="mt-1 text-sm text-muted">{project.subtitle}</span>
                  <span className="mt-auto flex items-center justify-between gap-3 pt-5">
                    <span className="text-xs font-semibold text-muted">{project.tech.slice(0, 3).join(' · ')}</span>
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-ink text-white transition-transform duration-300 group-hover:rotate-45">
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </span>
                </span>
              </button>
            </Reveal>
          </li>
        ))}
      </ul>

      <AnimatePresence>
        {openIndex != null && <ProjectDialog project={projects[openIndex]} index={openIndex} onClose={close} />}
      </AnimatePresence>
    </Section>
  );
}
