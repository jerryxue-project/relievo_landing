/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f5f6fc',
          100: '#ebeef9',
          200: '#d7dcf4',
          300: '#b7bfec',
          400: '#919ce0',
          500: '#6b76ce',
          600: '#5560bd',
          700: '#454e9e',
          800: '#3b427f',
          900: '#333866',
          950: '#1f2242',
        },
        slate: {
          850: '#152033',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans TC', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'card': '0 2px 10px -2px rgba(0, 0, 0, 0.05), 0 1px 3px -1px rgba(0, 0, 0, 0.05)',
        'float': '0 20px 40px -15px rgba(85, 96, 189, 0.18)',
      }
    },
  },
  plugins: [],
}
