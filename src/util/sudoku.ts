import { createRef } from 'react';

export function generateSudokuBoard(): number[][] {
  return Array.from({ length: 9 }, () => Array.from({ length: 9 }, () => 0));
}

export function generateSudokuCellRefs<T>(): React.RefObject<T>[][] {
  return Array.from({ length: 9 }, () => Array.from({ length: 9 }, () => createRef()));
}
