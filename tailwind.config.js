/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* ── Editorial paper palette ─────────────────────────────
           paper   page background (warm, print-like)
           ink     near-black text, slightly warm
           accent  signal orange: graphics, links, highlights      */
        paper: {
          DEFAULT: '#FAF8F4',
          deep: '#F3EFE7',
          sunken: '#EBE6DC',
          raised: '#FFFFFF'
        },
        ink: {
          DEFAULT: '#1C1A15',
          soft: '#433F37',
          mute: '#6F6A5E',
          faint: '#A19B8C'
        },
        line: {
          DEFAULT: '#E3DED3',
          strong: '#CFC9BB'
        },
        accent: {
          DEFAULT: '#E4572E',
          deep: '#BE3A16',
          soft: '#FBEAE2'
        }
      },
      fontFamily: {
        display: ['"Newsreader"', 'Georgia', 'serif'],
        sans: ['"Hanken Grotesk"', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace']
      },
      fontSize: {
        'display-1': ['clamp(3.75rem, 8.5vw, 6rem)', { lineHeight: '0.98', letterSpacing: '-0.02em' }],
        'display-2': ['clamp(2.5rem, 5vw, 3.5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-3': ['clamp(1.75rem, 3vw, 2.25rem)', { lineHeight: '1.15', letterSpacing: '-0.015em' }],
      },
      letterSpacing: {
        tightest: '-0.03em',
        caps: '0.05em',
      },
      borderRadius: {
        card: '0.875rem',
        control: '0.625rem',
      },
    },
  },
  plugins: [],
}
