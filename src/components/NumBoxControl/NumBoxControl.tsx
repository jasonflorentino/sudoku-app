import React from 'react';
import {
  useRecoilState,
} from 'recoil'

import sudokuState from "../../recoil/sudokuState";
import activeNumBoxState from "../../recoil/activeNumBoxState";
import { buttonLook, textColor } from "../../lib/styleUtils";
import BoardStatus from './BoardStatus';
import SolveButton from "./SolveButton";

const NumBoxControl = ({ boxId = '' }: { boxId?: string }) => {
  const [currentNumBoxState, setCurrentNumBoxState] = useRecoilState(
    boxId ? sudokuState[boxId] : activeNumBoxState
  );

  const { isLocked, value } = currentNumBoxState;

  const handleNumBoxLockChange = () => {
    if (!value) return;
    
    setCurrentNumBoxState({
      ...currentNumBoxState,
      isLocked: !isLocked
    });
  };

  const noBoxStyles = !boxId ? 'opacity-50' : '';
  const valueContainerStyles = 'p-2 mr-2 flex justify-center text-4xl font-bold';

  return (
    <div className="p-3 w-full flex justify-start items-center">
      <div className={`${valueContainerStyles} ${textColor} ${noBoxStyles}`}>
        {currentNumBoxState.value || "0"}
      </div>
      <div className={`flex justify-center ${noBoxStyles}`}>
        <label 
          className={`mr-1 font-bold ${textColor} ${buttonLook}`} 
          htmlFor="numBoxLocked"
        >
          {isLocked ? "🔒 Locked" : "🔓 Unlocked"}
        </label>
        <input 
            className="m-2 hidden"
            type="checkbox" 
            id="numBoxLocked" 
            name="theme" 
            value="dark" 
            checked={isLocked} 
            onChange={handleNumBoxLockChange}
          />
      </div>
      <div className="ml-auto flex items-center">
        <BoardStatus />
        <SolveButton />
      </div>
    </div>
  );
};

export default NumBoxControl;