import { createRef } from 'react';

export function generateSudokuBoard(): number[][] {
  return Array.from({ length: 9 }, () => Array.from({ length: 9 }, () => 0));
}

export function generateSudokuCellRefs<T>(): React.RefObject<T>[][] {
  return Array.from({ length: 9 }, () => Array.from({ length: 9 }, () => createRef()));
}

export function isValidValue(
  testValue: number,
  row: number,
  col: number,
  sudoku: number[][]
): boolean {
  return (
    isValidRowValue(testValue, row, sudoku) &&
    isValidColValue(testValue, col, sudoku) &&
    isValidBoxValue(testValue, row, col, sudoku)
  );
}

export function isValidRowValue(testValue: number, row: number, sudoku: number[][]): boolean {
  for (let x = 0; x < sudoku[row].length; x++) {
    const currValue = sudoku[row][x];
    if (testValue === currValue) {
      return false;
    }
  }

  return true;
}

export function isValidColValue(testValue: number, col: number, sudoku: number[][]): boolean {
  for (let y = 0; y < sudoku.length; y++) {
    const currValue = sudoku[y][col];
    if (testValue === currValue) {
      return false;
    }
  }

  return true;
}

export function isValidBoxValue(
  testValue: number,
  row: number,
  col: number,
  sudoku: number[][]
): boolean {
  const rowStart = row - (row % 3);
  const rowEnd = rowStart + 3;
  const colStart = col - (col % 3);
  const colEnd = colStart + 3;

  for (let y = rowStart; y < rowEnd; y++) {
    for (let x = colStart; x < colEnd; x++) {
      const currValue = sudoku[y][x];
      if (testValue === currValue) {
        return false;
      }
    }
  }

  return true;
}
