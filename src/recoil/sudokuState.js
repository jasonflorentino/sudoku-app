import {
  atom,
} from 'recoil';

import numBoxesData from '../lib/defaultNumBoxes';

const sudokuState = {};

for (const [boxId, defaultVal] of numBoxesData) {
  sudokuState[boxId] = atom({
    key: boxId,
    default: defaultVal,
  })
}

export default sudokuState;

