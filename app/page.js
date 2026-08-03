import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import EmailButton from './EmailButton';
import LiveGithubCalendar from './GithubCalendar';import { getSortedPostsData } from '@/lib/posts';
import { FEATURED_PROJECTS, WorkCard } from '@/app/projects';

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

function formatDate(dateStr) {
  return String(dateStr) && typeof dateStr === 'string'
    ? new Date(dateStr).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
    : '';
}

export default function Home() {
  const recentPosts = getSortedPostsData().slice(0, 3);
  const featured = FEATURED_PROJECTS;

  return (
    <div className="home-story">
      {/* 1. Hook — who + what, in one breath */}
      <section className="hero-section" aria-label="Introduction">
        <div className="hero-copy">
          <p className="mono-label">AI Engineer · Builder</p>
          <h1 className="hero-title">Building things that excite me.</h1>
          <p className="hero-lead">
            I&apos;m Aawej Pathan — a technical builder. Right now that means
            shipping <strong>AgentOnboard</strong>, identity for AI agents.
          </p>
          <div className="hero-actions">
            <Link href="/work" className="btn-primary">
              See what I&apos;m building
            </Link>
            <Link href="/about" className="btn-secondary">
              About me
            </Link>
          </div>
        </div>

        <div className="hero-media">
          <div className="hero-photo-card">
            <Image
              src="/aawej image.jpg"
              alt="Aawej Pathan"
              className="hero-photo"
              fill
              priority
              sizes="(max-width: 900px) 90vw, 420px"
            />
            <div className="hero-status-chip">
              <span className="hero-status-dot" aria-hidden="true" />
              Shipping AgentOnboard
            </div>
          </div>
        </div>
      </section>

      {/* 2. Currently building — the spine of the story, AgentOnboard first */}
      <section id="building" className="story-section">
        <div className="section-header">
          <p className="section-kicker">Project Showcase</p>
          <h2 className="section-title">Currently building</h2>
          <p className="section-desc">
            Live products I&apos;m shipping right now — not a graveyard of
            tutorials. AgentOnboard is the main build.
          </p>
        </div>

        <div className="product-grid">
          {featured.map((project) => (
            <WorkCard key={project.slug} project={project} />
          ))}
        </div>

        <div className="section-footer-link">
          <Link href="/work" className="btn-secondary">
            See all work
            <ArrowUpRight width={14} height={14} />
          </Link>
        </div>
      </section>

      {/* 3. Proof of work */}
      <section className="story-section" aria-label="GitHub activity">
        <div className="dark-band">
          <div className="section-header">
            <p className="section-kicker">Proof of work</p>
            <h2 className="section-title">Built in the open</h2>
            <p className="section-desc">
              Commits land on GitHub. The graph is the receipt.
            </p>
          </div>
          <LiveGithubCalendar />
        </div>
      </section>

      {/* 4. Thinking — writing reinforces the story */}
      {recentPosts.length > 0 && (
        <section className="story-section" aria-label="Latest writing">
          <div className="section-header">
            <p className="section-kicker">Writing</p>
            <h2 className="section-title">Notes from the lab</h2>
            <p className="section-desc">
              Short essays on agents, tooling, and what I learn while shipping.
            </p>
          </div>

          <div className="writing-list">
            {recentPosts.map((post) => (
              <Link key={post.id} href={`/posts/${post.id}`} className="writing-row">
                <div>
                  <h3 className="writing-row-title">{post.title}</h3>
                  {post.summary && (
                    <p className="writing-row-summary">{post.summary}</p>
                  )}
                </div>
                <time className="writing-row-date" dateTime={post.date}>
                  {formatDate(post.date)}
                </time>
              </Link>
            ))}
          </div>

          <div className="section-footer-link">
            <Link href="/posts" className="btn-secondary">
              All writing
              <ArrowUpRight width={14} height={14} />
            </Link>
          </div>
        </section>
      )}

      {/* 5. Connect — clear end of the story */}
      <section id="connect" className="story-section">
        <div className="connect-band">
          <div className="section-header">
            <p className="section-kicker">Social Hub</p>
            <h2 className="section-title">Let&apos;s build something</h2>
            <p className="section-desc">
              Collaborations, agent systems, or just a sharp question — reach out.
            </p>
          </div>

          <div className="contact-actions">
            <Link href="/connect" className="btn-primary">
              Get in touch
              <ArrowUpRight width={14} height={14} />
            </Link>
            <EmailButton />
          </div>

          <div className="social-links-grid">
            <a
              href="https://x.com/AawejPathan786"
              target="_blank"
              rel="noopener noreferrer"
              className="social-card"
            >
              <TwitterIcon />
              <div className="social-info">
                <span className="social-name">X</span>
                <span className="social-handle">@AawejPathan786</span>
              </div>
              <ArrowUpRight className="arrow-link" />
            </a>
            <a
              href="https://github.com/atpaawej"
              target="_blank"
              rel="noopener noreferrer"
              className="social-card"
            >
              <GithubIcon />
              <div className="social-info">
                <span className="social-name">GitHub</span>
                <span className="social-handle">atpaawej</span>
              </div>
              <ArrowUpRight className="arrow-link" />
            </a>
            <a
              href="https://www.instagram.com/aawej_19/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-card"
            >
              <InstagramIcon />
              <div className="social-info">
                <span className="social-name">Instagram</span>
                <span className="social-handle">@aawej_19</span>
              </div>
              <ArrowUpRight className="arrow-link" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}