'use client';

import { useSyncExternalStore } from 'react';

const THEME_KEY = 'theme';

function subscribe(callback) {
  window.addEventListener('storage', callback);
  // Also observe the class attribute so external mutations reflect
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
  return () => {
    window.removeEventListener('storage', callback);
    observer.disconnect();
  };
}

function getSnapshot() {
  if (typeof window === 'undefined') return false;
  return document.documentElement.classList.contains('dark-mode');
}

export function getSnapshotServer() {
  return false;
}

function getServerSnapshot() {
  return false;
}

/**
 * Subscribe to the active theme. Returns true when dark mode is enabled.
 * Safe for client components; falls back to light on the server.
 */
export function useThemeSnapshot() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

/** Apply the persisted theme class and return whether dark mode is on. */
export function applyStoredTheme() {
  if (typeof window === 'undefined') return false;
  const stored = localStorage.getItem(THEME_KEY);
  const isDark = stored === 'dark';
  document.documentElement.classList.toggle('dark-mode', isDark);
  document.documentElement.classList.remove('light-mode');
  if (stored !== 'light' && stored !== 'dark') {
    localStorage.setItem(THEME_KEY, 'light');
  }
  return isDark;
}