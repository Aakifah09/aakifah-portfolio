import Reveal from './ui/Reveal.jsx';

// Unfold's client-logo row, reimagined as the core tools behind the projects.
const tools = ['Python', 'PyTorch', 'LangGraph', 'FastAPI', 'React', 'Docker'];

export default function TechStrip() {
  return (
    <div className="mx-auto max-w-[1140px] px-5 py-6 sm:px-8">
      <ul className="grid grid-cols-2 gap-y-6 sm:grid-cols-3 lg:grid-cols-6">
        {tools.map((tool, i) => (
          <li key={tool}>
            <Reveal delay={i * 0.06} className="text-center font-alt text-xl font-bold tracking-tight text-white/35 transition-colors duration-300 hover:text-white">
              {tool}
            </Reveal>
          </li>
        ))}
      </ul>
    </div>
  );
}
