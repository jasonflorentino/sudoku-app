const SquareSizeMin = '10%';
const SquareSizeMax = '60px';

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        'sudoku': `repeat(9, minmax(${SquareSizeMin}, ${SquareSizeMax}))`
      },
      gridTemplateRows: {
        'sudoku': `repeat(9, minmax(${SquareSizeMin}, ${SquareSizeMax}))`
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
