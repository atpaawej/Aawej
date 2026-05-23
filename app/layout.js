import { JetBrains_Mono } from 'next/font/google';
import Header from './Header';
import './globals.css';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://aawej.in'),
  title: 'Aawej Pathan | AI Engineer & Founder',
  description: 'Portfolio and technical blog of Aawej Pathan, a 16-year-old AI Engineer and Entrepreneur building autonomous systems.',
  keywords: ['Aawej Pathan', 'AI Engineer', 'Developer', 'Portfolio', 'Blog', 'Agentic Workflows', 'AI Builder'],
  authors: [{ name: 'Aawej Pathan' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://github.com/pathanaawej0-dot',
    title: 'Aawej Pathan | AI Engineer & Founder',
    description: 'Portfolio and technical blog of Aawej Pathan, a 16-year-old AI Engineer and Entrepreneur.',
    siteName: 'Aawej Pathan Portfolio',
    images: [{ url: '/aawej image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aawej Pathan | AI Engineer & Founder',
    description: 'Portfolio and technical blog of Aawej Pathan, a 16-year-old AI Engineer and Entrepreneur.',
    images: ['/aawej image.jpg'],
    creator: '@AawejPathan786',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              'name': 'Aawej Pathan',
              'jobTitle': 'AI Engineer & Entrepreneur',
              'url': 'https://aawej.in',
              'sameAs': [
                'https://x.com/AawejPathan786',
                'https://github.com/pathanaawej0-dot',
                'https://www.instagram.com/aawej_19/',
              ],
              'email': 'pathanaawej0@gmail.com',
              'knowsAbout': [
                'Artificial Intelligence',
                'Machine Learning',
                'Software Engineering',
                'Large Language Models',
                'Agentic Systems',
              ],
            }),
          }}
        />
      </head>
      <body>
        <div className="app-layout">
          <Header />
          <main className="main-content">{children}</main>
          <footer className="global-footer">
            <p>&copy; {new Date().getFullYear()} Aawej Pathan. All rights reserved.</p>
            <p className="footer-imprint">
              Imprint: Aawej Pathan · Email: <a href="mailto:pathanaawej0@gmail.com" style={{ color: 'var(--accent-color)', textDecoration: 'none' }}>pathanaawej0@gmail.com</a>
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}
