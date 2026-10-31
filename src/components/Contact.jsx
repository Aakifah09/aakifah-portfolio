import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { profile } from '../data/portfolio.js';
import Reveal from './ui/Reveal.jsx';
import Section from './ui/Section.jsx';

// Unfold's bottom-border-only inputs.
const field =
  'w-full border-0 border-b border-white/50 bg-transparent px-0 py-3 text-white placeholder:text-white/55 focus:border-white focus:outline-none focus:ring-0';

const info = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { label: 'GitHub', value: 'github.com/Aakifah09', href: profile.github, external: true },
  { label: 'LinkedIn', value: 'in/aakifah-minhaj', href: profile.linkedin, external: true },
  { label: 'Based in', value: 'Dubai, United Arab Emirates' },
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
    <Section id="contact" title="Get In Touch">
      <div className="grid gap-14 lg:grid-cols-[7fr_4fr] lg:gap-20">
        <Reveal>
          <p className="mb-8 max-w-xl text-white/75">
            I&rsquo;m looking for internship opportunities in AI/ML, Generative AI, and software engineering. Send a note and it&rsquo;ll open in your email
            app, pre-filled.
          </p>
          <form onSubmit={onSubmit} className="space-y-7">
            <div className="grid gap-7 sm:grid-cols-2">
              <label className="block">
                <span className="sr-only">Name</span>
                <input required name="name" value={form.name} onChange={update} placeholder="Name" autoComplete="name" className={field} />
              </label>
              <label className="block">
                <span className="sr-only">Subject</span>
                <input name="subject" value={form.subject} onChange={update} placeholder="Subject" className={field} />
              </label>
            </div>
            <label className="block">
              <span className="sr-only">Message</span>
              <textarea required name="message" rows={6} value={form.message} onChange={update} placeholder="Write your message..." className={`${field} resize-y`} />
            </label>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full border-2 border-white/50 px-[30px] py-[15px] text-[11px] font-black uppercase tracking-[0.1rem] text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Send Message
            </button>
          </form>
        </Reveal>

        <Reveal delay={0.12}>
          <dl className="space-y-7 text-center sm:text-left">
            {info.map(({ label, value, href, external }) => (
              <div key={label}>
                <dt className="text-[11px] font-black uppercase tracking-[0.1rem] text-white/50">{label}</dt>
                <dd className="mt-1 break-words text-xl">
                  {href ? (
                    <a href={href} {...(external && { target: '_blank', rel: 'noopener noreferrer' })} className="transition-colors hover:text-accent">
                      {value}
                    </a>
                  ) : (
                    value
                  )}
                </dd>
              </div>
            ))}
          </dl>
          <button
            type="button"
            onClick={copyEmail}
            className="mt-8 inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
          >
            {copied ? <Check className="h-4 w-4 text-accent" /> : <Copy className="h-4 w-4" />}
            <span aria-live="polite">{copied ? 'Email copied' : 'Copy email address'}</span>
          </button>
        </Reveal>
      </div>
    </Section>
  );
}
