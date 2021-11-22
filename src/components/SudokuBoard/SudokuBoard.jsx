import sudokuState from '../../recoil/sudokuState';
import numBoxesData from '../../lib/defaultNumBoxes';
import NumberBox from './NumberBox';

const SudokuBoard = () => {
  const boardStyles = getBoardStyles();
  return (
    <div className={boardStyles}>
      {numBoxesData.map(([boxId]) => (
        <NumberBox key={boxId} numBoxAtom={sudokuState[boxId]} />
      ))}
    </div>
  )
}

export default SudokuBoard;

function getBoardStyles() {
  return `
  grid 
  gap-1 
  grid-cols-sudoku 
  grid-rows-sudoku 
  
  border-4 
  border-purple-400

  dark:border-purple-800
  `
}