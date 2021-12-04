/**
 * Imports & Types
 */
import React, { useRef, useEffect } from 'react';
import {
  RecoilState,
  useRecoilState,
} from 'recoil';

import { isValidNumBoxInput } from '../../lib/inputUtils';
import { NumBoxState } from '../../recoil/sudokuState';
import activeNumBoxState from '../../recoil/activeNumBoxState';
import { textColor, formatStyles } from '../../lib/styleUtils';
import { isThisBoxInGroupWithActive } from '../../lib/solverUtils';

type RefForInputOrNothing = React.MutableRefObject<null | HTMLInputElement>;

/**
 * Styles
 */
const defaultBgStyle   = ' bg-purple-100 dark:bg-gray-800   focus:bg-pink-200 dark:focus:bg-pink-600 ';
const highlightBgStyle = ' bg-pink-200   dark:bg-pink-900   focus:bg-pink-300 dark:focus:bg-pink-600 ';
const lockedBgStyle    = ' bg-purple-300 dark:bg-gray-900   focus:bg-pink-200 dark:focus:bg-pink-900 ';
const emptyBgStyle     = ' bg-purple-400 dark:bg-purple-900 focus:bg-pink-300 dark:focus:bg-pink-700 ';

/**
 * Main Component
 */
const NumberBox = ({ numBoxAtom }: { numBoxAtom: RecoilState<NumBoxState> }) => {
  const [currentNumBoxState, setNumBoxState] = useRecoilState(numBoxAtom);
  const [activeNumBox, setActiveNumBox] = useRecoilState(activeNumBoxState);
  const inputEl: RefForInputOrNothing = useRef(null);

  const { id: thisBoxId, value: numBoxVal, isLocked } = currentNumBoxState;
  const { id: activeBoxId } = activeNumBox;

  /** 
   * Handles focussing input when locked box 
   * (implemented as a disabled text input and so
   * cannot be focussed) gets unlocked.
   */
  useEffect(() => {
    const isAlreadySelected = activeBoxId === thisBoxId
    if (isAlreadySelected && isLocked === false) {
      inputEl.current?.focus();
    };
  // eslint-disable-next-line
  }, [isLocked]); // Don't run effect when boxIds change, only when isLocked changes

  /** 
   * Sets this box as the 'Active Box'
   * to display in NumBoxControl
   */
  const handleActiveNumBoxChange = () => {
    // Debounce if already set
    // (This func handles multiple DOM selection events)
    if (activeBoxId === thisBoxId) {
      return;
    };
    
    setActiveNumBox(currentNumBoxState);
  };

  /** 
   * Changes the value in this box only
   * if it's 'unlocked' and receives a
   * valid input character.
   */
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
    });
  };

  const isHighlighted = isThisBoxInGroupWithActive(thisBoxId, activeBoxId);
  const isEmpty = !numBoxVal;

  const backgroundStyles = 
    isEmpty 
    ? emptyBgStyle
    : isHighlighted 
    ? highlightBgStyle
    : isLocked
    ? lockedBgStyle
    : defaultBgStyle;

  const inputStyles = 
    getInputStyles() 
    + (isLocked ? getInputLockedStyles() : '') 
    + backgroundStyles;

  return (
    <div 
      className={`flex justify-center items-center w-full h-full`}
      onClick={handleActiveNumBoxChange}
    >
      <input 
        ref={inputEl}
        className={inputStyles}
        type='text' 
        value={numBoxVal} 
        onChange={handleNumBoxValueChange} 
        onFocus={handleActiveNumBoxChange}
        disabled={isLocked}
      />
    </div>
  );
};

export default NumberBox;

/**
 * Getter function declarations for longer styles.
 */

function getInputStyles() {
  return formatStyles(`
  ${textColor}
  py-2 
  px-3 
  w-full 
  h-full 
  border
  cursor-default
   
  font-bold 
  text-center 
  text-xl 

  focus:outline-none

  dark:border-purple-800

  `);
};

function getInputLockedStyles() {
  return formatStyles(`
  text-purple-500 
  dark:text-purple-400 
  dark:focus:text-gray-400

  text-2xl

  `);
};