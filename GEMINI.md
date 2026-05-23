# GEMINI.md — AI Developer Guidelines

Welcome to the Aawej Pathan Portfolio codebase. This document outlines the project architecture, design rules, and constraints to guide future AI coding sessions on this repository.

---

## 🛠️ Tech Stack & Architecture

- **Framework**: Next.js 16 (App Router, JavaScript)
- **Styling**: Vanilla CSS (`app/globals.css`). **Avoid adding utility CSS frameworks like Tailwind unless requested.**
- **Blogging**: Zero-database, file-based blog system.
- **Dynamic Features**: `react-github-calendar` to fetch live contributions for GitHub profile `pathanaawej0-dot`.

### Dynamic Route Requirements (Next.js 16/React 19)
- **Awaiting Params**: All dynamic page files (e.g., `app/posts/[slug]/page.js`) **must await the `params` prop** before destructuring.
  ```javascript
  export default async function PostPage({ params }) {
    const { slug } = await params;
    // ...
  }
  ```
- **Static Pre-rendering**: Dynamic routes must export `generateStaticParams()` to pre-compile markdown posts into static HTML for maximum SEO and performance.

---

## 🎨 Design System & Aesthetics

- **Inspiration**: `steipete.me` (Peter Steinberger).
- **Core Aesthetic**: Minimalist technical dark/light mode using `JetBrains Mono` as the primary monospaced font.
- **Accents**: Warm orange (`#f6ad55` in dark mode, `#dd6b20` in light mode).
- **Active Navigation Indicator**: Wavy orange underlines under active links (`Posts`, `About`).

---

## ✍️ Content & Writing

Blog posts are stored in `content/posts/` as Markdown (`.md`) files with YAML frontmatter.

### Schema:
```markdown
---
title: "Title of Your Post"
date: "YYYY-MM-DD"
summary: "1-sentence summary of the post."
---
Markdown content body...
```

### Publishing Flow:
- **Direct GitHub Editing**: Aawej can write, update, or delete posts directly on GitHub.com via their browser (mobile or desktop). Commit updates trigger auto-deploys.
- **Local Commits**: Git pushes from local editor also trigger Vercel auto-deploys.
