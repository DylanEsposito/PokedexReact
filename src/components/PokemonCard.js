import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import PokemonImg from './PokemonImg';
import { useSelector, useDispatch } from 'react-redux';
import { addEntry, removeEntry } from '../features/team/teamActions';

const PokemonCard = ({ pokePreview }) => { 
  
  //DEEM This is bad since we're declaring each book preview to instaniate useNavigate and a clicker
  const navigate = useNavigate();
  console.log("This is the id " + pokePreview.pokemon_id);

  //Saving it to the persist
  const dispatch = useDispatch();
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

  let handleRemoveItem = (id) => {
    dispatch(removeEntry(id));
  };

  let handleAddItem = ( currPoke) => {
    console.log("In handleAddItem trying to push" + currPoke);
    let poke = { id: currPoke.id, name: currPoke.name };
    dispatch(addEntry(poke));
  };

  return (
    <div className="pokemon-card">
      <h2>{pokePreview.pokemon_name}</h2>
      <button onClick={() => handleAddItem(pokePreview)}> Add </button>
      <button onClick={() => handleRemoveItem(pokePreview.id)}> Remove </button>
      <p>Type: {pokePreview.type}</p>
      <PokemonImg pokemonId={pokePreview.id}></PokemonImg>
      <button onClick={() => loadPokeSingle(pokePreview.name)}> Click </button>
    </div>
  );
};

export default PokemonCard;