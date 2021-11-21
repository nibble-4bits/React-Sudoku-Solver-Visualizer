import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { generateEmptySudokuBoard, solveSudokuSteps } from '../util/sudoku';
import { deepCopyArray, sleep } from '../util/util';
import SudokuBoard from './SudokuBoard';

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 10fr 4rem 4rem;
  gap: 2rem;
`;

const SolvingSpeedWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const SolvingSpeedLabel = styled.label`
  font-size: 2rem;
`;

const SolvingSpeedInput = styled.input`
  width: 10rem;
  height: 75%;
  text-align: center;
  font-size: 2rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 5rem;
`;

const Button = styled.button`
  color: #fff;
  background-color: #267ef1;
  font-size: 1.8rem;
  width: 20%;
  border: none;
  border-radius: 5px;

  &:hover {
    background-color: #256cca;
    cursor: pointer;
  }
`;

function SudokuSolver(): JSX.Element {
  // This state variable holds a representation of the sudoku board as an array of 9x9 cells
  const [sudokuBoard, setSudokuBoard] = useState(generateEmptySudokuBoard());
  const [solvingSteps, setSolvingSteps] = useState<number[][][]>([]);

  const [solvingSpeed, setSolvingSpeed] = useState('1');
  const [sudokuState, setSudokuState] = useState({
    isSolving: false,
    isSolved: false,
    isCleared: false,
  });
  const currentStepIdx = useRef(0);

  useEffect(() => {
    if (sudokuState.isCleared) {
      setSudokuBoard(generateEmptySudokuBoard());
      setSudokuState((prev) => ({ ...prev, isCleared: false }));
      currentStepIdx.current = 0;
    }
  }, [sudokuState.isCleared]);

  useEffect(() => {
    const numericSolvingSpeed = parseInt(solvingSpeed);
    let skipPreviousEffect = false;

    async function showSteps() {
      if (numericSolvingSpeed === 0) {
        setSudokuBoard(solvingSteps[solvingSteps.length - 1]);
      } else {
        for (let i = currentStepIdx.current; i < solvingSteps.length; i++) {
          const step = solvingSteps[i];

          if (!skipPreviousEffect) {
            currentStepIdx.current = i;
            setSudokuBoard(step);
            await sleep(numericSolvingSpeed);
          }
        }
      }
    }

    if (sudokuState.isSolving) {
      showSteps();
    }

    return () => {
      skipPreviousEffect = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [solvingSpeed, sudokuState.isSolving]);

  const setSudokuCell = (value: number, row: number, col: number) => {
    const valuesCopy = sudokuBoard.slice();

    valuesCopy[row][col] = value;

    setSudokuBoard(valuesCopy);
  };

  const handleSolvingSpeedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSolvingSpeed(e.target.value);
  };

  const handleClearClick = () => {
    setSudokuState({ isSolving: false, isSolved: false, isCleared: true });
  };

  const handleSolveClick = () => {
    setSudokuState((prev) => ({ ...prev, isSolving: true }));
    const steps = solveSudokuSteps(deepCopyArray(sudokuBoard) as number[][]);
    if (steps) {
      setSolvingSteps(steps);
    }
  };

  const handleGenerateClick = () => {
    console.log('pass');
  };

  return (
    <Wrapper>
      <SudokuBoard
        board={sudokuBoard}
        setBoardCell={setSudokuCell}
        disableUserInput={sudokuState.isSolving || sudokuState.isSolved}
      />
      <SolvingSpeedWrapper>
        <SolvingSpeedLabel htmlFor="solving-speed-input">Solving speed (ms):</SolvingSpeedLabel>
        <SolvingSpeedInput
          id="solving-speed-input"
          type="number"
          min="0"
          max="3000"
          value={solvingSpeed}
          onChange={handleSolvingSpeedChange}
        />
      </SolvingSpeedWrapper>
      <ButtonWrapper>
        <Button type="button" onClick={handleClearClick}>
          Clear
        </Button>
        <Button type="button" onClick={handleSolveClick}>
          Solve
        </Button>
        <Button type="button" onClick={handleGenerateClick}>
          Generate
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
}

export default SudokuSolver;
