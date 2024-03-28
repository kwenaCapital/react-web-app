import React from 'react';

import './App.css';
import styled from "@emotion/styled"
import CssBaseline from '@mui/material/CssBaseline';
import PokemonInfo from './components/PokemonInfo'
import PokemonFilter from './components/PokemonFilter.jsx';
import PokemonTable from './components/PokemonTable.jsx';

const Title = styled.h1`
  text-align: center;
`
const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 80% 20%;
  grid-column-gap: 1rem;
`
const PageContainer = styled.div`
  margin: auto;
  width: 800px;
  padding-top: 1rem;
`
function App() {

  return (
    <PageContainer>
      <CssBaseline />
      <Title>Pokemon Search</Title>
      <TwoColumnLayout>
        <div>
          <PokemonFilter
          />
          <PokemonTable
          />
        </div>
        {<PokemonInfo />}
      </TwoColumnLayout>
    </PageContainer>
  );
}

export default App;
