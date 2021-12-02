import React from 'react';
import {
  useRecoilValue,
} from 'recoil';

import sudokuSolvedState, { SOLVED } from '../../recoil/sudokuSolvedState';
import { buttonLook, textColor } from '../../lib/styleUtils';

const SolveButton: React.FC = () => {
  const solvedState = useRecoilValue(sudokuSolvedState);
  const disabled = solvedState === SOLVED;

  const handleSolveBoard = () => {
    
  }

  const disabledClasses = disabled ? ' opacity-50 cursor-not-allowed' : '';
  const buttonClasses = `${buttonLook} ${textColor} font-bold ${disabledClasses}`;

  return (
    <div className="ml-3">
      <button 
        onClick={handleSolveBoard}
        className={buttonClasses}
        disabled={disabled}
      >
        {"▶️ Auto Solve"}
      </button>
    </div>
  )
}

export default SolveButton;