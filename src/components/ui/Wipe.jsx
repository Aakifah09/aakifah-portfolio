import { motion } from 'framer-motion';

const ease = [0.77, 0, 0.175, 1];

/**
 * Unfold's signature reveal: a crimson bar sweeps across, and the content
 * appears behind it as the bar exits. Runs once when scrolled into view
 * (or on mount with `immediate`, used by the hero).
 */
export default function Wipe({ children, as, delay = 0, immediate = false, className = '', inline = false }) {
  // Inline wipes live inside headings, so they must stay phrasing content (spans).
  const Tag = motion[as ?? (inline ? 'span' : 'div')];
  const Inner = inline ? motion.span : motion.div;
  const trigger = immediate
    ? { initial: 'hidden', animate: 'shown' }
    : { initial: 'hidden', whileInView: 'shown', viewport: { once: true, margin: '-60px' } };

  return (
    <Tag {...trigger} className={`relative overflow-hidden ${inline ? 'inline-block align-top' : ''} ${className}`}>
      <motion.span
        aria-hidden="true"
        className="absolute inset-0 z-10 bg-accent"
        variants={{
          hidden: { x: '-101%' },
          shown: { x: ['-101%', '0%', '0%', '101%'], transition: { duration: 1.1, times: [0, 0.45, 0.55, 1], ease, delay } },
        }}
      />
      <Inner
        className={inline ? 'inline-block' : ''}
        variants={{
          hidden: { opacity: 0 },
          shown: { opacity: 1, transition: { duration: 0.01, delay: delay + 0.5 } },
        }}
      >
        {children}
      </Inner>
    </Tag>
  );
}
