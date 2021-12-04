/**
 * Initializes the Sudoku board where
 * each value is a separate Recoil atom.
 * Not sure I'd recommend this.
 */
import {
  atom,
  RecoilState,
} from 'recoil';

import numBoxesData from '../lib/defaultNumBoxes';

export type SudokuStateMap = Record<string, RecoilState<NumBoxState>>

export interface NumBoxState {
  id: string;
  value: number | string;
  isLocked: boolean;
}

const sudokuState: SudokuStateMap = {};

for (const [boxId, defaultVal] of numBoxesData) {
  const defaultState = {
    id: boxId,
    value: defaultVal,
    isLocked: false
  }
  sudokuState[boxId] = atom({
    key: boxId,
    default: defaultState,
  })
}

export default sudokuState;
