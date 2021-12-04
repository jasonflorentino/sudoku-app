/**
 * This should maybe be an atom that houses
 * just the ID of the active Num Box (instead
 * of directly referencing another atom) and
 * then we create a Recoil selector that gets
 * (and sets?) the data for this active Num Box.
 */
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
