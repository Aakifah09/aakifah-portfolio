const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lavender-deep';

const variants = {
  // solid light pill (primary)
  dark: 'bg-ink text-night shadow-[0_10px_30px_-10px_rgb(185_166_255/0.35)] hover:-translate-y-0.5 hover:bg-white',
  // frosted glass pill (secondary)
  light: 'glass text-ink hover:-translate-y-0.5 hover:bg-white/15',
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
