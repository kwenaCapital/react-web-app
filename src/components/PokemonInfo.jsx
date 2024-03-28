import React from 'react';
import PokemonType from '../PokemonType';
import usePokemonStore from '../store';

const PokemonInfo = () => {
  const selectedPokemon = usePokemonStore(state => state.selectedPokemon)

  return selectedPokemon ? (
    <div style={{ backgroundColor: "darkcyan" }}>
      <h2>{selectedPokemon.name.english}</h2>
      <table>
        <tbody>
          {Object.keys(selectedPokemon.base).map((key) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{selectedPokemon.base[key]}</td>
            </tr>
          ))}
        </tbody>d
      </table>
    </div>
  )
    : null
}

PokemonInfo.propTypes = PokemonType;

export default PokemonInfo;