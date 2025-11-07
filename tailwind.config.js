/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f7f5',
          100: '#b3e8e1',
          200: '#80d9cd',
          300: '#4dcab9',
          400: '#1abba5',
          500: '#16a28b',
          600: '#137e6c',
          700: '#105a4d',
          800: '#0c362e',
          900: '#08120f'
        },
        medical: {
          blue: '#4A90E2',
          green: '#10B981',
          orange: '#F59E0B',
          redlight: '#EF4444',
          gray: '#9CA3AF'
        }
      }
    },
  },
  plugins: [],
}
