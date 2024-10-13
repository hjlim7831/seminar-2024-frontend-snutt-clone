/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'snutt-orange': '#F58D3D',
        'grey-assistive': '#C4C4C4',
        'grey-disabled': '#E3E3E3',
        'dark-grey': '#8A8A8E',
        mint: '#48D8D3',
      },
      margin: {
        34: '136px',
        69: '276px',
      },
      borderWidth: {
        0.75: '0.75px',
      },
      width: {
        25: '100px',
      },
      fontFamily: {
        'sf-pro': ['SF Pro', 'sans-serif'],
        pretendard: ['Pretendard', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
