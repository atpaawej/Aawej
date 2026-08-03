import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowUpRight, ArrowLeft } from 'lucide-react';
import { PROJECTS, getProject, ProjectStatusBadge } from '@/app/projects';

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ project: project.slug }));
}

export async function generateMetadata({ params }) {
  const { project: slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: 'Project Not Found' };
  return {
    title: `${project.name} | Aawej Pathan`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }) {
  const { project: slug } = await params;
  const project = getProject(slug);

  if (!project) return notFound();

  return (
    <div className="story-page">
      <div className="project-detail">
        <Link href="/work" className="btn-back">
          <ArrowLeft size={14} /> All work
        </Link>

        <header className="project-detail-header">
          <div className="project-detail-top">
            <h1 className="page-title">{project.name}</h1>
            <ProjectStatusBadge status={project.status} />
          </div>
          <p className="project-tagline">{project.tagline}</p>
        </header>

        <div className="project-actions">
          {project.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              {link.label}
              <ArrowUpRight width={14} height={14} />
            </a>
          ))}
        </div>

        <div className="project-story">
          <p>{project.story}</p>
          <p>{project.description}</p>
        </div>

        <div className="dark-band project-band">
          <div className="section-header">
            <p className="section-kicker">Highlights</p>
            <h2 className="section-title">What it does</h2>
          </div>
          <ul className="project-highlights">
            {project.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </div>

        <div className="project-stack">
          <p className="mono-label">Stack</p>
          <div className="stack-chips">
            {project.stack.map((s) => (
              <span key={s} className="stack-chip">
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="project-footer-nav">
          <Link href="/work" className="btn-secondary">
            <ArrowLeft size={14} /> Back to all work
          </Link>
        </div>
      </div>
    </div>
  );
}
