import Reveal from './Reveal.jsx';

// Small rounded label above each section title: "✦ selected work".
export function Eyebrow({ children, className = '' }) {
  return (
    <span className={`glass inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold text-muted ${className}`}>
      <span aria-hidden="true" className="text-lavender-deep">
        ✦
      </span>
      {children}
    </span>
  );
}

/** `title` may contain <em className="accent"> for the serif italic accent word. */
export default function Section({ id, eyebrow, title, intro, children, className = '' }) {
  return (
    <section id={id} className={`scroll-mt-24 py-20 sm:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <h2 className="mt-5 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl">{title}</h2>
          {intro && <p className="mt-5 text-lg leading-relaxed text-muted">{intro}</p>}
        </Reveal>
        <div className="mt-12 sm:mt-14">{children}</div>
      </div>
    </section>
  );
}
