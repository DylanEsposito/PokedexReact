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

  console.log("This is the card " + entry.name);

  return (
    <div className="pokemon-card">
      <h2>{entry.name}</h2>
      <h4>{entry.id + 1}</h4>
      <button onClick={() => handleRemoveItem(entry.id)}> Remove </button>
    </div>
  );
};

export default MiniCard;