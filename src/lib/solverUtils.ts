export function assertIsSolved(board: number[][]) {
  for (let y = 0; y < 9; y++) {
    for (let x = 0; x < 9; x++)  {
        const val = board[y][x];
        board[y][x] = 0;
        let possibleNums = [];

        for (let num = 1; num <= 9; num++) {
            // eslint-disable-next-line
            if (isPossibleNum(board, y, x, num)) {
                possibleNums.push(num);
            }
        }

        if (possibleNums.length > 1) return false;
        if (possibleNums[0] !== val) return false;
        board[y][x] = val;
    }
  }
return true;
}

export function isPossibleNum(
  board: number[][], 
  y: number, 
  x: number, 
  num: number
) {
  let isValidRow = true;
  let isValidCol = true;
  let isValidBox = true;
  
  for (const val of board[y]) {
      if (num === val) isValidRow = false;
  }

  for (const row of board) {
      if (num === row[x]) isValidCol = false;
  }

  for (let y2 = 0; y2 < 3; y2++) {
      for (let x2 = 0; x2 < 3; x2++) {
          const relativeY = y - (y % 3) + y2;
          const relativeX = x - (x % 3) + x2;
          const val = board[relativeY][relativeX];
          if (num === val) isValidBox = false;
      }
  }

  return isValidRow && isValidCol && isValidBox;
}

export function isThisBoxInGroupWithActive(thisId: string, activeId: string) {
    const [ , currXVal, currYVal ] = thisId.split('-');
    const [ , activeXVal, activeYVal ] = activeId.split('-');
    if (activeXVal === currXVal) return true;
    if (activeYVal === currYVal) return true;
    return false;
}