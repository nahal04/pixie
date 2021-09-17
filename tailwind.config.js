module.exports = {
  purge: ['./pages/**/*.{js,ts,tsx, jsx}', './components/**/*.{js,ts,tsx,jsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      outline: {
        green: '2px solid #34D399'
      },
      fontFamily: {
        'text': ['Urbanist', 'sans-serif']
      },
      keyframes: {
        push: {
          '0%, 100%': { transform: 'translateX(-5px)' },
          '50%': { transform: 'translateX(5px)' }
        }
      },
      animation: {
        push: 'push 1s ease-in-out infinite',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
