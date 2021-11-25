import React from 'react';
import {
  useRecoilValue
} from 'recoil';

import SudokuBoard from './components/SudokuBoard';
import BoardStatus from './components/BoardStatus';
import ThemeControl from './components/ThemeControl';
import NumBoxControl from './components/NumBoxControl';
import activeNumBoxState from './recoil/activeNumBoxState';

const App: React.FC = () => {
  const activeNumBox = useRecoilValue(activeNumBoxState);
  const { id: boxId } = activeNumBox;
  
  return (
    <ThemeControl>
      <main className='flex flex-col justify-start items-center min-h-screen dark:bg-gray-900'>
        <BoardStatus />
        <div className='inline-block bg-purple-200 dark:bg-purple-600 flex flex-col'>
          <SudokuBoard />
          <NumBoxControl boxId={boxId} />
        </div>
      </main>
    </ThemeControl>
  );
}

export default App;
