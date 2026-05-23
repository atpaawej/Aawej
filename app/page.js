import React from 'react';
import Image from 'next/image';
import EmailButton from './EmailButton';
import LiveGithubCalendar from './GithubCalendar';

// Custom inline SVG icons for brand socials
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

const ArrowUpRight = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

export default function Home() {
  return (
    <div className="about-container">
      <section className="profile-section">
        <div className="profile-grid">
          <div className="profile-photo-wrapper">
            <Image 
              src="/aawej image.jpg" 
              alt="Aawej Pathan" 
              className="profile-photo"
              fill
              priority
              sizes="220px"
            />
          </div>
          <div className="profile-bio">
            <h1 className="bio-title">Aawej Pathan</h1>
            <div className="badge-row">
              <span className="badge">16yo AI Engineer</span>
              <span className="badge badge-accent">Founder</span>
            </div>
            <p className="bio-text">
              Deep in developer mode — architecting intelligent systems, experimenting with new software ideas, and building in public.
            </p>
            <p className="bio-text">
              I am a 16-year-old developer and aspiring founder. After building and pivoting through multiple product concepts, I focus my energy on rapid prototyping and coding what excites me.
            </p>
            <p className="bio-text">
              I build in the open and document my learnings here.
            </p>
            
            <div className="contact-actions">
              <EmailButton />
            </div>
          </div>
        </div>
      </section>

      {/* GitHub Activity Section */}
      <section className="section-block">
        <h2 className="section-title">GitHub Activity</h2>
        <LiveGithubCalendar />
      </section>

      {/* Connect / Social Hub Section */}
      <section className="section-block">
        <h2 className="section-title">Stay Connected</h2>
        <p className="section-desc">
          If you’d like to collaborate, talk about AI systems, or have questions about my work, feel free to reach out.
        </p>
        <div className="social-links-grid">
          <a href="https://x.com/AawejPathan786" target="_blank" rel="noopener noreferrer" className="social-card">
            <TwitterIcon />
            <div className="social-info">
              <span className="social-name">X (Twitter)</span>
              <span className="social-handle">@AawejPathan786</span>
            </div>
            <ArrowUpRight className="arrow-link" />
          </a>
          <a href="https://github.com/pathanaawej0-dot" target="_blank" rel="noopener noreferrer" className="social-card">
            <GithubIcon />
            <div className="social-info">
              <span className="social-name">GitHub</span>
              <span className="social-handle">pathanaawej0-dot</span>
            </div>
            <ArrowUpRight className="arrow-link" />
          </a>
          <a href="https://www.instagram.com/aawej_19/" target="_blank" rel="noopener noreferrer" className="social-card">
            <InstagramIcon />
            <div className="social-info">
              <span className="social-name">Instagram</span>
              <span className="social-handle">@aawej_19</span>
            </div>
            <ArrowUpRight className="arrow-link" />
          </a>
        </div>
      </section>
    </div>
  );
}
