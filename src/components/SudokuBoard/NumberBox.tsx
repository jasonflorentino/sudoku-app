import React from 'react';
import {
  RecoilState,
  useRecoilState,
  useSetRecoilState,
} from 'recoil';

import { isValidNumBoxInput } from '../../lib/inputUtils';
import { NumBoxState } from '../../recoil/sudokuState';
import activeNumBoxState from '../../recoil/activeNumBoxState';
import { textColor, formatStyles } from '../../lib/styleUtils';

type Props = {
  numBoxAtom: RecoilState<NumBoxState>
}

const NumberBox: React.FC<Props> = ({ numBoxAtom }) => {
  const [currentNumBoxState, setNumBoxState] = useRecoilState(numBoxAtom);
  const setActiveNumBox = useSetRecoilState(activeNumBoxState);

  const { value: numBoxVal, isLocked } = currentNumBoxState;

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

  const lockedStyles = getInputLockedStyles();
  const inputStyles = getInputStyles() + (isLocked ? lockedStyles : '')

  return (
    <div className='flex justify-center items-center w-full h-full'>
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
  focus:bg-purple-100

  dark:bg-gray-800
  dark:border-purple-800
  
  dark:focus:bg-purple-700

  `);
}

function getInputLockedStyles() {
  return formatStyles(`
  text-purple-500 
  dark:text-purple-200 
  
  bg-purple-200 
  dark:bg-gray-900

  focus:bg-purple-200
  dark:focus:bg-purple-500

  `);
}