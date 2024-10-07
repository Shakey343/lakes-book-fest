/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'jonquil': '#FAC800',
      'fire-red': '#CD171A',
      'night': '#0A0A0A',
      'black-olive': '#39413D',
      'silver': '#EDEDED',
      'white': '#FDFDFD',
      'dark-grey': '#888888',
      'map-grey': '#BFBFBF',
      'grey': '#AAAAAA',
      'light-grey': '#DDDDDD',
    },
    fontFamily: {
      adelphi: ['adelphi-pe-variable', 'sans-serif'],
      georgia: ['Georgia', 'serif'],
      serif: ['IBM Plex Serif', 'serif']
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      cursor: {
        'default': 'url(/src/assets/feather_cursor_default.png) 10 50, default',
        'pointer': 'url(/src/assets/feather_cursor_pointer.png) 10 50, pointer',
      }
    }
  },
  plugins: [],
}
