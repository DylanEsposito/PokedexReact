import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Pokemon from '../routes/SinglePokemon';
import PokemonImg from './PokemonImg';
import PokemonCard from './PokemonCard';

const PokedexList = () => { 
  /*DEEM This is bad since we're declaring each book preview to instaniate useNavigate and a clicker
  const navigate = useNavigate();

  const loadBook = (pBook_Id) => {
    navigate(`/reader/${pBook_Id}`);
  };*/
  
  //<button onClick={handleClick}>Click </button>

  //<img src={(process.env.PUBLIC_URL + bookPreview.image)} alt={bookPreview.title}></img>
  //<img src={logo} alt="Logo" />;
  //DEE For button, it will take the book_id that is passed and should load it into the reader page

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