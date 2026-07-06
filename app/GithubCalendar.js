'use client';

import React, { useState, useEffect } from 'react';
import { GitHubCalendar } from 'react-github-calendar';

export default function LiveGithubCalendar() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="github-activity-wrapper" style={{ minHeight: '130px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Loading contribution graph...</span>
      </div>
    );
  }

  return (
    <div className="github-activity-wrapper">
      <GitHubCalendar 
        username="atpaawej" 
        hideColorLegend={false}
        hideMonthLabels={false}
        blockSize={12}
        blockMargin={4}
        fontSize={12}
        style={{
          color: 'var(--text-color)',
        }}
      />
    </div>
  );
}
