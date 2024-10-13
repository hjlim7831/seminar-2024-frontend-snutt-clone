/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'snutt-orange': '#F58D3D',
        'grey-assistive': '#C4C4C4',
        mint: '#48D8D3',
      },
      margin: {
        34: '136px',
        69: '276px',
      },
      fontFamily: {
        'sf-pro': ['SF Pro', 'sans-serif'],
        pretendard: ['Pretendard', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
