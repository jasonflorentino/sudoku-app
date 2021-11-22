import {
  RecoilRoot,
} from 'recoil';

import SudokuBoard from './components/SudokuBoard/SudokuBoard';
import BoardStatus from './components/BoardStatus';

function App() {
  return (
    <RecoilRoot>
      <main className='flex flex-col justify-center items-center min-h-screen'>
        <BoardStatus />
        <div className='inline-block bg-purple-200'>
          <SudokuBoard />
        </div>
      </main>
    </RecoilRoot>
  );
}

export default App;
