const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lavender-deep';

const variants = {
  // soft-black pill
  dark: 'bg-ink text-white shadow-[0_10px_30px_-10px_rgb(31_29_43/0.55)] hover:-translate-y-0.5 hover:bg-[#2d2a3e]',
  // frosted white pill
  light: 'glass text-ink hover:-translate-y-0.5 hover:bg-white',
};

/** Pill link-button. `href={null}` renders a disabled placeholder with `disabledLabel`. */
export default function Button({ href, variant = 'dark', icon: Icon, external = false, disabledLabel, className = '', children, ...props }) {
  if (!href) {
    return (
      <span aria-disabled="true" className={`${base} cursor-not-allowed border border-dashed border-ink/15 text-muted ${className}`}>
        {Icon && <Icon className="h-4 w-4" aria-hidden="true" />}
        {disabledLabel || children}
      </span>
    );
  }

  return (
    <a
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
      {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
      {...props}
    >
      {Icon && <Icon className="h-4 w-4" aria-hidden="true" />}
      {children}
    </a>
  );
}
