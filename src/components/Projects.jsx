import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Play, X } from 'lucide-react';
import { projects } from '../data/portfolio.js';
import Button from './ui/Button.jsx';
import Reveal from './ui/Reveal.jsx';
import Section from './ui/Section.jsx';
import { GithubIcon } from './ui/icons.jsx';
import { pastel } from './ui/palette.js';

// YouTube links become an embed; anything else is treated as a video file.
function youtubeId(url) {
  const m = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{11})/);
  return m?.[1];
}

function VideoPlayer({ url, title, autoPlay = false }) {
  const id = youtubeId(url);
  const videoRef = useRef(null);

  // Start with sound (some demos are narrated). The click that opened the dialog usually allows it;
  // if the browser still blocks audible autoplay, fall back to muted so the video at least starts.
  useEffect(() => {
    const v = videoRef.current;
    if (!autoPlay || !v) return;
    v.play().catch(() => {
      v.muted = true;
      v.play().catch(() => {});
    });
  }, [autoPlay]);

  return (
    <div className="aspect-video w-full overflow-hidden rounded-[1.4rem] bg-black">
      {id ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?rel=0${autoPlay ? '&autoplay=1&mute=1' : ''}`}
          title={`${title} demo video`}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowFullScreen
          className="h-full w-full"
        />
      ) : (
        <video ref={videoRef} src={url} controls playsInline preload="metadata" className="h-full w-full">
          Your browser can&rsquo;t play this video.
        </video>
      )}
    </div>
  );
}

// Pastel header art: soft glow + the project's pipeline as little chips.
function Art({ project, index, large = false }) {
  const p = pastel(index);
  return (
    <div className={`relative overflow-hidden rounded-[1.4rem] ${large ? 'h-56 sm:h-64' : 'h-44'}`} style={{ background: p.bg }}>
      <span
        aria-hidden="true"
        className="absolute -right-10 -top-12 h-48 w-48 rounded-full opacity-70 blur-2xl transition-transform duration-700 group-hover:scale-125"
        style={{ background: p.blob }}
      />
      <span className="accent absolute right-5 top-3 text-5xl leading-none" style={{ color: p.ink, opacity: 0.45 }} aria-hidden="true">
        {String(index + 1).padStart(2, '0')}
      </span>
      <ol aria-hidden="true" className="absolute inset-x-5 bottom-5 flex flex-wrap items-center gap-1.5">
        {project.pipeline.map((step, i) => (
          <li key={step} className="flex items-center gap-1.5">
            <span className="rounded-full bg-black/30 px-2.5 py-1 text-[11px] font-semibold" style={{ color: p.ink }}>
              {step}
            </span>
            {i < project.pipeline.length - 1 && <ArrowRight className="h-3 w-3" style={{ color: p.ink }} />}
          </li>
        ))}
      </ol>
    </div>
  );
}

function ProjectDialog({ project, index, focusVideo, onClose }) {
  const closeRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    (focusVideo ? videoRef.current : closeRef.current)?.scrollIntoView({ block: 'nearest' });
    closeRef.current?.focus();
    document.body.style.overflow = 'hidden';
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose, focusVideo]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[80] grid place-items-center overflow-y-auto bg-black/60 p-4 backdrop-blur-md"
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
        className="relative my-8 w-full max-w-2xl rounded-[2rem] border border-white/[0.08] bg-[#15121e] p-3 shadow-2xl shadow-black/60"
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close project"
          className="absolute -right-3 -top-3 z-10 grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-[#15121e] text-ink shadow-lg hover:bg-[#221e2e]"
        >
          <X className="h-5 w-5" />
        </button>
        {project.video ? (
          <div ref={videoRef}>
            <VideoPlayer url={project.video} title={project.title} autoPlay={focusVideo} />
          </div>
        ) : (
          <Art project={project} index={index} large />
        )}
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
              <li key={t} className="rounded-full border border-white/10 px-3 py-1 text-xs font-semibold text-ink/80">
                {t}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={project.github} icon={GithubIcon} external disabledLabel="Code not public yet">
              view on github
            </Button>
            {project.demo && (
              <Button href={project.demo} variant="light" icon={ArrowUpRight} external>
                live demo
              </Button>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

const iconLink =
  'relative z-10 inline-flex h-9 items-center gap-1.5 rounded-full border border-white/10 px-3.5 text-xs font-semibold text-ink transition hover:border-white/25 hover:bg-white/[0.08] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lavender-deep';

export default function Projects() {
  const [open, setOpen] = useState(null); // { index, video }
  const lastOpened = useRef(null);
  const triggerRefs = useRef([]);

  const show = (index, video = false) => {
    lastOpened.current = index;
    setOpen({ index, video });
  };

  const close = useCallback(() => {
    setOpen(null);
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
      intro="AI applications, retrieval systems and engineering projects — open any card for the full story, code and demo."
    >
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <li key={project.title} className="flex">
            <Reveal delay={(i % 3) * 0.08} className="flex w-full">
              {/* The title button stretches over the whole card; the links sit above it. */}
              <article className="glass group relative flex w-full flex-col rounded-[1.75rem] p-2.5 transition-all duration-300 hover:-translate-y-1.5 hover:bg-white/[0.07]">
                <Art project={project} index={i} />
                <div className="flex flex-1 flex-col px-3 pb-3 pt-5">
                  <h3 className="text-lg font-bold leading-snug">
                    <button
                      ref={(el) => (triggerRefs.current[i] = el)}
                      type="button"
                      onClick={() => show(i)}
                      aria-haspopup="dialog"
                      className="text-left after:absolute after:inset-0 after:rounded-[1.75rem] after:content-[''] focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:outline-offset-4 focus-visible:after:outline-lavender-deep"
                    >
                      {project.title}
                    </button>
                  </h3>
                  <p className="mt-1 text-sm text-muted">{project.subtitle}</p>
                  <p className="mt-3 text-xs font-semibold text-muted">{project.tech.slice(0, 3).join(' · ')}</p>
                  <div className="mt-auto flex flex-wrap items-center gap-2 pt-5">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className={iconLink} aria-label={`${project.title} on GitHub`}>
                        <GithubIcon className="h-4 w-4" />
                        code
                      </a>
                    )}
                    {project.video && (
                      <button type="button" onClick={() => show(i, true)} className={iconLink} aria-label={`Play ${project.title} demo video`}>
                        <Play className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
                        {project.videoLabel ?? 'demo'}
                      </button>
                    )}
                    <span className="ml-auto grid h-9 w-9 shrink-0 place-items-center rounded-full bg-ink text-night transition-transform duration-300 group-hover:rotate-45">
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>

      <AnimatePresence>
        {open && <ProjectDialog project={projects[open.index]} index={open.index} focusVideo={open.video} onClose={close} />}
      </AnimatePresence>
    </Section>
  );
}
