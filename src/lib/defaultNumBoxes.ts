/**
 * Default state for the Sudoku Board.
 * 
 * Commented code at bottom can be used to more easily
 * generate a new `defaultNumBoxes` array by uncommenting,
 * changing the `defaultState` var and running this file
 * from the command line.
 */

type NumBoxDefaultValue = [string, number | string];

const defaultNumBoxes: NumBoxDefaultValue[] = [
  ['box-0-0', 3],
  ['box-1-0', 4],
  ['box-2-0', 5],
  ['box-3-0', 6],
  ['box-4-0', 7],
  ['box-5-0', 8],
  ['box-6-0', 9],
  ['box-7-0', 1],
  ['box-8-0', 2],
  ['box-0-1', 6],
  ['box-1-1', 7],
  ['box-2-1', 8],
  ['box-3-1', 9],
  ['box-4-1', 1],
  ['box-5-1', 2],
  ['box-6-1', 3],
  ['box-7-1', 4],
  ['box-8-1', 5],
  ['box-0-2', 9],
  ['box-1-2', 1],
  ['box-2-2', 2],
  ['box-3-2', 3],
  ['box-4-2', 4],
  ['box-5-2', 5],
  ['box-6-2', 6],
  ['box-7-2', 7],
  ['box-8-2', 8],
  ['box-0-3', 1],
  ['box-1-3', 2],
  ['box-2-3', 3],
  ['box-3-3', 4],
  ['box-4-3', 5],
  ['box-5-3', 6],
  ['box-6-3', 7],
  ['box-7-3', 8],
  ['box-8-3', 9],
  ['box-0-4', 4],
  ['box-1-4', 5],
  ['box-2-4', 6],
  ['box-3-4', 7],
  ['box-4-4', 8],
  ['box-5-4', 9],
  ['box-6-4', 1],
  ['box-7-4', 2],
  ['box-8-4', 3],
  ['box-0-5', 7],
  ['box-1-5', 8],
  ['box-2-5', 9],
  ['box-3-5', 1],
  ['box-4-5', 2],
  ['box-5-5', 3],
  ['box-6-5', 4],
  ['box-7-5', 5],
  ['box-8-5', 6],
  ['box-0-6', 2],
  ['box-1-6', 3],
  ['box-2-6', 4],
  ['box-3-6', 5],
  ['box-4-6', 6],
  ['box-5-6', 7],
  ['box-6-6', 8],
  ['box-7-6', 9],
  ['box-8-6', 1],
  ['box-0-7', 5],
  ['box-1-7', 6],
  ['box-2-7', 7],
  ['box-3-7', 8],
  ['box-4-7', 9],
  ['box-5-7', 1],
  ['box-6-7', 2],
  ['box-7-7', 3],
  ['box-8-7', 4],
  ['box-0-8', 8],
  ['box-1-8', 9],
  ['box-2-8', 1],
  ['box-3-8', 2],
  ['box-4-8', 3],
  ['box-5-8', 4],
  ['box-6-8', 5],
  ['box-7-8', 6],
  ['box-8-8', 7],
]

export default defaultNumBoxes;

// const defaultState = [
//   [3,4,5,6,7,8,9,1,2],
//   [6,7,8,9,1,2,3,4,5],
//   [9,1,2,3,4,5,6,7,8],
//   [1,2,3,4,5,6,7,8,9],
//   [4,5,6,7,8,9,1,2,3],
//   [7,8,9,1,2,3,4,5,6],
//   [2,3,4,5,6,7,8,9,1],
//   [5,6,7,8,9,1,2,3,4],
//   [8,9,1,2,3,4,5,6,7],
// ]

// for (let y = 0; y < 9; y++) {
//   for (let x = 0; x < 9; x++) {
//     console.log(`['box-${x}-${y}', ${defaultState[y][x]}],`)
//   }
// }

// node ./src/lib/defaultNumBoxes.js