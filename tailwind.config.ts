import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#FAF9F4',
          elevated: '#FFFFFF',
          card: '#FAFAF9',
          dark: '#1A1A1A',
        },
        border: {
          DEFAULT: '#E8E6E3',
          light: '#F0EEEC',
        },
        text: {
          primary: '#1A1A1A',
          secondary: '#5C5650',
          muted: '#9B9389',
        },
        accent: {
          DEFAULT: '#E8705A',
          dark: '#C95A46',
          dim: 'rgba(232, 112, 90, 0.12)',
        },
      },
      fontFamily: {
        editorial: ['GeneralSans', 'system-ui', 'sans-serif'],
        sans: ['Gambetta', 'Georgia', 'serif'],
        mono: ['SF Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeInUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
