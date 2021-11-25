import {
  GetRecoilValue,
  selector,
} from 'recoil';

import sudokuState, { SudokuStateMap } from './sudokuState';
import { assertIsSolved } from '../lib/solverUtils';

export const SOLVED = 'Solved!';
export const NOT_SOLVED = 'Not Solved';

const sudokuSolvedState = selector({
  key: 'sudokuSolvedState',
  get: ({get}) => {
    // eslint-disable-next-line
    const board = createBoard(get, sudokuState);
    const isSolved = assertIsSolved(board);
    return isSolved ? SOLVED : NOT_SOLVED;
  },
});

export default sudokuSolvedState;

function createBoard(get: GetRecoilValue, sudokuState: SudokuStateMap) {
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