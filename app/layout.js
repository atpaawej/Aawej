import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google';
import Header from './Header';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://aawej.in'),
  title: 'Aawej Pathan | AI Engineer & Builder',
  description:
    'Technical builder shipping AgentOnboard and RankGeo. Portfolio and writing by Aawej Pathan.',
  keywords: [
    'Aawej Pathan',
    'AI Engineer',
    'AgentOnboard',
    'RankGeo',
    'Developer',
    'Portfolio',
    'Blog',
    'Agentic Systems',
  ],
  authors: [{ name: 'Aawej Pathan' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aawej.in',
    title: 'Aawej Pathan | AI Engineer & Builder',
    description:
      'Technical builder shipping AgentOnboard and RankGeo. Portfolio and writing by Aawej Pathan.',
    siteName: 'Aawej Pathan',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Aawej Pathan — AI Engineer & Builder. Building things that excite me.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aawej Pathan | AI Engineer & Builder',
    description:
      'Technical builder shipping AgentOnboard and RankGeo. Portfolio and writing by Aawej Pathan.',
    images: ['/og.png'],
    creator: '@AawejPathan786',
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Aawej Pathan',
              jobTitle: 'AI Engineer & Builder',
              url: 'https://aawej.in',
              sameAs: [
                'https://x.com/AawejPathan786',
                'https://github.com/atpaawej',
                'https://www.instagram.com/aawej_19/',
              ],
              email: 'pathanaawej0@gmail.com',
              knowsAbout: [
                'Artificial Intelligence',
                'Agent Identity',
                'Generative Engine Optimization',
                'Software Engineering',
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
              Imprint: Aawej Pathan · Email:{' '}
              <a href="mailto:pathanaawej0@gmail.com">pathanaawej0@gmail.com</a>
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}
