import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import {
  StyleSheet,
  View,
  SafeAreaView,
} from 'react-native';
import PokemonImg from './PokemonImg';

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

  const [inputValue, setInputValue] = useState('');
  const [pokemonName, setPokemonName] = useState('');
  const [pokemonType, setPokemonType] = useState('');
  const [pokemonDesc, setPokemonDesc] = useState('');
  console.log("This is the pokemon id " + poke_id);

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
        setPokemonName(response.data.pokemon_name);
        setPokemonType(response.data.pokemon_type);
        setPokemonDesc(response.data.pokemon_desc);
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

  const [tabState, setTabState] = useState({
    left: false,
    right: false,
  });
  
  return ( 
    <div>
      <SafeAreaView style={styles.container}>
      <View>
        <div>
            <h2>{pokemonName}</h2>
            <p>Type: {pokemonType}</p>
            <p>{pokemonDesc}
            </p>
            <PokemonImg pokemonId={poke_id}></PokemonImg>
        </div>
    </View>
  </SafeAreaView>
    </div>
  )
}

export default PokemonInfo;