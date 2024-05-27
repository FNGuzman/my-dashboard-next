
import { FavoritePokemons } from "@/pokemons";



export const metadata = {
    title: 'Favoritos',
    description: 'Pokedex',
};

export default async function PokemonsFavoritesPage() {

    return (
        <div className="flex flex-col">
            <span className="text-5xl my-2">Pókemons Favoritos<small className="text-blue-500">Global State</small></span>
            <FavoritePokemons />

        </div>
    );
}


