import React from 'react';
import { Mail, Copy, ArrowUpRight } from 'lucide-react';
import EmailButton from '@/app/EmailButton';

const TwitterIcon = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const SOCIALS = [
  {
    name: 'X',
    handle: '@AawejPathan786',
    href: 'https://x.com/AawejPathan786',
    Icon: TwitterIcon,
  },
  {
    name: 'GitHub',
    handle: 'atpaawej',
    href: 'https://github.com/atpaawej',
    Icon: GithubIcon,
  },
  {
    name: 'Instagram',
    handle: '@aawej_19',
    href: 'https://www.instagram.com/aawej_19/',
    Icon: InstagramIcon,
  },
];

export const metadata = {
  title: 'Connect | Aawej Pathan',
  description:
    'Get in touch with Aawej Pathan. Collaborations, questions about my work, or just to say hi.',
};

export default function ConnectPage() {
  return (
    <div className="story-page">
      <section className="story-header">
        <p className="mono-label">Social Hub</p>
        <h1 className="page-title">Connect</h1>
        <p className="page-subtitle">
          Collaborations, questions about my work, or just to say hi — I read
          everything that lands in my inbox.
        </p>
      </section>

      <div className="connect-layout">
        <div className="connect-band">
          <div className="section-header">
            <p className="section-kicker">Email</p>
            <h2 className="section-title">Send me a message</h2>
            <p className="section-desc">
              Fill this in and your mail app opens with everything pre-filled.
              Or copy the address directly.
            </p>
          </div>

          <ContactForm />

          <div className="contact-actions">
            <EmailButton />
          </div>
        </div>

        <div className="socials-column">
          <div className="section-header">
            <p className="section-kicker">Elsewhere</p>
            <h2 className="section-title">Find me</h2>
          </div>
          <div className="social-links-grid socials-single">
            {SOCIALS.map(({ name, handle, href, Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-card"
              >
                <Icon />
                <div className="social-info">
                  <span className="social-name">{name}</span>
                  <span className="social-handle">{handle}</span>
                </div>
                <ArrowUpRight className="arrow-link" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactForm() {
  return (
    <form
      className="contact-form"
      action="mailto:pathanaawej0@gmail.com"
      method="post"
      encType="text/plain"
    >
      <div className="form-row">
        <label className="form-field">
          <span className="form-label">Your name</span>
          <input type="text" name="name" required placeholder="Ada Lovelace" />
        </label>
        <label className="form-field">
          <span className="form-label">Your email</span>
          <input type="email" name="email" required placeholder="you@example.com" />
        </label>
      </div>
      <label className="form-field">
        <span className="form-label">Subject</span>
        <input
          type="text"
          name="subject"
          required
          defaultValue="Message from aawej.in"
          placeholder="What's this about?"
        />
      </label>
      <label className="form-field">
        <span className="form-label">Message</span>
        <textarea name="body" required rows={5} placeholder="Tell me what you're building..." />
      </label>
      <button type="submit" className="btn-primary">
        <Mail size={16} /> Compose email
        <ArrowUpRight width={14} height={14} />
      </button>
    </form>
  );
}
