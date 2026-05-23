'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, Calendar } from 'lucide-react';

const ArrowRight = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

export default function PostsList({ posts }) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.summary.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Helper to format date string to a readable format
  const formatDate = (dateStr) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateStr).toLocaleDateString('en-US', options);
  };

  return (
    <div className="posts-container">
      <div className="posts-header-section">
        <h1 className="page-title">Writing</h1>
        <p className="page-subtitle">
          Thoughts on artificial intelligence, software prototyping, and engineering.
        </p>

        {/* Search Bar */}
        <div className="search-bar-container">
          <Search size={18} className="search-icon" />
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>
      </div>

      {/* Posts List */}
      <div className="posts-list">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <Link 
              key={post.id} 
              href={`/posts/${post.id}`} 
              className="post-item-card"
            >
              <div className="post-meta">
                <span className="post-date">
                  <Calendar size={12} /> {formatDate(post.date)}
                </span>
              </div>
              <h2 className="post-item-title">
                {post.title}
                <ArrowRight className="title-arrow" />
              </h2>
              <p className="post-item-summary">{post.summary}</p>
            </Link>
          ))
        ) : (
          <div className="no-posts">
            <p>No articles found matching your query.</p>
          </div>
        )}
      </div>
    </div>
  );
}
