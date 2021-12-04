import {
  selector,
} from 'recoil';

import sudokuState from './sudokuState';
import { assertIsSolved } from '../lib/solverUtils';
import { createBoardFromSudokuState } from './utils';

export const SOLVED = 'Solved!';
export const NOT_SOLVED = 'Not Solved';

const sudokuSolvedState = selector({
  key: 'sudokuSolvedState',
  get: ({get}) => {
    const board = createBoardFromSudokuState(get, sudokuState);
    const isSolved = assertIsSolved(board);
    return isSolved ? SOLVED : NOT_SOLVED;
  },
});

export default sudokuSolvedState;