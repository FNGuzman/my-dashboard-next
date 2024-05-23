
import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";

const getPokemons = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {

    const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`)
        .then(res => res.json());
    const pokemons = data.results.map(pokemon => (
        {
            id: pokemon.url.split('/').at(-2)!,
            name: pokemon.name,
        }
    ))
    // throw new Error('Esto es un error forzado')
    return pokemons;

}

export const metadata = {
    title: 'Pokedex',
    description: 'Pokedex',
};

export default async function PokemonsPage() {
    const pokemons = await getPokemons(300);
    return (
        <div className="flex flex-col">
            <span className="text-5xl my-2">Listado de Pókemons <small className="text-blue-500">estático</small></span>
            <PokemonGrid pokemons={pokemons} />
        </div>
    );
}