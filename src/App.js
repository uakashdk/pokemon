import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./Component/SearchBar";
import PokemonCard from './Component/PokemonCard'
import './App.css'
const App = () => {
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);

  const searchPokemon = async (searchTerm) => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`);
      setPokemon(response.data);
      setError(null);
    } catch (error) {
      setPokemon(null);
      setError("Pokémon not found");
    }
  };

  return (
    <div className="container bg-black">
      <h1 className=" text-white text-4xl">Pokémon Search</h1>
      <SearchBar onSearch={searchPokemon} />
      {pokemon && <PokemonCard pokemon={pokemon} />}
      {error && <p>{error}</p>}
    </div>
  );
};

export default App;

