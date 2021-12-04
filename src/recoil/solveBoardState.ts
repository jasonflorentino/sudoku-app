import {
  selector,
} from 'recoil';

import sudokuState from './sudokuState';
import { solveBoard } from '../lib/solverUtils';
import { createBoardFromSudokuState } from './utils';

/**
 * Why oh why did I give each value its own Recoil atom?
 */
export const solveBoardState = selector<number[][]>({
  key: 'solveBoardState',
  get: ({ get }) => {
    const board = createBoardFromSudokuState(get, sudokuState);
    solveBoard(board);
    return board;
  },
  set: ({ get, set }, solvedBoard) => {
    const {  
      'box-0-0': box00,
      'box-1-0': box10,
      'box-2-0': box20,
      'box-3-0': box30,
      'box-4-0': box40,
      'box-5-0': box50,
      'box-6-0': box60,
      'box-7-0': box70,
      'box-8-0': box80,
      'box-0-1': box01,
      'box-1-1': box11,
      'box-2-1': box21,
      'box-3-1': box31,
      'box-4-1': box41,
      'box-5-1': box51,
      'box-6-1': box61,
      'box-7-1': box71,
      'box-8-1': box81,
      'box-0-2': box02,
      'box-1-2': box12,
      'box-2-2': box22,
      'box-3-2': box32,
      'box-4-2': box42,
      'box-5-2': box52,
      'box-6-2': box62,
      'box-7-2': box72,
      'box-8-2': box82,
      'box-0-3': box03,
      'box-1-3': box13,
      'box-2-3': box23,
      'box-3-3': box33,
      'box-4-3': box43,
      'box-5-3': box53,
      'box-6-3': box63,
      'box-7-3': box73,
      'box-8-3': box83,
      'box-0-4': box04,
      'box-1-4': box14,
      'box-2-4': box24,
      'box-3-4': box34,
      'box-4-4': box44,
      'box-5-4': box54,
      'box-6-4': box64,
      'box-7-4': box74,
      'box-8-4': box84,
      'box-0-5': box05,
      'box-1-5': box15,
      'box-2-5': box25,
      'box-3-5': box35,
      'box-4-5': box45,
      'box-5-5': box55,
      'box-6-5': box65,
      'box-7-5': box75,
      'box-8-5': box85,
      'box-0-6': box06,
      'box-1-6': box16,
      'box-2-6': box26,
      'box-3-6': box36,
      'box-4-6': box46,
      'box-5-6': box56,
      'box-6-6': box66,
      'box-7-6': box76,
      'box-8-6': box86,
      'box-0-7': box07,
      'box-1-7': box17,
      'box-2-7': box27,
      'box-3-7': box37,
      'box-4-7': box47,
      'box-5-7': box57,
      'box-6-7': box67,
      'box-7-7': box77,
      'box-8-7': box87,
      'box-0-8': box08,
      'box-1-8': box18,
      'box-2-8': box28,
      'box-3-8': box38,
      'box-4-8': box48,
      'box-5-8': box58,
      'box-6-8': box68,
      'box-7-8': box78,
      'box-8-8': box88, 
    } = sudokuState;
    
    const [
      [
        newValbox00,
        newValbox10,
        newValbox20,
        newValbox30,
        newValbox40,
        newValbox50,
        newValbox60,
        newValbox70,
        newValbox80,
      ],
      [
        newValbox01,
        newValbox11,
        newValbox21,
        newValbox31,
        newValbox41,
        newValbox51,
        newValbox61,
        newValbox71,
        newValbox81,
      ],
      [
        newValbox02,
        newValbox12,
        newValbox22,
        newValbox32,
        newValbox42,
        newValbox52,
        newValbox62,
        newValbox72,
        newValbox82,
      ],
      [
        newValbox03,
        newValbox13,
        newValbox23,
        newValbox33,
        newValbox43,
        newValbox53,
        newValbox63,
        newValbox73,
        newValbox83,
      ],
      [
        newValbox04,
        newValbox14,
        newValbox24,
        newValbox34,
        newValbox44,
        newValbox54,
        newValbox64,
        newValbox74,
        newValbox84,
      ],
      [
        newValbox05,
        newValbox15,
        newValbox25,
        newValbox35,
        newValbox45,
        newValbox55,
        newValbox65,
        newValbox75,
        newValbox85,
      ],
      [
        newValbox06,
        newValbox16,
        newValbox26,
        newValbox36,
        newValbox46,
        newValbox56,
        newValbox66,
        newValbox76,
        newValbox86,
      ],
      [
        newValbox07,
        newValbox17,
        newValbox27,
        newValbox37,
        newValbox47,
        newValbox57,
        newValbox67,
        newValbox77,
        newValbox87,
      ],
      [
        newValbox08,
        newValbox18,
        newValbox28,
        newValbox38,
        newValbox48,
        newValbox58,
        newValbox68,
        newValbox78,
        newValbox88,
      ]
    ] = solvedBoard as number[][];
    
    set(box00, { ...get(box00), value: newValbox00 });
    set(box10, { ...get(box10), value: newValbox10 });
    set(box20, { ...get(box20), value: newValbox20 });
    set(box30, { ...get(box30), value: newValbox30 });
    set(box40, { ...get(box40), value: newValbox40 });
    set(box50, { ...get(box50), value: newValbox50 });
    set(box60, { ...get(box60), value: newValbox60 });
    set(box70, { ...get(box70), value: newValbox70 });
    set(box80, { ...get(box80), value: newValbox80 });
    set(box01, { ...get(box01), value: newValbox01 });
    set(box11, { ...get(box11), value: newValbox11 });
    set(box21, { ...get(box21), value: newValbox21 });
    set(box31, { ...get(box31), value: newValbox31 });
    set(box41, { ...get(box41), value: newValbox41 });
    set(box51, { ...get(box51), value: newValbox51 });
    set(box61, { ...get(box61), value: newValbox61 });
    set(box71, { ...get(box71), value: newValbox71 });
    set(box81, { ...get(box81), value: newValbox81 });
    set(box02, { ...get(box02), value: newValbox02 });
    set(box12, { ...get(box12), value: newValbox12 });
    set(box22, { ...get(box22), value: newValbox22 });
    set(box32, { ...get(box32), value: newValbox32 });
    set(box42, { ...get(box42), value: newValbox42 });
    set(box52, { ...get(box52), value: newValbox52 });
    set(box62, { ...get(box62), value: newValbox62 });
    set(box72, { ...get(box72), value: newValbox72 });
    set(box82, { ...get(box82), value: newValbox82 });
    set(box03, { ...get(box03), value: newValbox03 });
    set(box13, { ...get(box13), value: newValbox13 });
    set(box23, { ...get(box23), value: newValbox23 });
    set(box33, { ...get(box33), value: newValbox33 });
    set(box43, { ...get(box43), value: newValbox43 });
    set(box53, { ...get(box53), value: newValbox53 });
    set(box63, { ...get(box63), value: newValbox63 });
    set(box73, { ...get(box73), value: newValbox73 });
    set(box83, { ...get(box83), value: newValbox83 });
    set(box04, { ...get(box04), value: newValbox04 });
    set(box14, { ...get(box14), value: newValbox14 });
    set(box24, { ...get(box24), value: newValbox24 });
    set(box34, { ...get(box34), value: newValbox34 });
    set(box44, { ...get(box44), value: newValbox44 });
    set(box54, { ...get(box54), value: newValbox54 });
    set(box64, { ...get(box64), value: newValbox64 });
    set(box74, { ...get(box74), value: newValbox74 });
    set(box84, { ...get(box84), value: newValbox84 });
    set(box05, { ...get(box05), value: newValbox05 });
    set(box15, { ...get(box15), value: newValbox15 });
    set(box25, { ...get(box25), value: newValbox25 });
    set(box35, { ...get(box35), value: newValbox35 });
    set(box45, { ...get(box45), value: newValbox45 });
    set(box55, { ...get(box55), value: newValbox55 });
    set(box65, { ...get(box65), value: newValbox65 });
    set(box75, { ...get(box75), value: newValbox75 });
    set(box85, { ...get(box85), value: newValbox85 });
    set(box06, { ...get(box06), value: newValbox06 });
    set(box16, { ...get(box16), value: newValbox16 });
    set(box26, { ...get(box26), value: newValbox26 });
    set(box36, { ...get(box36), value: newValbox36 });
    set(box46, { ...get(box46), value: newValbox46 });
    set(box56, { ...get(box56), value: newValbox56 });
    set(box66, { ...get(box66), value: newValbox66 });
    set(box76, { ...get(box76), value: newValbox76 });
    set(box86, { ...get(box86), value: newValbox86 });
    set(box07, { ...get(box07), value: newValbox07 });
    set(box17, { ...get(box17), value: newValbox17 });
    set(box27, { ...get(box27), value: newValbox27 });
    set(box37, { ...get(box37), value: newValbox37 });
    set(box47, { ...get(box47), value: newValbox47 });
    set(box57, { ...get(box57), value: newValbox57 });
    set(box67, { ...get(box67), value: newValbox67 });
    set(box77, { ...get(box77), value: newValbox77 });
    set(box87, { ...get(box87), value: newValbox87 });
    set(box08, { ...get(box08), value: newValbox08 });
    set(box18, { ...get(box18), value: newValbox18 });
    set(box28, { ...get(box28), value: newValbox28 });
    set(box38, { ...get(box38), value: newValbox38 });
    set(box48, { ...get(box48), value: newValbox48 });
    set(box58, { ...get(box58), value: newValbox58 });
    set(box68, { ...get(box68), value: newValbox68 });
    set(box78, { ...get(box78), value: newValbox78 });
    set(box88, { ...get(box88), value: newValbox88 });
  }
});