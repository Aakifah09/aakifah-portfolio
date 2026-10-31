import { ArrowUp } from 'lucide-react';
import { profile } from '../data/portfolio.js';
import { Logo } from './Navbar.jsx';

const social = [
  { label: 'github', href: profile.github, external: true },
  { label: 'linkedin', href: profile.linkedin, external: true },
  { label: 'email', href: `mailto:${profile.email}` },
  { label: 'resume', href: profile.resume, download: profile.resumeDownloadName },
];

export default function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-5 pb-10 sm:px-8">
      <div className="flex flex-col items-center justify-between gap-6 border-t border-ink/10 pt-8 sm:flex-row">
        <a href="#top" aria-label="Back to top" className="text-2xl">
          <Logo />
        </a>
        <ul className="flex flex-wrap justify-center gap-1">
          {social.map(({ label, href, external, download }) => (
            <li key={label}>
              <a
                href={href}
                {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
                {...(download && { download })}
                className="rounded-full px-3.5 py-2 text-sm font-medium text-muted transition-colors hover:bg-white/70 hover:text-ink"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#top" className="glass inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold hover:bg-white">
          <ArrowUp className="h-4 w-4" aria-hidden="true" />
          back to top
        </a>
      </div>
      <p className="mt-8 text-center text-sm text-muted">
        &copy; {new Date().getFullYear()} {profile.name} · made with <span className="text-lavender-deep">♥</span> in Dubai
      </p>
    </footer>
  );
}
