import React from "react";

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="card bg-black">
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <h3 className=" px-4 py-5 text-white text-4xl font-bold">{pokemon.name}</h3>
      <p className=" text-3xl text-white">ID: {pokemon.id}</p>
      <p className=" text-3xl text-white">Type: {pokemon.types.map((type) => type.type.name).join(", ")}</p>
      <p className="text-3xl text-white">Abilities: {pokemon.abilities.map((ability) => ability.ability.name).join(", ")}</p>
      {/* Add more data fields as needed */}
    </div>
  );
};

export default PokemonCard;
