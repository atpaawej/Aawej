'use client';

import React, { useSyncExternalStore } from 'react';
import { GitHubCalendar } from 'react-github-calendar';

function subscribe(callback) {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
  return () => observer.disconnect();
}

function isDark() {
  return document.documentElement.classList.contains('dark-mode');
}

function getServerSnapshot() {
  return false;
}

export default function LiveGithubCalendar() {
  const dark = useSyncExternalStore(subscribe, isDark, getServerSnapshot);

  return (
    <div className="github-activity-wrapper">
      <GitHubCalendar
        username="atpaawej"
        colorScheme={dark ? 'dark' : 'light'}
        hideColorLegend={false}
        hideMonthLabels={false}
        blockSize={12}
        blockMargin={4}
        fontSize={12}
        style={{ color: dark ? '#edfce9' : '#212121' }}
      />
    </div>
  );
}