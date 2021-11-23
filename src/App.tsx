import React from 'react';
import {
  RecoilRoot,
} from 'recoil';

import SudokuBoard from './components/SudokuBoard/SudokuBoard';
import BoardStatus from './components/BoardStatus';
import ThemeControl from './components/ThemeControl';

const App = () => {
  return (
    <RecoilRoot>
      <ThemeControl>
        <main className='flex flex-col justify-start items-center min-h-screen dark:bg-gray-900'>
          <BoardStatus />
          <div className='inline-block bg-purple-200 dark:bg-purple-800'>
            <SudokuBoard />
          </div>
        </main>
      </ThemeControl>
    </RecoilRoot>
  );
}

export default App;
