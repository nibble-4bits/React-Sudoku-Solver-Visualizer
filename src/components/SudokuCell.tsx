import React, { forwardRef } from 'react';
import styled from 'styled-components';

interface InputProps {
  row: number;
  col: number;
  highlight: boolean;
}

const Input = styled.input<InputProps>`
  width: 100%;
  height: 100%;
  border: 1px solid #000;
  border-left: ${(props) => props.col > 0 && props.col % 3 === 0 && '3px solid #000'};
  border-top: ${(props) => props.row > 0 && props.row % 3 === 0 && '3px solid #000'};
  background-color: ${(props) => props.highlight && '#ddd'};
  outline: none;
  font-size: 4rem;
  text-align: center;
  padding: 0;

  // Hide increment/decrement arrows
  -moz-appearance: textfield;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

interface SudokuCellProps {
  row: number;
  col: number;
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus: React.Dispatch<React.SetStateAction<number[]>>;
  isHighlighted: boolean;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

function SudokuCell(props: SudokuCellProps, ref: React.ForwardedRef<HTMLInputElement>) {
  const { row, col, value, onChange, onFocus, isHighlighted, onKeyDown } = props;

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // First, call props onKeyDown event handler, if defined
    if (onKeyDown) {
      onKeyDown(e);
    }

    const {
      key,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      target: { value },
    } = e;

    // Prevent up and down arrow keys from incrementing/decrementing focused cell value
    if (['ArrowUp', 'ArrowDown'].includes(key)) {
      e.preventDefault();
    }

    // Prevent entering more than 1 digit, if cell already has a value and the pressed key is a number key
    if (value && /\d/.test(key)) {
      e.preventDefault();
    }
  };

  const handleFocus = () => {
    onFocus([row, col]);
  };

  const handleBlur = () => {
    onFocus([-1, -1]);
  };

  return (
    <Input
      ref={ref}
      type="number"
      min="1"
      max="9"
      onKeyDown={handleKeyUp}
      onChange={onChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      value={value || ''}
      row={row}
      col={col}
      highlight={isHighlighted}
    />
  );
}

export default forwardRef(SudokuCell);
