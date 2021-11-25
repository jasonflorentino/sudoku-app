import React from 'react';
import {
  useRecoilState,
} from 'recoil'

import sudokuState from "../../recoil/sudokuState";
import activeNumBoxState from "../../recoil/activeNumBoxState";
import { buttonLook, textColor } from "../../lib/styleUtils";

type Props = {
  boxId?: string
}

const NumBoxControl: React.FC<Props> = ({ boxId = '' }) => {
  const [currentNumBoxState, setCurrentNumBoxState] = useRecoilState(
    boxId ? sudokuState[boxId] : activeNumBoxState
  );
  
  if (!boxId) return null;

  const { isLocked, value } = currentNumBoxState;

  const handleNumBoxLockChange = () => {
    if (!value) return;
    
    setCurrentNumBoxState({
      ...currentNumBoxState,
      isLocked: !isLocked
    })
  }

  return (
    <div className="p-3 w-40">
      <div className={`p-2 flex justify-center text-4xl font-bold ${textColor}`}>
        {currentNumBoxState.value || "0"}
      </div>
      <div className={`flex justify-center`}>
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
    </div>
  )
}

export default NumBoxControl;