import { skills } from '../data/portfolio.js';
import { pastel } from './ui/palette.js';

// Endless strip of every tool from portfolio.js, as soft pastel pills.
const tools = skills.flatMap((s) => s.items);

export default function Marquee() {
  return (
    <div className="marquee-mask overflow-hidden py-6" aria-label="Tools I work with">
      <ul className="marquee flex w-max gap-3">
        {[...tools, ...tools].map((tool, i) => (
          <li
            key={i}
            aria-hidden={i >= tools.length ? 'true' : undefined}
            className="whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-semibold"
            style={{ background: pastel(i).bg, color: pastel(i).ink }}
          >
            {tool}
          </li>
        ))}
      </ul>
    </div>
  );
}
