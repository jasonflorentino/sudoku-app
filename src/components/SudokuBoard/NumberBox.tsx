import React from 'react';
import {
  RecoilState,
  useRecoilState,
} from 'recoil';

import { isValidNumBoxInput } from '../../lib/inputUtils';

type Props = {
  numBoxAtom: RecoilState<string | number>
}

const NumberBox: React.FC<Props> = ({ numBoxAtom }) => {
  const [numBoxVal, setNumBoxVal] = useRecoilState(numBoxAtom);
  const inputStyles = getInputStyles();

  const handleNumBoxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (val.length === 0 || !isValidNumBoxInput(val)) {
      return setNumBoxVal('');
    };
    setNumBoxVal(Number(val[0]))
  }

  return (
    <div className='flex justify-center items-center w-full h-full'>
      <input 
        className={inputStyles}
        type='text' 
        value={numBoxVal} 
        onChange={handleNumBoxChange} 
      />
    </div>
  )
}

export default NumberBox;

function getInputStyles() {
  return `
  py-2 
  px-3 
  w-full 
  h-full 
  border
   
  font-bold 
  text-center 
  text-xl 
  text-purple-600

  focus:outline-none
  focus:bg-purple-100

  dark:text-purple-100
  dark:bg-gray-800
  dark:border-purple-800
  
  dark:focus:bg-purple-700

  `
}