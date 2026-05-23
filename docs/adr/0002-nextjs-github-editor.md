# Use Next.js and GitHub Web Editor for Posting

Status: accepted
Supersedes: ADR-0001

We decided to build the portfolio using Next.js (App Router) instead of Vite to enable Server-Side Rendering (SSR) for superior SEO indexability and ranking. 

Additionally, to keep the site 100% secure from database breaches and admin panel takeovers, we decided to store blog posts as static Markdown files in the Git repository. Instead of a database or CMS dashboard, posts will be authored using the GitHub Web Interface on mobile or desktop, which automatically triggers a deploy on Vercel upon save.
