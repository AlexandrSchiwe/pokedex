import { useState, useEffect } from 'react';
import PokemonCard from './PokemonCard';
import Axios from 'axios';

const PokemonList = () => {

    const [pokemon, setPokemon] = useState("");

    const [showData, setShowData] = useState({
        name: "",
    });

    const searchPokemon = () => {
        Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then(response => {
            console.log(response.data);
            setShowData({
                name: pokemon,
                img: response.data.sprites.other.dream_world.front_default,
            });
        })
    }

    // useEffect(() => {
    //     fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    //         .then(res => res.json())
    //         .then(json => {
    //             // setNews(json);
    //             setPokemon(json.name);
    //         })
    // }, [])

    // console.log(pokemon);

    return (<section>
        <input type="text" name="" id="" onChange={(event) => setPokemon(event.target.value)} />
        <button onClick={searchPokemon}>Search</button>
        <p>{showData.name}</p>
        <img src={showData.img} alt="" />
    </section>);
}

export default PokemonList;