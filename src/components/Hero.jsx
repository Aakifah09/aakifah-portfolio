import { motion, useScroll, useTransform } from 'framer-motion';
import { profile } from '../data/portfolio.js';
import Wipe from './ui/Wipe.jsx';

export default function Hero() {
  // Slow parallax drift on the backdrop, like the template's jarallax cover.
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 240]);

  return (
    <section id="top" className="relative isolate flex h-svh min-h-[650px] items-center overflow-hidden">
      <motion.div aria-hidden="true" style={{ y }} className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,#2a2a2a_0%,#0d0d0d_55%,#000_100%)]" />
        <div className="absolute left-1/2 top-[38%] h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '22px 22px' }}
        />
      </motion.div>
      {/* fade to black at the bottom, like Unfold's .gradient-bottom-black */}
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-1/4 bg-gradient-to-b from-transparent to-black" />

      <div className="mx-auto w-full max-w-[760px] px-5 text-center">
        <h1 className="text-5xl font-black leading-[1.1] sm:text-6xl lg:text-[5rem]">
          <Wipe inline immediate delay={0.2}>
            {profile.name}
          </Wipe>
        </h1>
        <p className="mt-5 text-2xl font-light leading-snug text-white sm:text-[33px] sm:leading-[1.35]">
          <Wipe inline immediate delay={0.45}>
            I&rsquo;m an AI/ML Developer &amp; Software Engineer
          </Wipe>{' '}
          <Wipe inline immediate delay={0.6}>
            Building Intelligent Apps From Dubai
          </Wipe>
        </p>
      </div>

      <a
        href="#projects"
        className="absolute bottom-[50px] left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 focus-visible:outline-none"
        aria-label="Scroll to projects"
      >
        <motion.span
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="block h-[42px] w-[22px] rounded-[15px] border-2 border-white"
        >
          <span className="mouse-scroll mx-auto mt-1.5 block h-[3px] w-[3px] rounded bg-white" />
        </motion.span>
        <span className="text-[10px] font-bold uppercase tracking-[0.05rem]">Scroll</span>
      </a>
    </section>
  );
}
