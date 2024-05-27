import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { SimplePokemon } from '@/pokemons';

interface PokemonsState {
    favorites: { [key: string]: SimplePokemon }
}

const getIniitalState = (): PokemonsState => {
    const favorites = JSON.parse(localStorage.getItem('favorite-pokemons') ?? '{}')
    return favorites
}

const initialState: PokemonsState = {
    favorites: {},
    // ...getIniitalState(),
}

const pokemonsSlice = createSlice({
    name: 'pokemons',
    initialState,
    reducers: {

        setFavoritePokemons(state, action: PayloadAction<{ [key: string]: SimplePokemon }>) {
            state.favorites = action.payload;
        },
        toggleFavorite(state, action: PayloadAction<SimplePokemon>) {

            const pokemon = action.payload;
            const { id } = pokemon;

            if (!!state.favorites[id]) {
                delete state.favorites[id];
                // return;
            }
            else {

                state.favorites[id] = pokemon;
            }
            //TODO: no se debe hacer en redux
            localStorage.setItem('favorite-pokemons', JSON.stringify(state.favorites))
        },

    }
});

export const { toggleFavorite, setFavoritePokemons } = pokemonsSlice.actions

export default pokemonsSlice.reducer