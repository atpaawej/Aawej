'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Share2, Check } from 'lucide-react';

export default function PostToolbar({ postId }) {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    const url = `${window.location.origin}/posts/${postId}`;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="reader-toolbar">
      <Link href="/posts" className="toolbar-btn back-btn">
        <ArrowLeft size={16} /> <span>Back</span>
      </Link>
      <button onClick={handleShare} className="toolbar-btn share-btn">
        {copied ? <Check size={16} className="success-icon" /> : <Share2 size={16} />}
        <span>{copied ? 'Copied Link' : 'Share'}</span>
      </button>
    </div>
  );
}
