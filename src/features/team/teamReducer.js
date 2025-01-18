import { createSlice } from '@reduxjs/toolkit'
import { add_entry, remove_entry} from './teamActions';
import { act } from 'react';

const initial = {
    items: []
};

const pokemonReducer = (state = initial, action) => {
    switch (action.type) {
      case add_entry:
        if(state.items.length > 5){
          console.log("Cannot add more to team, max size of team reached of " + 6);
          return state;
        }
        console.log("Trying to add in new entry of " + action.payload.name);
        let addItemCheck = true;
        for(let i = 0; i < state.items.length; i++){
          if(state.items[i].id === action.payload.id){
            console.log("Found id, not adding in");
            addItemCheck = false;
          }
        }

        if(addItemCheck){
          console.log("Adding in new item");
          let test = {
            id: action.payload.id,
            name: action.payload.name
          }
          state.items.push(test);
        }
        
        return state;
      case remove_entry:
        console.log("Trying to remove entry " + action.payload);
        console.log(initial);

        let removeItemIndex = -1;
        
        for(let i = 0; i < state.items.length; i++){
          if(state.items[i].id === action.payload.id){
            console.log("Found id, not adding in");
            removeItemIndex = i;
          }
        }

        if(removeItemIndex > -1){
          console.log("Removing entry at index " + removeItemIndex)
          state.items.splice(removeItemIndex, 1);
          console.log(state.items);
        }
        //DEEM Update, seems a bit too advanced for me
        return { ...state, items: state.items.filter((item) => item.id !== action.payload) };
      default:
        return state;
    }
};

export default pokemonReducer