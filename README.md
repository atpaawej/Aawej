# Aawej Pathan | Developer Portfolio & Blog

A high-performance, multi-page developer portfolio and blog, built for **Aawej Pathan** (16-year-old AI Engineer & Entrepreneur). 

Inspired by the clean, tech-centric, monospaced layout of `steipete.me`, the site is fully optimized for speed and SEO (including custom JSON-LD schema markup and dynamically generated sitemaps).

## 🚀 Key Features

1. **Next.js 16 & App Router**: Leverages Server-Side Rendering (SSR) and Static Site Generation (SSG) for fast loading speeds and SEO indexability.
2. **Monospaced Technical Design**: Minimalist dark/light theme utilizing `JetBrains Mono`, clean borders, and wavy link styles.
3. **Live GitHub Contributions Calendar**: Directly fetches and renders live contribution logs for GitHub profile [pathanaawej0-dot](https://github.com/pathanaawej0-dot) using `react-github-calendar`.
4. **100% Hack-Proof Blog**: Uses static Markdown (`.md`) files stored in the codebase. There is no database or admin dashboard on the server, eliminating any database breach or SQL injection risks.
5. **SEO & Sitemaps**: Pre-configured meta tags, Twitter cards for X, structured JSON-LD data for Google Rich Snippets, and a dynamically built `sitemap.xml`.

---

## ✍️ How to Publish a Post

Since the blog is file-based, you have two convenient and secure ways to create, update, or delete posts:

### Option A: Directly on GitHub.com (Great for Mobile)
1. Navigate to your repository on GitHub.
2. Open the `content/posts/` directory.
3. Click **Add file** -> **Create new file**.
4. Name it `your-post-slug.md`.
5. Add the frontmatter header and write your post in Markdown:
   ```markdown
   ---
   title: "Your Post Title"
   date: "YYYY-MM-DD"
   summary: "A short 1-sentence summary of the post."
   ---
   Your markdown body text goes here...
   ```
6. Click **Commit changes**. Vercel will notice the commit and rebuild the live site in 30 seconds!

### Option B: Local Editor (Cursor / VS Code)
1. Create a new `.md` file inside the `content/posts/` folder.
2. Fill out the header and write your post.
3. Save, commit, and push:
   ```bash
   git add .
   git commit -m "post: added new shipping update"
   git push origin main
   ```

---

## 🛠️ Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build Production Site
```bash
npm run build
```
Next.js will generate static HTML files for all pages and blog posts inside the `.next` folder.
