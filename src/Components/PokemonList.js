import { useState, useEffect } from 'react';
import PokemonCard from './PokemonCard';

const PokemonList = () => {

    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=151/")
            .then(res => res.json())
            .then(json => {
                // setNews(json);
                setPokemon(json.results);
            })
    }, [])

    console.log(pokemon);

    return (<section>
        {pokemon.map((elt, i) =>
            <PokemonCard
                key={i}
                name={elt.name}
            />
        )}
    </section>);
}

export default PokemonList;