'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Sun, Moon } from 'lucide-react';

export default function Header() {
  const pathname = usePathname();
  const [darkMode, setDarkMode] = useState(true);

  // Initialize and sync light/dark mode
  useEffect(() => {
    const isLight = localStorage.getItem('theme') === 'light';
    if (isLight) {
      setDarkMode(false);
      document.documentElement.classList.add('light-mode');
    } else {
      setDarkMode(true);
      document.documentElement.classList.remove('light-mode');
    }
  }, []);

  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.add('light-mode');
      localStorage.setItem('theme', 'light');
      setDarkMode(false);
    } else {
      document.documentElement.classList.remove('light-mode');
      localStorage.setItem('theme', 'dark');
      setDarkMode(true);
    }
  };

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
            href="/posts" 
            className={`nav-link ${isActive('/posts') ? 'active' : ''}`}
          >
            Posts
          </Link>
          <Link 
            href="/" 
            className={`nav-link ${isActive('/') ? 'active' : ''}`}
          >
            About
          </Link>

          <button 
            onClick={toggleTheme} 
            className="theme-toggle-btn"
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </nav>
      </div>
    </header>
  );
}
