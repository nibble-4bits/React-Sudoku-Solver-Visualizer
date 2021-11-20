import React from 'react';
import styled from 'styled-components';
import SudokuBoard from './components/SudokuBoard';

const AppWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App(): JSX.Element {
  return (
    <AppWrapper>
      <SudokuBoard />
    </AppWrapper>
  );
}

export default App;
