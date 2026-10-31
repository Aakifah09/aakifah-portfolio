import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Link2, X } from 'lucide-react';
import { projects } from '../data/portfolio.js';
import Button from './ui/Button.jsx';
import Section from './ui/Section.jsx';
import Wipe from './ui/Wipe.jsx';
import { GithubIcon } from './ui/icons.jsx';

// Muted tints so each generated cover reads as its own "photo".
const tints = ['#5a1620', '#123a3f', '#4a3512', '#22224d', '#3d1240', '#183d22'];

// Generated cover art: the project's pipeline drawn as a node diagram.
function Cover({ project, index }) {
  const tint = tints[index % tints.length];
  return (
    <div
      className="relative aspect-[4/3] w-full transition-transform duration-300 ease-out group-hover:scale-[1.09] group-focus-visible:scale-[1.09]"
      style={{ background: `linear-gradient(140deg, ${tint} 0%, #0c0c0c 72%)` }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.08]"
        style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '32px 32px' }}
      />
      <ol aria-hidden="true" className="absolute left-7 top-7 space-y-3 sm:left-9 sm:top-9">
        {project.pipeline.map((step, i) => (
          <li key={step} className="relative flex items-center gap-3 font-alt text-[11px] uppercase tracking-[0.14em] text-white/75">
            <span className={`h-2 w-2 shrink-0 rounded-full ${i === project.pipeline.length - 1 ? 'bg-accent' : 'border border-white/60'}`} />
            {step}
            {i < project.pipeline.length - 1 && <span className="absolute left-[3.5px] top-[14px] h-3 w-px bg-white/30" />}
          </li>
        ))}
      </ol>
      <span
        aria-hidden="true"
        className="absolute -bottom-6 right-4 font-alt text-[9rem] font-bold leading-none text-transparent sm:text-[11rem]"
        style={{ WebkitTextStroke: '1px rgb(255 255 255 / 0.14)' }}
      >
        {String(index + 1).padStart(2, '0')}
      </span>
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
      className="fixed inset-0 z-[80] grid place-items-center overflow-y-auto bg-black/85 p-4 backdrop-blur-sm"
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-title"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 40, opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl bg-ink-2 shadow-[0_30px_0_-20px_var(--color-accent)]"
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close project"
          className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-black/60 text-white hover:bg-white hover:text-black"
        >
          <X className="h-5 w-5" />
        </button>
        <div className="overflow-hidden">
          <Cover project={project} index={index} />
        </div>
        <div className="p-7 sm:p-10">
          <p className="font-alt text-xs uppercase tracking-[0.1rem] text-white/50">{project.subtitle}</p>
          <h3 id="project-title" className="mt-2 text-3xl font-black">
            {project.title}
          </h3>
          <p className="mt-5 text-white/75">{project.description}</p>
          <p className="mt-6 font-alt text-[11px] font-bold uppercase tracking-[0.1rem] text-white/50">Built with</p>
          <p className="mt-1 text-white">{project.tech.join(', ')}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={project.github} icon={GithubIcon} external disabledLabel="Code not public yet">
              View on GitHub
            </Button>
            <Button href={project.demo} variant="accent" icon={ArrowUpRight} external disabledLabel="Demo coming soon">
              Live demo
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [openIndex, setOpenIndex] = useState(null);
  const triggerRefs = useRef([]);

  const close = () => {
    const i = openIndex;
    setOpenIndex(null);
    // return focus to the tile that opened the dialog
    requestAnimationFrame(() => triggerRefs.current[i]?.focus());
  };

  return (
    <Section id="projects" title="Projects">
      <ul className="grid gap-6 sm:grid-cols-2 sm:gap-7">
        {projects.map((project, i) => (
          <li key={project.title}>
            <Wipe delay={(i % 2) * 0.15}>
              <button
                ref={(el) => (triggerRefs.current[i] = el)}
                type="button"
                onClick={() => setOpenIndex(i)}
                aria-haspopup="dialog"
                className="group relative block w-full overflow-hidden text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                <Cover project={project} index={i} />
                <span className="tile-overlay absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                  <Link2 className="absolute right-5 top-5 h-5 w-5" aria-hidden="true" />
                  <span className="absolute inset-x-5 bottom-5">
                    <span className="block text-lg font-bold">{project.title}</span>
                    <span className="block font-alt text-xs text-white/50">{project.tech.slice(0, 4).join(', ').toLowerCase()}</span>
                  </span>
                </span>
              </button>
            </Wipe>
          </li>
        ))}
      </ul>

      <AnimatePresence>
        {openIndex != null && <ProjectDialog project={projects[openIndex]} index={openIndex} onClose={close} />}
      </AnimatePresence>
    </Section>
  );
}
