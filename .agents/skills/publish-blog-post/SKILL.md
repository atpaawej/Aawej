---
name: publish-blog-post
description: Facilitates a Q&A session with the user to compose and publish a new blog post. Prompts the user for a draft, crafts content when requested, formats correct YAML frontmatter, runs local preview checks, and pushes the new Markdown file directly to content/posts/ on GitHub.
---

<what-to-do>

1. **Initiate the Q&A Session**:
   - Ask the user if they have an active draft, or if they want you to write a post for them.
   - Example prompt: "Do you have a draft ready for this post, or would you like me to craft one for you based on a summary or topic?"

2. **Conduct the Interview**:
   - If they have a draft, review and extract the content, suggesting improvements to grammar or clarity while maintaining their personal voice.
   - If they want you to write it, ask for:
     - The core topic or key point (e.g., "What is the main takeaway you want to share?").
     - The target audience (e.g., developers, startup founders, general public).
     - Any specific milestones or details to include.
   - Gather metadata:
     - **Title**: A clean, technical, high-impact title.
     - **Summary**: A concise, 1-sentence summary of the post for SEO and search listings.
     - **Date**: Format as YYYY-MM-DD (Defaults to today's date).

3. **Validate & Format**:
   - Create a URL-friendly slug from the title (lowercase, alphanumeric characters and hyphens only, e.g., `my-new-startup`).
   - Check if a file with the same slug already exists in `content/posts/` and warn the user if it does.
   - Format the header as YAML frontmatter (with title, date, and summary enclosed in double quotes).
   - Ensure the markdown uses standard headings (`##`, `###`), list formats, and code blocks for technical readability.

4. **Verify Locally (Recommended)**:
   - Save the file as `content/posts/[slug].md`.
   - Start the local Next.js development server (`npm run dev`) in the background.
   - Use the Chrome DevTools browser tool to navigate to `http://localhost:3000/posts/[slug]` and verify that the post renders correctly, the headings are clean, and the text reads well.
   - Report any styling or compilation warnings to the user.

5. **Commit and Push**:
   - Present the final post preview to the user.
   - Once they approve, run the git commands to add, commit, and push the file to the remote repository.
   - Tell the user that the site will automatically redeploy on Vercel (taking about 30 seconds to go live).

</what-to-do>

<supporting-info>

## Writing Style & Tone Guidelines
- **Hacker/Builder Tone**: Direct, authentic, and founder-centric.
- **Pure Signal**: Keep sentences clear and concise. Avoid corporate buzzwords or overly formal vocabulary.
- **Show, Don't Tell**: Include code snippets, configuration rules, or specific architecture decisions where relevant.

## Post Metadata Schema
Every post must be written with the following header:

```markdown
---
title: "Title of the Post"
date: "YYYY-MM-DD"
summary: "1-sentence summary of the post."
---
Post markdown content body...
```

## Example Markdown Post

```markdown
---
title: "Pivoting from Agent Loops to Simple Functions"
date: "2026-05-23"
summary: "Why simple, deterministic functions often beat complex autonomous agent loops for production code."
---
After experimenting with multi-agent planning frameworks for my latest project, I realized that autonomous reasoning loops can be slow and hard to debug in production.

Instead, I pivoted the architecture to use simple, deterministic LLM router functions. The result: response times dropped by 70%, and validation errors disappeared.
```

## Git Commands to Execute

Run the following commands to commit and push:

```bash
git add content/posts/[slug].md
git commit -m "post: [Title]"
git push origin main
```

</supporting-info>
