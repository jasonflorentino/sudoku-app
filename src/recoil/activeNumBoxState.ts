import {
  atom,
} from 'recoil';

import { NumBoxState } from '../recoil/sudokuState';

const defaultState: NumBoxState = {
  id: '',
  value: 0,
  isLocked: false
}

const activeNumBoxState = atom({
  key: 'activeNumBoxState',
  default: defaultState,
})

export default activeNumBoxState;