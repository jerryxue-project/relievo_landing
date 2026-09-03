const mutedIris = {
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
}

const softBlush = {
  50: '#fdf8f9',
  100: '#fbf0f2',
  200: '#f6e0e5',
  300: '#eec5cd',
  400: '#e2a3af',
  500: '#cf7b8d',
  600: '#b76174',
  700: '#984a5c',
  800: '#7e3f4e',
  900: '#6c3743',
  950: '#3f1b23',
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: mutedIris,
        indigo: mutedIris,
        blush: softBlush,
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
