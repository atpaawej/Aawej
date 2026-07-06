---
title: "I Built Agent Skills So My AI Doesn't Code Blind"
date: "2026-07-06"
summary: "Two small agent skills that solve the real problems nobody talks about when using AI coding agents in production."
---

Every time I started a new session with Claude Code or Cursor, the same thing happened. The agent would guess the test runner. Touch files it shouldn't. Produce code that didn't fit the project.

It wasn't the model's fault. It had no context.

So I built two small, composable skills — `agent-md` and `strategic-programming` — and published them so anyone can drop them into their workflow.

## The Two Problems

**Problem #1: The agent doesn't know how your project works.**

Agents are stateless. Every session is day zero. They don't know you use Vitest, not Jest. They don't know your `src/` layout. So they guess — and guessing is expensive.

The fix: [`/agent-md`](https://github.com/atpaawej/skills/tree/main/agent-md). It interviews you once and generates an `AGENTS.md` file that tells the agent everything — commands, conventions, boundaries, definitions of done. One conversation, and every future session starts with the right context.

**Problem #2: Agents accelerate software entropy.**

AI agents write code fast. Without design discipline, a codebase turns into a ball of mud faster than a human team could ever manage.

The fix: [`/strategic-programming`](https://github.com/atpaawej/skills/tree/main/strategic-programming). Before writing a line, it walks through a structured design process — map the seams, design for depth, trace the change. The interface stays small. The change stays local. The codebase stays navigable.

## Why Skills, Not Frameworks?

I didn't want a heavy framework or a CLI tool. Skills are just Markdown files with structured instructions. You invoke them by typing `/skill-name` in your agent. Zero setup. Zero dependencies.

```bash
npx skills@latest add atpaawej/skills
```

Pick what you need. Run `/agent-md` or `/strategic-programming`. Done.

Or install individually:

```bash
npx skills@latest add atpaawej/skills/agent-md
npx skills@latest add atpaawej/skills/strategic-programming
```

## The Takeaway

AI coding agents are powerful, but they're not mind readers. Give them the right scaffolding — project context and design discipline — and they stop guessing and start building.

The skills are MIT-licensed and free. Use them, fork them, improve them. If they save you one debugging session, they've done their job.
