import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

// Image metadata
export const alt = 'Aawej Pathan — AI Engineer & Builder. Building things that excite me.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Mirror the site hero: deep-navy canvas, mono label, Space Grotesk
// headline, lead line, and a photo card on the right — laid out for the
// 1200x630 share-card ratio.
export default async function Image() {
  const fontData = await readFile(join(process.cwd(), 'assets/SpaceGrotesk.ttf'));

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#071829',
          color: '#f5f5f4',
          display: 'flex',
          alignItems: 'center',
          padding: '0 80px',
          fontFamily: 'Space Grotesk',
          position: 'relative',
        }}
      >
        {/* soft band behind the card */}
        <div
          style={{
            position: 'absolute',
            right: 60,
            top: 60,
            width: 460,
            height: 460,
            background: '#0d2438',
            borderRadius: 40,
            border: '1px solid #1e3348',
            display: 'flex',
          }}
        />

        {/* left: text */}
        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 660, zIndex: 1 }}>
          <div
            style={{
              fontFamily: 'ui-monospace, monospace',
              fontSize: 18,
              letterSpacing: 4,
              textTransform: 'uppercase',
              color: '#ff7759',
              display: 'flex',
            }}
          >
            AI Engineer · Builder
          </div>
          <div
            style={{
              fontSize: 84,
              fontWeight: 600,
              letterSpacing: -3,
              lineHeight: 1.05,
              color: '#f5f5f4',
              display: 'flex',
              marginTop: 24,
            }}
          >
            Building things that excite me.
          </div>
          <div
            style={{
              fontSize: 26,
              color: '#8a93a0',
              lineHeight: 1.4,
              display: 'flex',
              marginTop: 24,
            }}
          >
            I&apos;m Aawej Pathan — a technical builder shipping{' '}
            <span style={{ color: '#6b9fff', marginLeft: 8 }}>
              AgentOnboard, identity for AI agents.
            </span>
          </div>
        </div>

        {/* right: photo card */}
        <div
          style={{
            position: 'absolute',
            right: 100,
            top: 90,
            width: 300,
            height: 370,
            borderRadius: 22,
            border: '1px solid #1e3348',
            background: 'linear-gradient(145deg, #0d2438, #0a2e28)',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
            zIndex: 2,
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              bottom: 20,
              left: 20,
              right: 20,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div
              style={{
                fontFamily: 'ui-monospace, monospace',
                fontSize: 13,
                letterSpacing: 1,
                color: '#48bb78',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: 999,
                  background: '#48bb78',
                  marginRight: 8,
                  display: 'flex',
                }}
              />
              SHIPPING
            </div>
            <div
              style={{
                fontFamily: 'ui-monospace, monospace',
                fontSize: 13,
                letterSpacing: 1,
                color: '#8a93a0',
                display: 'flex',
              }}
            >
              @atpaawej
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Space Grotesk',
          data: fontData,
          style: 'normal',
          weight: 600,
        },
      ],
    }
  );
}
