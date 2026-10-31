import { useEffect } from 'react';
import { MotionConfig } from 'framer-motion';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Marquee from './components/Marquee.jsx';
import Projects from './components/Projects.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Stats from './components/Stats.jsx';
import Experience from './components/Experience.jsx';
import OngoingResearch from './components/OngoingResearch.jsx';
import Publications from './components/Publications.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

// Dreamy pastel blobs fixed behind the whole page.
function Backdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="blob -left-[18%] -top-[20%] h-[65vw] w-[65vw]" style={{ '--blob': 'var(--color-lavender)' }} />
      <div className="blob -right-[20%] -top-[2%] h-[58vw] w-[58vw]" style={{ '--blob': 'var(--color-peach)', animationDelay: '-7s' }} />
      <div className="blob bottom-[-28%] left-[15%] h-[60vw] w-[60vw] opacity-70" style={{ '--blob': 'var(--color-mint)', animationDelay: '-14s' }} />
      <div className="blob bottom-[0%] -right-[15%] h-[40vw] w-[40vw] opacity-70" style={{ '--blob': 'var(--color-sky)', animationDelay: '-4s' }} />
      {/* fine grain so the gradients feel like paper, not plastic */}
      <div
        className="absolute inset-0 opacity-[0.035] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}

export default function App() {
  // Honour deep links like /#projects — the browser's own jump happens before React renders.
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (id) document.getElementById(id)?.scrollIntoView({ behavior: 'instant' });
  }, []);

  return (
    // Respects the OS "reduce motion" setting for every animation.
    <MotionConfig reducedMotion="user">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-5 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <Backdrop />
      <Navbar />
      <main id="main">
        <Hero />
        <Marquee />
        <Projects />
        <About />
        <Skills />
        <Stats />
        <Experience />
        <OngoingResearch />
        <Publications />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}
