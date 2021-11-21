import React from 'react';
import styled from 'styled-components';
import SudokuSolver from './components/SudokuSolver';

const AppWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App(): JSX.Element {
  return (
    <AppWrapper>
      <SudokuSolver />
    </AppWrapper>
  );
}

export default App;
