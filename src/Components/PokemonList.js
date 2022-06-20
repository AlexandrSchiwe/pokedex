import { useState } from 'react';
import Axios from 'axios';

const PokemonList = () => {

    const [pokemon, setPokemon] = useState("");

    const [showData, setShowData] = useState({
        name: "",
        id: "",
    });

    const searchPokemon = () => {
        Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then(response => {
            console.log(response.data);
            setShowData({
                name: pokemon,
                id: response.data.id,
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

    return (<section className="renderContainer">
        <input type="text" name="" id="" onChange={(event) => setPokemon(event.target.value)} />
        <button onClick={searchPokemon}>Search</button>
        <div className="render">
            <p>{showData.name.charAt().toUpperCase() + showData.name.slice(1)}</p>
            <img src={showData.img} alt="" />
            <p>{showData.id}</p>
        </div>
    </section>);
}

export default PokemonList;