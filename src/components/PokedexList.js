import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PokemonCard from './PokemonCard';

const PokedexList = ({data}) => { 

  console.log("In the pokedex list component")

  console.log(data);
  return (
    <div>
      {data.map(pokemon => (
        <PokemonCard key={pokemon.id} pokePreview={pokemon} />
      ))}
    </div>
  );
};

export default PokedexList;