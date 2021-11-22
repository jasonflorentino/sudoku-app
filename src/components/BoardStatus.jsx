import {
  useRecoilValue,
} from 'recoil';

import sudokuSolvedState, { SOLVED } from '../recoil/sudokuSolvedState';

const BoardStatus = () => {
  const solvedState = useRecoilValue(sudokuSolvedState);
  const bgColor = solvedState === SOLVED ? 'bg-green-500' : 'bg-red-500';

  return (
    <div className={'my-4 px-2 py-1 rounded font-bold text-white ' + bgColor}>
      {solvedState}
    </div>
  )
}

export default BoardStatus;