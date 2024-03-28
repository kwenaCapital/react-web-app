import usePokemonStore from "../store";
import PokemonRow from "./PokemonRow";

const PokemonTable = () => {
    const pokemon = usePokemonStore(state => state.pokemon)
    const filter = usePokemonStore(state => state.filter)
    const setSelectedPokemon = usePokemonStore(state => state.setSelectedPokemon)


    return (
        <table width={'100%'} style={{backgroundColor: 'darkgoldenrod'}}>
            <tbody>
                {pokemon
                    .filter(({ name: { english } }) =>
                        english
                            .toLocaleLowerCase()
                            .includes(filter.toLocaleLowerCase())
                    )
                    .slice(0, 20)
                    .map((pokemon) => (
                        <PokemonRow
                            pokemon={pokemon}
                            onClick={setSelectedPokemon}
                        />
                    ))}
            </tbody>
        </table>
    );
}

export default PokemonTable;