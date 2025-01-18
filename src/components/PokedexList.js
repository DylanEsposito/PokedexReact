import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PokemonCard from './PokemonCard';

const PokedexList = () => { 
  const [pokedexEntries, setPokedexEntries] = useState(null);

  useEffect(() => {

    const fetchLibrary = async () => {
      try {
        const response = await axios.get('http://localhost:3085/pokemon/all');
        console.log(response.data);
        setPokedexEntries(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchLibrary();
  }, []);

  if (!pokedexEntries) {
    return <div><p>No Entries</p></div> // Display a loading message while fetching data
  }else{
    console.log("We got a bookcase with something");
  }

  return (
    <div>
      {pokedexEntries.map(pokemon => (
        <PokemonCard key={pokemon.pokemon_id} pokePreview={pokemon} />
      ))}
    </div>
  );
};

export default PokedexList;