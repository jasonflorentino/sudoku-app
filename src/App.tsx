import React from 'react';
import {
  useRecoilValue,
} from 'recoil';

import SudokuBoard from './components/SudokuBoard';
import ThemeControl from './components/ThemeControl';
import NumBoxControl from './components/NumBoxControl';
import activeNumBoxState from './recoil/activeNumBoxState';

const App = () => {
  const activeNumBox = useRecoilValue(activeNumBoxState);
  const { id: boxId } = activeNumBox;
  
  return (
    <ThemeControl>
      <main className='flex flex-col justify-start items-center min-h-screen dark:bg-gray-900'>
        <div className='inline-block bg-purple-200 dark:bg-purple-600 flex flex-col'>
          <NumBoxControl boxId={boxId} />
          <SudokuBoard />
        </div>
      </main>
    </ThemeControl>
  );
}

export default App;
