import React from 'react';

import './App.css';
import styled from "@emotion/styled"
import CssBaseline from '@mui/material/CssBaseline';
import PokemonInfo from './components/PokemonInfo'
import PokemonFilter from './components/PokemonFilter.jsx';
import PokemonTable from './components/PokemonTable.jsx';
import PokemonContext from './PokemonContext.js';

const pokemonReducer = (state, action) => {
  switch (action.type) {
    case "SET_FILTER":
      return {
        ...state,
        filter: action.payload,
      };
    case "SET_POKEMON":
      return {
        ...state,
        pokemon: action.payload,
      };
    case "SET_SELECTED_POKEMON":
      return {
        ...state,
        selectedPokemon: action.payload,
      };
    default:
      throw new Error("No action")
  }
}

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
const Input = styled.input`
  width: 100%;
  padding: 0.2rem;
  font-size: large;
`


function App() {
  const [state, dispatch] = React.useReducer(pokemonReducer, {
    pokemon: [],
    filter: "",
    selectedPokemon: null,
  })

  // useEffect
  React.useEffect(() => {
    fetch("/react-web-app/pokemon.json")
      .then((res) => res.json())
      .then((data) =>
        // pokemonSet(data)
        dispatch({
          type: "SET_POKEMON",
          payload: data,
        })
      )
  }, [])

  if (!state.pokemon) {
    return <div>Loading data</div>;
  }

  return (
    <PokemonContext.Provider
      value={
        {
          state,
          dispatch
        }
      }
    >
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
    </PokemonContext.Provider>
  );
}

export default App;
