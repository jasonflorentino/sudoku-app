import React from 'react';

import sudokuState from '../../recoil/sudokuState';
import numBoxesData from '../../lib/defaultNumBoxes';
import NumberBox from './NumberBox';
import { formatStyles } from '../../lib/styleUtils';

const SudokuBoard: React.FC = () => {
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
  return formatStyles(`
  grid 
  gap-1 
  grid-cols-sudoku 
  grid-rows-sudoku 
  
  border-4 
  border-purple-400

  dark:border-purple-800
  `);
}