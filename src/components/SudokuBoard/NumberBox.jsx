import {
  useRecoilState,
} from 'recoil';

import { isValidNumBoxInput } from '../../lib/inputUtils';

const NumberBox = ({ numBoxAtom }) => {
  const [numBoxVal, setNumBoxVal] = useRecoilState(numBoxAtom);
  const inputStyles = getInputStyles();

  const handleNumBoxChange = (e) => {
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
  `
}