import React from 'react'
import styled from "@emotion/styled"
import usePokemonStore from '../store'

const Input = styled.input`
  width: 100%;
  padding: 0.2rem;
  font-size: large;
`

const PokemonFilter = () => {
  const filter = usePokemonStore(state => state.filter)
  const setFilter = usePokemonStore(state => state.setFilter)

  return (
    <Input
      placeholder='Search For a Pokemon...'
      style={{
        backgroundColor: "lightsteelblue"
      }}
      type="text"
      value={filter}
      onChange={(event) => setFilter(event.target.value)}
    />
  )

}


export default PokemonFilter;