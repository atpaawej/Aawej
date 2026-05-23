'use client';

import React, { useState } from 'react';
import { Mail, Check, ArrowUpRight } from 'lucide-react';

export default function EmailButton() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('pathanaawej0@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button onClick={handleCopyEmail} className="action-btn email-btn">
      <Mail size={16} />
      <span>pathanaawej0@gmail.com</span>
      {copied ? <Check size={16} className="success-icon" /> : <ArrowUpRight size={14} />}
    </button>
  );
}
