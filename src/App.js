import React from 'react';

import './App.css';
import styled from "@emotion/styled"
import CssBaseline from '@mui/material/CssBaseline';
import PokemonInfo from './components/PokemonInfo'
import PokemonFilter from './components/PokemonFilter.jsx';
import PokemonTable from './components/PokemonTable.jsx';
import {createStore } from 'redux'
import {Provider, useSelector, useDispatch} from 'react-redux'

const pokemonReducer = (state = {
  pokemon: [],
  filter: "",
  selectedPokemon: null,
}, action) => {
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
      return state
  }
}

export const store = createStore(pokemonReducer)

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
  const dispatch = useDispatch();
  const pokemon = useSelector(state => state.pokemon);

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

  if (!pokemon) {
    return <div>Loading data</div>;
  }

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

export default () =>  <Provider store={store}> <App/></Provider>;
