import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

export const metadata = {
  title: 'About | Aawej Pathan',
  description:
    'Aawej Pathan is an AI engineer and technical builder — 16 years old, shipping AgentOnboard and RankGeo, building in public.',
};

const JOURNEY = [
  {
    period: 'Started',
    title: 'I started coding to build things that feel alive',
    body: 'Not tutorials. Not assignments. Real things — scripts, tools, experiments that did something. When LLMs exploded, I realized the rules had changed.',
  },
  {
    period: 'Shift',
    title: 'From scripts to agent architectures',
    body: 'The availability of open-source models, API credits, and agent frameworks meant anyone could build production-grade AI systems — from a bedroom. I stopped writing simple Python scripts and started designing environments and tools that let models succeed.',
  },
  {
    period: 'Now',
    title: 'Shipping AgentOnboard, building in public',
    body: 'Today I\u2019m an engineer building cool stuff that excites me. The main build is AgentOnboard — identity for AI agents — live at ao.aawej.in. RankGeo rides alongside, and every commit lands on GitHub.',
  },
];

export default function AboutPage() {
  return (
    <div className="story-page">
      {/* Hero: who I am */}
      <section className="about-hero">
        <div className="about-photo-card">
          <Image
            src="/aawej image.jpg"
            alt="Aawej Pathan"
            fill
            sizes="(max-width: 900px) 100vw, 360px"
            className="about-photo"
            priority
          />
        </div>
        <div className="about-hero-copy">
          <p className="mono-label">About</p>
          <h1 className="page-title">I&apos;m Aawej — an engineer building cool stuff.</h1>
          <p className="page-subtitle">
            16 years old. AI engineer and technical builder. Right now that
            means shipping AgentOnboard, running RankGeo, and releasing what I
            learn as open source.
          </p>
          <div className="hero-actions">
            <Link href="/work" className="btn-primary">
              See my work
              <ArrowUpRight width={14} height={14} />
            </Link>
            <Link href="/connect" className="btn-secondary">
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      {/* Story: how I got here */}
      <section className="story-section">
        <div className="section-header">
          <p className="section-kicker">The story</p>
          <h2 className="section-title">How I got here</h2>
        </div>
        <div className="journey-list">
          {JOURNEY.map((step, i) => (
            <article key={step.title} className="journey-step">
              <span className="journey-index">0{i + 1}</span>
              <div className="journey-body">
                <p className="journey-period mono-label">{step.period}</p>
                <h3 className="journey-title">{step.title}</h3>
                <p className="journey-text">{step.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Philosophy: how I work */}
      <section className="story-section">
        <div className="dark-band about-band">
          <div className="section-header">
            <p className="section-kicker">How I work</p>
            <h2 className="section-title">Build in the open</h2>
          </div>
          <ul className="project-highlights">
            <li>
              <strong>Build what excites me.</strong> Rapid prototyping beats
              endless planning. If it pulls my attention, I ship it.
            </li>
            <li>
              <strong>Document the journey.</strong> Every project and post is
              a record of what worked — and what didn&apos;t.
            </li>
            <li>
              <strong>Open source by default.</strong> Code and learnings land
              on GitHub for anyone to fork, remix, and learn from.
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="story-section">
        <div className="connect-band">
          <div className="section-header">
            <p className="section-kicker">Next</p>
            <h2 className="section-title">Let&apos;s build something</h2>
            <p className="section-desc">
              If you&apos;re building agent systems, want to collaborate, or
              just have a sharp question — reach out.
            </p>
          </div>
          <div className="contact-actions">
            <Link href="/connect" className="btn-primary">
              Get in touch
              <ArrowUpRight width={14} height={14} />
            </Link>
            <Link href="/work" className="btn-secondary">
              See my work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
