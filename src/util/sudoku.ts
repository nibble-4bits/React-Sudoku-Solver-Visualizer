import { createRef } from 'react';

export function generateSudokuBoard(): number[][] {
  return Array.from({ length: 9 }, () => Array.from({ length: 9 }, () => 0));
}

export function generateSudokuCellRefs<T>(): React.RefObject<T>[][] {
  return Array.from({ length: 9 }, () => Array.from({ length: 9 }, () => createRef()));
}

/**
 * Checks whether a cell (given its row) is part of a certain row in the sudoku board
 * @param referenceRow The row to test against
 * @param testRow The row of the cell to test if it belongs to the `referenceRow`
 * @returns boolean
 */
export function isCellInRow(referenceRow: number, testRow: number): boolean {
  return referenceRow === testRow;
}

/**
 * Checks whether a cell (given its column) is part of a certain column in the sudoku board
 * @param referenceCol The column to test against
 * @param testCol The column of the cell to test if it belongs to the `referenceRow`
 * @returns boolean
 */
export function isCellInCol(referenceCol: number, testCol: number): boolean {
  return referenceCol === testCol;
}

/**
 * Checks whether a cell (given its row and column) is part of a certain box in the sudoku board
 * @param referenceRow The row to test against
 * @param referenceCol The column to test against
 * @param testRow The row of the cell to test if it belongs to the `referenceRow`
 * @param testCol The column of the cell to test if it belongs to the `referenceCol`
 * @returns boolean
 */
export function isCellInBox(
  referenceRow: number,
  referenceCol: number,
  testRow: number,
  testCol: number
): boolean {
  const rowStart = referenceRow - (referenceRow % 3);
  const rowEnd = rowStart + 3;
  const colStart = referenceCol - (referenceCol % 3);
  const colEnd = colStart + 3;

  for (let y = rowStart; y < rowEnd; y++) {
    for (let x = colStart; x < colEnd; x++) {
      if (y === testRow && x === testCol) {
        return true;
      }
    }
  }

  return false;
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
