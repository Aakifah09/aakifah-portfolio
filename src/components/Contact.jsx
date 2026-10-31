import { useState } from 'react';
import { ArrowUpRight, Check, Copy, Mail, Send } from 'lucide-react';
import { profile } from '../data/portfolio.js';
import Reveal from './ui/Reveal.jsx';
import { Eyebrow } from './ui/Section.jsx';
import { GithubIcon, LinkedinIcon } from './ui/icons.jsx';

const field =
  'w-full rounded-2xl border border-ink/10 bg-white/80 px-4 py-3.5 text-ink placeholder:text-muted/70 transition focus:border-lavender-deep focus:outline-none focus:ring-4 focus:ring-lavender/40';

const links = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: 'GitHub', value: 'github.com/Aakifah09', href: profile.github, icon: GithubIcon, external: true },
  { label: 'LinkedIn', value: 'in/aakifah-minhaj', href: profile.linkedin, icon: LinkedinIcon, external: true },
];

/*
 * No backend: the form composes a pre-filled email in the visitor's mail app.
 * To receive messages directly instead, point it at a service like Formspree (see README).
 */
export default function Contact() {
  const [form, setForm] = useState({ name: '', subject: '', message: '' });
  const [copied, setCopied] = useState(false);

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    const subject = form.subject || `Hello from ${form.name}`;
    const body = `${form.message}\n\n— ${form.name}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 px-4 py-20 sm:py-28">
      <Reveal>
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#efe9ff] via-[#fdeaf4] to-[#ffeee6] px-6 py-14 sm:px-12 sm:py-16">
          <span aria-hidden="true" className="absolute -left-16 -top-20 h-72 w-72 rounded-full bg-lavender blur-3xl" />
          <span aria-hidden="true" className="absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-peach blur-3xl" />

          <div className="relative grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            <div>
              <Eyebrow>get in touch</Eyebrow>
              <h2 className="mt-5 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl">
                Let&rsquo;s build something <em className="accent text-lavender-deep">together</em>
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink/70">
                I&rsquo;m looking for internship opportunities in AI/ML, Generative AI, and software engineering. Say hi — I&rsquo;d love to hear
                from you.
              </p>

              <ul className="mt-9 space-y-3">
                {links.map(({ label, value, href, icon: Icon, external }) => (
                  <li key={label}>
                    <a
                      href={href}
                      {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
                      className="glass group flex items-center gap-4 rounded-2xl p-3 pr-5 transition hover:bg-white/90"
                    >
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-ink text-white">
                        <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-xs font-medium text-muted">{label}</span>
                        <span className="block truncate font-semibold">{value}</span>
                      </span>
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-muted transition-transform group-hover:rotate-45" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={copyEmail}
                className="mt-4 inline-flex items-center gap-2 px-1 text-sm font-medium text-muted transition-colors hover:text-ink"
              >
                {copied ? <Check className="h-4 w-4 text-emerald-600" /> : <Copy className="h-4 w-4" />}
                <span aria-live="polite">{copied ? 'email copied!' : 'copy email address'}</span>
              </button>
            </div>

            <form onSubmit={onSubmit} className="glass self-start rounded-[2rem] p-6 sm:p-8">
              <p className="text-lg font-bold">Send a note</p>
              <p className="mt-1 text-sm text-muted">Opens in your email app, pre-filled.</p>
              <div className="mt-6 space-y-4">
                <label className="block">
                  <span className="mb-1.5 block text-sm font-semibold">Your name</span>
                  <input required name="name" value={form.name} onChange={update} placeholder="Jane Doe" autoComplete="name" className={field} />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-sm font-semibold">Subject</span>
                  <input name="subject" value={form.subject} onChange={update} placeholder="Internship opportunity" className={field} />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-sm font-semibold">Message</span>
                  <textarea required name="message" rows={5} value={form.message} onChange={update} placeholder="Hi Aakifah, …" className={`${field} resize-y`} />
                </label>
              </div>
              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgb(31_29_43/0.55)] transition hover:-translate-y-0.5 hover:bg-[#2d2a3e] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lavender-deep"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
                send message
              </button>
            </form>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
