import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { SimplePokemon } from '@/pokemons';

interface PokemonsState {
    [key: string]: SimplePokemon
}

const initialState: PokemonsState = {
    '1': { id: '1', name: 'bulbasaur' },
    '6': { id: '6', name: 'charizard' },
    '7': { id: '7', name: 'squirtle' },
}

const pokemonsSlice = createSlice({
    name: 'pokemons',
    initialState,
    reducers: {
        toggleFavorite(state, action: PayloadAction<SimplePokemon>) {

            const pokemon = action.payload;
            const { id } = pokemon;

            if (!!state[id]) {
                delete state[id];
                return;
            }
            state[id] = pokemon;

        },

    }
});

export const { toggleFavorite } = pokemonsSlice.actions

export default pokemonsSlice.reducer