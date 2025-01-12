import React, { useEffect, useState } from 'react';
import '../App.css'; // Add some basic styling here
import PokemonInfo from '../components/PokemonInfo';
import { useParams } from 'react-router-dom';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  Alert,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
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
      
function SinglePokemon() {

  let { id } = useParams();

  if(id === '' || id === undefined){
    console.log("Id is blank");
    id = 0;
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <PokemonInfo poke_id = {id}></PokemonInfo>
      </View>
    </SafeAreaView>
  )
}

export default SinglePokemon;
