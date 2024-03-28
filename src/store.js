import { create } from 'zustand'

const usePokemonStore = create((set) => ({
    pokemon: [],
    filter: "",
    selectedPokemon: null,
    setPokemon: (pokemon) => set((state) => ({ ...state, pokemon })),
    setFilter: (filter) => set((state) => ({ ...state, filter })),
    setSelectedPokemon: (selectedPokemon) => set((state) => ({ ...state, selectedPokemon })),
}))

fetch("/react-web-app/pokemon.json")
    .then((res) => res.json())
    .then(pokemon => usePokemonStore.setState((state) => ({
        ...state,
        pokemon,
    })))

export default usePokemonStore