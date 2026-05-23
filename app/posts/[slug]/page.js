import React from 'react';
import { getPostData, getSortedPostsData } from '@/lib/posts';
import PostToolbar from './PostToolbar';
import { Calendar } from 'lucide-react';
import Link from 'next/link';

// Generate dynamic SEO metadata for each post
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const postData = await getPostData(slug);
  
  if (!postData) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${postData.title} | Aawej Pathan`,
    description: postData.summary,
    openGraph: {
      title: postData.title,
      description: postData.summary,
      images: [{ url: '/aawej image.jpg' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: postData.title,
      description: postData.summary,
      images: ['/aawej image.jpg'],
    },
  };
}

// Generate static HTML paths for all articles at build time
export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.id,
  }));
}

export default async function PostPage({ params }) {
  const { slug } = await params;
  const postData = await getPostData(slug);

  if (!postData) {
    return (
      <div className="error-container">
        <h2>Post not found</h2>
        <Link href="/posts" className="back-btn">
          Back to posts
        </Link>
      </div>
    );
  }

  // Format date readable
  const formatDate = (dateStr) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateStr).toLocaleDateString('en-US', options);
  };

  return (
    <article className="post-reader-container">
      <PostToolbar postId={postData.id} />

      <header className="reader-header">
        <div className="post-meta">
          <span className="post-date">
            <Calendar size={12} /> {formatDate(postData.date)}
          </span>
          <span className="read-time-badge">By Aawej Pathan</span>
        </div>
        <h1 className="reader-title">{postData.title}</h1>
      </header>

      <div 
        className="reader-content"
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
      />

      <footer className="reader-footer">
        <div className="footer-card">
          <h4>About the Author</h4>
          <p>
            Aawej Pathan is a 16-year-old developer and aspiring founder. Follow his builder journey on X at <a href="https://x.com/AawejPathan786" target="_blank" rel="noopener noreferrer">@AawejPathan786</a>.
          </p>
        </div>
      </footer>
    </article>
  );
}
