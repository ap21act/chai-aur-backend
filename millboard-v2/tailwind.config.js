/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    
    extend: {
      colors: {
        primary: '#414042',
        green: '#799512',
        'green-dark': '#AAC93C',
        'green-progress': '#789512',
        'black-background': '#575756',
        'white-background': '#DEDCD2',
        white: '#FCFBF7',
        'white-nav': '#F9F7F1',
      },
      keyframes: {
        slideInFromLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      animation: {
        'slide-in-from-left': 'slideInFromLeft 1s ease-out',
      },
      fontFamily: {
        F37: ['F37 Ginger', 'sans-serif'],
        'F37-light': ['F37 Ginger Light', 'sans-serif'],
      },
      fontSize: {
        h4: 'clamp(20px,.8923rem + .7452vw,25px)',
        '3xl': '2rem',
      },
    },
  },
  plugins: [],
};
