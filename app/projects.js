import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const GithubMiniIcon = (props) => (
  <svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

// Central project registry. Single source of truth for the /work hub,
// /work/[project] detail pages, and teasers used elsewhere.
export const PROJECTS = [
  {
    slug: 'agentonboard',
    name: 'AgentOnboard',
    tagline: 'Identity for AI agents.',
    status: 'Shipping',
    statusLabel: 'Shipping · Building daily',
    featured: true,
    live: 'https://ao.aawej.in',
    partners: 'https://partners.ao.aawej.in',
    github: null,
    summary:
      'Give every AI agent its own ID card. Services recognize it instantly — no per-service setup, no passwords to share.',
    description:
      'Agents today are anonymous. Every service they touch needs its own credentials, its own setup, its own trust dance. AgentOnboard gives each agent a single identity — one ID card — so any service recognizes it instantly. No per-service onboarding, no passwords shared between systems.',
    highlights: [
      'One ID card for every AI agent — minted once, recognized everywhere',
      'Instant recognition for services: no per-service setup, no passwords to share',
      'Open ecosystem for agents to discover, authenticate with, and operate third-party services on behalf of humans',
      'Partners can go agent-native with a single SDK integration',
    ],
    stack: ['Agent Identity', 'Session Tokens', 'SDK', 'Open Ecosystem'],
    links: [
      { label: 'ao.aawej.in', href: 'https://ao.aawej.in' },
      { label: 'Partners', href: 'https://partners.ao.aawej.in' },
    ],
    story:
      'I kept watching AI agents hit the same wall: every platform wanted its own credentials, its own setup, its own way of saying "prove you are you." So I started building the layer that fixes it — an identity standard for agents themselves. AgentOnboard is live at ao.aawej.in and I ship on it daily.',
  },
  {
    slug: 'rankgeo',
    name: 'RankGeo',
    tagline: 'Generative Engine Optimization.',
    status: 'Shipping',
    statusLabel: 'Shipping',
    featured: false,
    live: 'https://rankgeo.aawej.in',
    github: null,
    summary:
      'Measure, monitor, and improve how ChatGPT, Claude, and Gemini perceive your brand.',
    description:
      'Search is no longer just Google. People ask ChatGPT, Claude, and Gemini — and if your brand isn\u2019t in those answers, it doesn\u2019t exist. RankGeo is a Generative Engine Optimization platform that measures, monitors, and improves how AI engines perceive your brand.',
    highlights: [
      'Track brand visibility across ChatGPT, Claude, and Gemini',
      'Monitor how AI engines perceive your brand over time',
      'Improve your presence with GEO insights',
    ],
    stack: ['GEO', 'AI Search', 'Brand Visibility'],
    links: [{ label: 'rankgeo.aawej.in', href: 'https://rankgeo.aawej.in' }],
    story:
      'RankGeo came out of a simple observation: the answer engines people actually use now are AI models, and most brands have zero visibility there. I built a platform to measure, monitor, and improve that presence.',
  },
  {
    slug: 'openwts',
    name: 'openwts',
    tagline: 'Isolated git worktrees for AI coding agents.',
    status: 'Open Source',
    statusLabel: 'Open Source',
    featured: false,
    live: null,
    github: 'https://github.com/atpaawej/openwts',
    summary:
      'Stop context-switching. Start shipping. Every task gets its own clean git worktree.',
    description:
      'Every interruption used to cost a stash, a panic commit, and 20 minutes of mental reset. openwts kills that tax: one command spins up an isolated git worktree, opens your AI coding agent inside it, and cleans up when you exit. Your main worktree stays untouched.',
    highlights: [
      'One command: worktree → agent → cleanup, zero mental overhead',
      'Agent-agnostic — Claude Code, opencode, and more',
      'Smart cleanup: auto-remove clean worktrees, ask when dirty',
      'Manifest tracking — never touches worktrees it didn\u2019t create',
    ],
    stack: ['TypeScript', 'Git Worktrees', 'CLI', 'Agent Tooling'],
    links: [{ label: 'GitHub', href: 'https://github.com/atpaawej/openwts' }],
    story:
      'I got tired of the context-switch tax — stash, branch, fix, pop, remember what I was doing. So I built openwts: a tiny CLI that wraps git worktrees around AI coding agents. One command, an isolated clean room per task, and it cleans up after itself. 6 commands, fits in your head, that\u2019s the point.',
  },
  {
    slug: 'developer',
    name: 'Developer',
    tagline: 'A terminal AI coding agent with an Ink TUI.',
    status: 'Lab',
    statusLabel: 'Lab · Practice',
    featured: false,
    live: null,
    github: 'https://github.com/atpaawej/Developer',
    summary:
      'My Claude Code clone — a practice project with 500+ LLMs through the Kilo Gateway.',
    description:
      'Developer is a terminal-based AI coding agent with a rich Ink TUI — my own Claude Code-style interface. It taught me the hard parts of agent engineering: streaming, tool systems, session persistence, and a typed event bus decoupling the agent loop from the UI.',
    highlights: [
      'Agent loop: prompt → LLM → streamed response → auto-save',
      'Ink v5 TUI built with React',
      '500+ models via the Kilo Gateway, free tier included',
      'Session persistence, event bus, crash guard, background processes',
    ],
    stack: ['TypeScript', 'Ink', 'React', 'Kilo Gateway', 'TUI'],
    links: [{ label: 'GitHub', href: 'https://github.com/atpaawej/Developer' }],
    story:
      'The best way to understand agent tooling is to build it. Developer is my practice project — a Claude Code-style terminal agent with a rich Ink TUI, wired to 500+ LLMs through the Kilo Gateway. It\u2019s where I learned streaming, tool systems, and what it takes to make an agent loop feel solid.',
  },
];

export const getProject = (slug) => PROJECTS.find((p) => p.slug === slug);

export const FEATURED_PROJECTS = PROJECTS.filter((p) => p.featured);

export function ProjectStatusBadge({ status, className = '' }) {
  const tone =
    status === 'Shipping'
      ? 'product-status'
      : status === 'Open Source'
        ? 'product-status product-status-os'
        : 'product-status product-status-lab';
  return <span className={`${tone} ${className}`}>{status}</span>;
}

export function ProjectLinks({ links }) {
  return (
    <div className="product-meta">
      {links.map((link) => (
        <span key={link.href} className="product-link-chip">
          {link.label}
          <ArrowUpRight width={12} height={12} />
        </span>
      ))}
    </div>
  );
}

export function WorkCard({ project }) {
  return (
    <Link href={`/work/${project.slug}`} className="product-card">
      <div className="product-card-top">
        <h3 className="product-name">{project.name}</h3>
        <ProjectStatusBadge status={project.status} />
      </div>
      <p className="product-desc">{project.summary}</p>
      <div className="product-meta">
        {project.links.map((link) => (
          <span key={link.href} className="product-link-chip">
            {link.label}
            <ArrowUpRight width={12} height={12} />
          </span>
        ))}
        {project.github && (
          <span className="product-link-chip">
            <GithubMiniIcon /> GitHub
          </span>
        )}
      </div>
    </Link>
  );
}
