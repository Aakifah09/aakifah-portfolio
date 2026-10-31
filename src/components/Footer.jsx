import { profile } from '../data/portfolio.js';
import { Logo } from './Navbar.jsx';

const social = [
  { label: 'GitHub', href: profile.github, external: true },
  { label: 'LinkedIn', href: profile.linkedin, external: true },
  { label: 'Email', href: `mailto:${profile.email}` },
  { label: 'Resume', href: profile.resume, download: profile.resumeDownloadName },
];

export default function Footer() {
  return (
    <footer className="py-16 text-center font-light text-white/50 sm:py-24">
      <a href="#top" aria-label="Back to top" className="text-[30px] text-white">
        <Logo />
      </a>
      <ul className="mx-auto mt-8 flex max-w-xl flex-col items-center sm:flex-row sm:justify-center">
        {social.map(({ label, href, external, download }) => (
          <li key={label}>
            <a
              href={href}
              {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
              {...(download && { download })}
              className="inline-block px-5 py-1 text-xs font-bold uppercase tracking-[0.1rem] text-white/50 transition-colors hover:text-white"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-8 text-sm">
        &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
      </p>
    </footer>
  );
}
