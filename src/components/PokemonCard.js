import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import PokemonImg from './PokemonImg';

const PokemonCard = ({ pokePreview }) => { 
  //DEEM This is bad since we're declaring each book preview to instaniate useNavigate and a clicker
  const navigate = useNavigate();
  console.log("This is the id " + pokePreview.pokemon_id);
  /*const loadBook = (pBook_Id) => {
    navigate(`/reader/${pBook_Id}`);
  };*/
  
  //<button onClick={handleClick}>Click </button>

  //<img src={(process.env.PUBLIC_URL + bookPreview.image)} alt={bookPreview.title}></img>
  //<img src={logo} alt="Logo" />;
  //DEE For button, it will take the book_id that is passed and should load it into the reader page
  //<button onClick={() => loadBook(bookPreview.book_id)}>Click </button>
  //<PokemonImg pokeId={pokePreview.poke_id}></PokemonImg>

  //DEEM This is bad since we're declaring each book preview to instaniate useNavigate and a clicker

  const loadPokeSingle = (pBook_Id) => {
    navigate(`/Pokemon/${pBook_Id}`);
  };

  return (
    <div className="pokemon-card">
      <h2>{pokePreview.pokemon_name}</h2>
      <button></button>
      <p>Type: {pokePreview.pokemon_type}</p>
      <PokemonImg pokemonId={pokePreview.pokemon_id}></PokemonImg>
      <button onClick={() => loadPokeSingle(pokePreview.pokemon_id)}> Click </button>
    </div>
  );
};

export default PokemonCard;