import {
  atom,
  RecoilState,
} from 'recoil';

import numBoxesData from '../lib/defaultNumBoxes';

type SudokuStateMap = {
  [key: string]: RecoilState<number | string>
}

const sudokuState: SudokuStateMap = {};

for (const [boxId, defaultVal] of numBoxesData) {
  sudokuState[boxId] = atom({
    key: boxId,
    default: defaultVal,
  })
}

export default sudokuState;

