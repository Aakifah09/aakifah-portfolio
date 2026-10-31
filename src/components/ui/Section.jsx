import Wipe from './Wipe.jsx';

// The small zig-zag rule that sits under every Unfold section title.
export function Divider({ className = '' }) {
  return (
    <svg viewBox="0 0 78 6" className={`h-[6px] w-[78px] text-accent ${className}`} aria-hidden="true">
      <path d="M0 5 L6.5 1 L13 5 L19.5 1 L26 5 L32.5 1 L39 5 L45.5 1 L52 5 L58.5 1 L65 5 L71.5 1 L78 5" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export default function Section({ id, title, aside, center = false, children, className = '' }) {
  return (
    <section id={id} className={`scroll-mt-16 py-16 sm:py-24 ${className}`}>
      <div className="mx-auto max-w-[1140px] px-5 sm:px-8">
        <div className={`mb-12 flex flex-wrap items-end gap-4 ${center ? 'flex-col items-center text-center' : 'justify-between'}`}>
          <div className={center ? 'flex flex-col items-center' : ''}>
            <h2 className="text-[32px] font-black leading-tight">
              <Wipe inline>{title}</Wipe>
            </h2>
            <Divider className="mt-4" />
          </div>
          {aside}
        </div>
        {children}
      </div>
    </section>
  );
}
