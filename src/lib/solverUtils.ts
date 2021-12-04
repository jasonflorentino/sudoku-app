/**
 * Checks that a board is solved by checking
 * each value and asserting that (a) there is not
 * more than one possible value for that position,
 * and (b) and the value it found is the only 
 * possible value.
 */
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

/**
 * Checks if the number `num` is a valid
 * choice for position `(x, y)` by asserting
 * its uniqeness in its row, column, and box group.
 */
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

/**
 * Recursively solves a board in place as implemented in:
 * https://github.com/jasonflorentino/algorithms-dataStructures/tree/main/sudoku
 */
export function solveBoard(board: number[][]) {
  for (let y = 0; y < 9; y++) {
      for (let x = 0; x < 9; x++)  {
          if (board[y][x] === 0) {
              for (let n = 1; n <= 9; n++) {
                  if (isPossibleNum(board,y,x,n)) {
                      board[y][x] = n;
                      if (solveBoard(board)) {
                          return board;
                      } else {
                          board[y][x] = 0;
                      }
                  }
              }
              return false;
          }
      }
  }
  return board;
}

/** 
 * Checks if 'this' boxId is in one of the same
 * groups as the 'active' boxId.
 */
export function isThisBoxInGroupWithActive(thisId: string, activeId: string) {    
    const [ , currXVal, currYVal ] = thisId.split('-');
    const [ , activeXVal, activeYVal ] = activeId.split('-');
    const boxGroupCoords = makeBoxGroupCoords(activeXVal, activeYVal);

    if (activeXVal === currXVal) return true;
    if (activeYVal === currYVal) return true;
    if (boxGroupCoords[`${currXVal}-${currYVal}`]) return true;
    return false;
}

/** 
 * Make lookup of the coordinates for the Box Group 
 * of the given x and y coords.
 * These groups don't change so it would be obviously 
 * be better to just have these groups pre-written as 
 * a constant somewhere, but we're prioritizing fun
 * over performance.
 */
function makeBoxGroupCoords(x: string, y: string) {
  const x1 = Number(x); 
  const y1 = Number(y);
  const boxCoords: {
    [key: string]: boolean;
  } = {};

  for (let y2 = 0; y2 < 3; y2++) {
    for (let x2 = 0; x2 < 3; x2++) {
        const relativeY = y1 - (y1 % 3) + y2;
        const relativeX = x1 - (x1 % 3) + x2;
        boxCoords[`${relativeX}-${relativeY}`] = true;
    }
  }

  return boxCoords;
}