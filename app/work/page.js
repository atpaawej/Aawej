import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS, FEATURED_PROJECTS, WorkCard, ProjectStatusBadge, ProjectLinks } from '@/app/projects';

export const metadata = {
  title: 'Work | Aawej Pathan',
  description:
    'Projects by Aawej Pathan — AgentOnboard, RankGeo, openwts, and Developer. Live products, open source, and labs.',
};

export default function WorkPage() {
  return (
    <div className="story-page">
      <section className="story-header">
        <p className="mono-label">Project Showcase</p>
        <h1 className="page-title">Work</h1>
        <p className="page-subtitle">
          Live products I&apos;m shipping, open source I&apos;m releasing, and
          the labs where I learn. AgentOnboard is the main build right now.
        </p>
      </section>

      {FEATURED_PROJECTS.length > 0 && (
        <section className="story-section">
          <div className="section-header">
            <h2 className="section-title">Main build</h2>
          </div>
          <div className="product-grid">
            {FEATURED_PROJECTS.map((project) => (
              <WorkCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
      )}

      <section className="story-section">
        <div className="section-header">
          <h2 className="section-title">More projects</h2>
        </div>
        <div className="product-grid">
          {PROJECTS.filter((p) => !p.featured).map((project) => (
            <WorkCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="story-section">
        <div className="connect-band">
          <div className="section-header">
            <p className="section-kicker">Let&apos;s talk</p>
            <h2 className="section-title">Building something similar?</h2>
            <p className="section-desc">
              I&apos;m always up for collaborations and sharp questions.
            </p>
          </div>
          <div className="contact-actions">
            <Link href="/connect" className="btn-primary">
              Get in touch
              <ArrowUpRight width={14} height={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
