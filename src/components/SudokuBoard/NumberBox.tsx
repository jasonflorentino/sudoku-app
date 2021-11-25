// Imports
import React from 'react';
import {
  RecoilState,
  useRecoilState,
} from 'recoil';

import { isValidNumBoxInput } from '../../lib/inputUtils';
import { NumBoxState } from '../../recoil/sudokuState';
import activeNumBoxState from '../../recoil/activeNumBoxState';
import { textColor, formatStyles } from '../../lib/styleUtils';
import { isBoxInBoardGroup } from '../../lib/solverUtils';

// Types
type Props = {
  numBoxAtom: RecoilState<NumBoxState>
}

// Styles
const defaultBg   = ' bg-purple-100 dark:bg-gray-800   focus:bg-pink-200 dark:focus:bg-pink-600 ';
const highlightBg = ' bg-pink-200   dark:bg-pink-900   focus:bg-pink-300 dark:focus:bg-pink-600 ';
const lockedBg    = ' bg-purple-300 dark:bg-gray-900   focus:bg-pink-200 dark:focus:bg-pink-900 ';
const emptyBg     = ' bg-purple-400 dark:bg-purple-900 focus:bg-pink-300 dark:focus:bg-pink-700 '

// Component
const NumberBox: React.FC<Props> = ({ numBoxAtom }) => {
  const [currentNumBoxState, setNumBoxState] = useRecoilState(numBoxAtom);
  const [activeNumBox, setActiveNumBox] = useRecoilState(activeNumBoxState);

  const { id: thisBoxId, value: numBoxVal, isLocked } = currentNumBoxState;
  const { id: activeBoxId } = activeNumBox;

  const handleActiveNumBoxChange = () => {
    setActiveNumBox(currentNumBoxState);
  }

  const handleNumBoxValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isLocked) return;

    const val = e.target.value;
    if (val.length === 0 || !isValidNumBoxInput(val)) {
      return setNumBoxState({
        ...currentNumBoxState,
        value: ''
      });
    };
    setNumBoxState({
      ...currentNumBoxState,
      value: Number(val[0])
    })
  }

  const isHighlighted = isBoxInBoardGroup(thisBoxId, activeBoxId);
  const isEmpty = !numBoxVal;

  const backgroundStyles = isEmpty 
    ? emptyBg
    : isHighlighted 
    ? highlightBg
    : isLocked
    ? lockedBg
    : defaultBg

  const inputStyles = 
    getInputStyles() 
    + (isLocked ? getInputLockedStyles() : '') 
    + backgroundStyles;

  return (
    <div className={`flex justify-center items-center w-full h-full`}>
      <input 
        className={inputStyles}
        type='text' 
        value={numBoxVal} 
        onChange={handleNumBoxValueChange} 
        onFocus={handleActiveNumBoxChange}
      />
    </div>
  )
}

export default NumberBox;

function getInputStyles() {
  return formatStyles(`
  ${textColor}
  py-2 
  px-3 
  w-full 
  h-full 
  border
   
  font-bold 
  text-center 
  text-xl 

  focus:outline-none

  dark:border-purple-800

  `);
}

function getInputLockedStyles() {
  return formatStyles(`
  text-purple-500 
  dark:text-purple-400 
  dark:focus:text-gray-400

  text-2xl

  `);
}