import React from 'react';
import {
  useRecoilValue, useRecoilState,
} from 'recoil';

import sudokuSolvedState, { SOLVED } from '../../recoil/sudokuSolvedState';
import { buttonLook, textColor } from '../../lib/styleUtils';
import { solveBoardState } from '../../recoil/solveBoardState';

const SolveButton = () => {
  const [solvedBoard, setBoardState] = useRecoilState(solveBoardState);
  const solvedState = useRecoilValue(sudokuSolvedState);
  const disabled = solvedState === SOLVED;

  const handleSolveBoard = () => {
    setBoardState(solvedBoard);
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