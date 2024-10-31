/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'snutt-orange': '#F58D3D',
        'snutt-red': '#E54459',
        'snutt-blue': '#1bd0c8',
        'snutt-green': '#a6d930',
        'grey-assistive': '#C4C4C4',
        'grey-disabled': '#E3E3E3',
        'grey-background': '#F7F8F9',
        'dark-grey': '#8A8A8E',
        red: '#FF0000',
        mint: '#48D8D3',
      },
      margin: {
        34: '136px',
        69: '276px',
        179: '716px',
      },
      borderWidth: {
        0.75: '0.75px',
      },
      width: {
        25: '100px',
      },
      height: {
        21: '84px',
      },
      fontFamily: {
        'sf-pro': ['SF Pro', 'sans-serif'],
        pretendard: ['Pretendard', 'sans-serif'],
      },
      fontSize: {
        xxsm: ['10px', { lineHeight: '12px' }],
        xsm: ['11px', { lineHeight: '13.2px' }],
      },
    },
  },
  plugins: [],
};
