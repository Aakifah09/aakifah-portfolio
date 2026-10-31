import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { navLinks, profile } from '../data/portfolio.js';
import { useActiveSection } from '../hooks/useActiveSection.js';

const sectionIds = navLinks.map((l) => l.id);
const half = Math.ceil(navLinks.length / 2);
const firstName = profile.name.split(' ')[0];

export function Logo({ className = '' }) {
  return (
    <span className={`font-black ${className}`}>
      {firstName}
      <span className="text-accent">.</span>
    </span>
  );
}

function NavList({ links, active, dark }) {
  return (
    <ul className="flex items-center">
      {links.map((link) => (
        <li key={link.id}>
          <a
            href={`#${link.id}`}
            aria-current={active === link.id ? 'true' : undefined}
            className={`nav-underline block px-[0.45rem] py-2.5 text-sm font-normal transition-colors ${
              dark ? 'text-black/70 hover:text-black aria-[current=true]:text-black' : 'text-white/80 hover:text-white aria-[current=true]:text-white'
            }`}
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    // Swap to the solid white bar once the hero is mostly scrolled past.
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <>
      <header
        className={`inset-x-0 top-0 z-50 transition-[padding,background-color,box-shadow] duration-300 ${
          scrolled ? 'nav-drop fixed bg-white py-1.5 shadow-[0_0_10px_rgba(0,0,0,0.1)]' : 'absolute py-7'
        }`}
      >
        <nav className="relative mx-auto flex h-12 max-w-[1140px] items-center justify-end px-5 sm:px-8 lg:justify-between" aria-label="Primary">
          <div className="hidden w-[38%] justify-end lg:flex">
            <NavList links={navLinks.slice(0, half)} active={active} dark={scrolled} />
          </div>

          <a
            href="#top"
            aria-label={`${profile.name} — back to top`}
            className={`absolute left-1/2 -translate-x-1/2 text-[1.7rem] transition-colors ${scrolled ? 'text-black' : 'text-white'}`}
          >
            <Logo />
          </a>

          <div className="hidden w-[38%] justify-start lg:flex">
            <NavList links={navLinks.slice(half)} active={active} dark={scrolled} />
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className={`text-sm font-normal lg:hidden ${scrolled ? 'text-black' : 'text-white'}`}
          >
            Menu
          </button>
        </nav>
      </header>

      {/* Off-canvas menu (mobile) */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="scrim"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[60] bg-black/50"
            />
            <motion.nav
              key="panel"
              id="mobile-menu"
              aria-label="Mobile"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.35, ease: [0.77, 0, 0.175, 1] }}
              className="fixed inset-y-0 right-0 z-[70] flex w-[300px] max-w-[85vw] flex-col bg-ink-2 px-8 py-7"
            >
              <button type="button" onClick={() => setOpen(false)} className="ml-auto flex items-center gap-3 text-sm text-white/80 hover:text-white">
                Close
                <span aria-hidden="true" className="relative h-5 w-5">
                  <span className="absolute left-0 top-1/2 h-0.5 w-5 rotate-45 bg-white" />
                  <span className="absolute left-0 top-1/2 h-0.5 w-5 -rotate-45 bg-white" />
                </span>
              </button>
              <a href="#top" onClick={() => setOpen(false)} className="mt-10 text-3xl">
                <Logo />
              </a>
              <ul className="mt-8 space-y-1">
                {navLinks.map((link, i) => (
                  <motion.li key={link.id} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 + i * 0.05 }}>
                    <a
                      href={`#${link.id}`}
                      onClick={() => setOpen(false)}
                      className={`block py-2 text-lg ${active === link.id ? 'font-bold text-white' : 'text-white/60 hover:text-white'}`}
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
