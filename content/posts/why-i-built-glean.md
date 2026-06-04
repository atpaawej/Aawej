---
title: "Why I Built Glean: Automating Outreach for Developers Who Hate Sales"
date: "2026-06-05"
summary: "I knew nothing about lead gen, so I automated it — here's how Glean was born."
---

I couldn't do outreach. Cold DMs, connection requests, finding the right people — it all felt like a skill I didn't have and didn't want to learn.

So I automated it.

That's how Glean started. Not from a grand vision of "disrupting lead generation," but from a simple frustration: I'm a builder, not a salesperson. I wanted to find users for my projects without spending hours scrolling LinkedIn profiles or copy-pasting into spreadsheets.

**The problem with existing tools:** They're detectable. LinkedIn flags Selenium and Puppeteer instantly. Your account gets restricted, your outreach dies. And the SaaS solutions that do work — they cost a fortune per seat and ship your data to their servers.

I realized what I actually needed was something that:

- **Looked human.** Uses my real browser, my real profile, my real cookies. No bot fingerprints.
- **Stayed local.** My leads should live on my machine, not in some VC-backed cloud.
- **Worked with my agent.** I build with AI agents daily. Why should lead gen be a separate workflow?

So I built Glean on top of BrowserAct — a browser automation CLI that connects to your actual Chrome instance. The result: platforms see a real user, not a headless bot. Every scroll, click, and keystroke passes as human.

Now anyone who feels like I did — "I don't know how to do outreach" — can run a single command and have their agent handle the pipeline. LinkedIn, X, Google Maps, email. Discover, contact, follow up. All from the terminal.

**The takeaway:** You don't need to learn sales. You need tools that make sales feel like engineering.

```
npx skills add Glean-ai/Glean
```
