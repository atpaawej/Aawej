'use client';

import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Sun, Moon } from 'lucide-react';
import { useThemeSnapshot, applyStoredTheme } from './useTheme';

export default function Header() {
  const pathname = usePathname();
  const isDark = useThemeSnapshot();
  // Lazily seed from localStorage; harmless and avoids layout shift before hydration
  const [initialized, setInitialized] = useState(false);

  // Guard the first render so a stored dark preference applies without flicker
  if (!initialized && typeof window !== 'undefined') {
    setInitialized(true);
    applyStoredTheme();
  }

  const toggleTheme = useCallback(() => {
    const next = !document.documentElement.classList.contains('dark-mode');
    document.documentElement.classList.toggle('dark-mode', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  }, []);

  const isActive = (path) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };

  return (
    <header className="navbar-header">
      <div className="nav-container">
        <Link href="/" className="nav-brand">
          Aawej Pathan
        </Link>

        <nav className="nav-links">
          <Link
            href="/work"
            className={`nav-link ${isActive('/work') ? 'active' : ''}`}
          >
            Work
          </Link>
          <Link
            href="/posts"
            className={`nav-link ${isActive('/posts') ? 'active' : ''}`}
          >
            Writing
          </Link>
          <Link
            href="/about"
            className={`nav-link ${isActive('/about') ? 'active' : ''}`}
          >
            About
          </Link>
          <Link
            href="/connect"
            className={`nav-link ${isActive('/connect') ? 'active' : ''}`}
          >
            Connect
          </Link>

          <button
            onClick={toggleTheme}
            className="theme-toggle-btn"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </nav>
      </div>
    </header>
  );
}
