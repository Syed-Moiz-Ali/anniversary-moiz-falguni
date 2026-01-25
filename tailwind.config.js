/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'almost-black': '#0f0f0f',
        'deep-black': '#111111',
        'near-white': '#f5f5f5',
        'soft-purple': '#a78bfa',
        'muted-magenta': '#c084fc',
      },
      fontFamily: {
        'cinzel': ['Cinzel', 'serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        'wide': '0.5px',
        'wider': '1px',
        'widest': '1.5px',
        'ultra': '2px',
      },
      lineHeight: {
        'loose': '1.9',
        'extra-loose': '2',
        'ultra-loose': '2.2',
      },
      backdropBlur: {
        'xs': '2px',
        'custom': '12px',
      },
      animation: {
        'heartbeat': 'heartbeat 1.5s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        heartbeat: {
          '0%, 100%': {
            transform: 'scale(1)',
            filter: 'drop-shadow(0 0 1px rgba(192, 132, 252, 0.15))'
          },
          '50%': {
            transform: 'scale(1.15)',
            filter: 'drop-shadow(0 0 2px rgba(192, 132, 252, 0.3))'
          },
        },
        pulseGlow: {
          '0%, 100%': {
            boxShadow: '0 0 8px rgba(192, 132, 252, 0.4)'
          },
          '50%': {
            boxShadow: '0 0 16px rgba(192, 132, 252, 0.7)'
          },
        },
      },
    },
  },
  plugins: [],
}
