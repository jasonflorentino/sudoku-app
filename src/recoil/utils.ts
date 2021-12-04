import {
  GetRecoilValue,
} from 'recoil';

import { SudokuStateMap } from './sudokuState';

/**
 * Takes a Recoil getter fn and a map of the
 * Recoil atoms from the sudoku board and returns
 * the state of the board as a plain 2D array.
 */
export const createBoardFromSudokuState = (
  get: GetRecoilValue, 
  sudokuState: SudokuStateMap
) => {
  const board = [];
  let col = [];

  for (const numBoxId in sudokuState) {
    if (col.length === 9) {
      board.push(col);
      col = [];
    }

    const {value: val} = get(sudokuState[numBoxId]);

    switch (val) {
      case '':
        col.push(0);
        break;
      default:
        col.push(Number(val));
        break;
    }
  }

  board.push(col);
  return board;
}

