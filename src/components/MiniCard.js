import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import PokemonImg from './PokemonImg';

import { useSelector, useDispatch } from 'react-redux';
import { addEntry, removeEntry } from '../features/team/teamActions';

const MiniCard = ({ entry }) => { 

  const dispatch = useDispatch();

  let handleRemoveItem = (id) => {
    dispatch(removeEntry(id));
  };
  
  let handleAddItem = ( currPoke) => {
    let poke = { id: currPoke.pokemon_id, name: currPoke.pokemon_name };
    dispatch(addEntry(poke));
  };

  console.log("This is the card " + entry.name);

  return (
    <div className="pokemon-card">
      <h2>{entry.name}</h2>
      <h4>{entry.id + 1}</h4>
    </div>
  );
};

export default MiniCard;