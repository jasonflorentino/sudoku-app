import React from 'react';
import {
  RecoilRoot,
} from 'recoil';

import SudokuBoard from './components/SudokuBoard/SudokuBoard';
import BoardStatus from './components/BoardStatus';

const App = () => {
  return (
    <RecoilRoot>
      <div className='dark'>
        <main className='flex flex-col justify-center items-center min-h-screen dark:bg-gray-900'>
          <BoardStatus />
          <div className='inline-block bg-purple-200 dark:bg-purple-800'>
            <SudokuBoard />
          </div>
        </main>
      </div>
    </RecoilRoot>
  );
}

export default App;
