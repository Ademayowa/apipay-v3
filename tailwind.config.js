module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        btnColor: '#BA4270',
        grayColor: '#36536B',
      },
      fontFamily: {
        publicsans: ['Public sans', 'sans-serif'],
        dmserif: ['DM Serif Display', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
