import React from 'react';
import '../App.css'; // Add some basic styling here
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  Alert,
} from 'react-native';
import PokemonCard from '../components/PokemonCard';
import PokedexList from '../components/PokedexList';

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
      
function Pokedex() {
  
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <PokedexList></PokedexList>
      </View>
    </SafeAreaView>
  )
}

export default Pokedex;
