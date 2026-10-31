const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-[30px] py-[15px] text-[11px] font-black uppercase tracking-[0.1rem] transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent';

const variants = {
  // white outline pill that fills white on hover (Unfold's default button)
  outline: 'border-2 border-white/50 text-white hover:border-white hover:bg-white hover:text-black',
  // solid crimson pill
  accent: 'border-2 border-accent bg-accent text-white hover:border-white hover:bg-white hover:text-black',
};

/** Pill link-button. `href={null}` renders a disabled placeholder with `disabledLabel`. */
export default function Button({ href, variant = 'outline', icon: Icon, external = false, disabledLabel, className = '', children, ...props }) {
  if (!href) {
    return (
      <span aria-disabled="true" className={`${base} cursor-not-allowed border-2 border-dashed border-white/20 text-white/40 ${className}`}>
        {Icon && <Icon className="h-3.5 w-3.5" aria-hidden="true" />}
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
      {Icon && <Icon className="h-3.5 w-3.5" aria-hidden="true" />}
      {children}
    </a>
  );
}
