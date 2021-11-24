import {
  atom,
  RecoilState,
} from 'recoil';

import numBoxesData from '../lib/defaultNumBoxes';

export type SudokuStateMap = {
  [key: string]: RecoilState<NumBoxState>
}

export interface NumBoxState {
  id: string;
  value: number | string;
  isLocked: boolean;
}

const sudokuState: SudokuStateMap = {};

for (const [boxId, defaultVal] of numBoxesData) {
  const defaultState: NumBoxState = {
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

