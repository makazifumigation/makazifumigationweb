/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#5bad6a',
          50: '#f0f9f2',
          100: '#dcf2e0',
          200: '#bce4c4',
          300: '#8fcf9e',
          400: '#5bad6a',
          500: '#3d8f4d',
          600: '#2d723d',
          700: '#265b32',
          800: '#224a2b',
          900: '#1d3e25',
        },
        secondary: {
          DEFAULT: '#1a1a1a',
          50: '#f6f6f6',
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#4f4f4f',
          800: '#454545',
          900: '#1a1a1a',
        },
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        container: '1280px',
      },
      spacing: {
        section: '5rem',
      },
    },
  },
  plugins: [],
}

