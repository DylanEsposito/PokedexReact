import React, { Fragment, useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import {
  StyleSheet,
  View,
  SafeAreaView,
} from 'react-native';
import PokemonImg from './PokemonImg';
import { addEntry, removeEntry } from '../features/team/teamActions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

const PokemonInfo = ({ poke_id }) => {

  const [pokemonName, setPokemonName] = useState('');
  const [pokemonType, setPokemonType] = useState('');
  const [pokemonDesc, setPokemonDesc] = useState('');
  console.log("This is the pokemon id " + poke_id);

  const dispatch = useDispatch();

  //DEE Refactor and rename this to something better Should be called only once on load
  useEffect(() => {
    const sendMessageToBackend = async () => {
      try {
        let tempValue = poke_id;
        console.log("Temp value is " + tempValue);
        //console.log("Making request currently");
        const response = await axios.post('http://localhost:3085/pokemon/single', {
          number: tempValue, // Sending the input value
        });
        console.log(response);
        setPokemonName(response.data.name);
        setPokemonType(response.data.type);
        setPokemonDesc(response.data.desc);
        //setPokemonImg(bookResponse.data)
        /*
        const tocResponse = await axios.get('http://localhost:3085/books/tableofcontents');
        console.log("We got a response when fetching the table of contents");
        console.log(tocResponse.data);
        setTableOfContents(tocResponse.data);*/
      } catch (error) {
        console.error('Error sending message:', error);
      }
    }
    sendMessageToBackend();
  }, []);

  let handleRemoveItem = (id) => {
      dispatch(removeEntry(id));
  };
  
  let handleAddItem = (pId, pName) => {
    console.log("In handleAddItem trying to push" + pName);
    let poke = { id: pId, name: pName };
    dispatch(addEntry(poke));
  };
  /*
  const handleRemoveItem = (poke_id) => {
    dispatch(removeEntry(poke_id));
  };
  
  const handleAddItem = ( poke_id) => {
    console.log("In handleAddItem trying to push" + poke_id);
    let poke = { id: poke_id };
    dispatch(addEntry(poke));
  };*/

  return ( 
    <div>
      <SafeAreaView style={styles.container}>
        <View>
          <div>
              <h2>{pokemonName}</h2>
              <p>Type: {pokemonType}</p>
              <p>{pokemonDesc} </p>
              <button onClick={() => handleAddItem(poke_id, pokemonName)}> Add </button>
              <button onClick={() => handleRemoveItem(poke_id)}> Remove </button>
              <PokemonImg pokemonId={poke_id}></PokemonImg>
          </div>
        </View>
      </SafeAreaView>
    </div>
  )
}

export default PokemonInfo;