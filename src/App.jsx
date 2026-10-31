import { useEffect } from 'react';
import { MotionConfig } from 'framer-motion';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import TechStrip from './components/TechStrip.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Stats from './components/Stats.jsx';
import Experience from './components/Experience.jsx';
import Publications from './components/Publications.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

// The template's three vertical guide lines, running the full height of the page.
function GuideLines() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 hidden overflow-hidden md:block">
      <div className="lines-inner absolute inset-y-0 left-1/2 w-[1140px] max-w-[calc(100%-2.5rem)] -translate-x-1/2" />
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
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-accent focus:px-5 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <div className="relative isolate">
        <GuideLines />
        <Navbar />
        <main id="main">
          <Hero />
          <Projects />
          <TechStrip />
          <About />
          <Skills />
          <Stats />
          <Experience />
          <Publications />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}
