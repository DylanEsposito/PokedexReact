import React, { useEffect } from 'react';
import '../App.css'; // Add some basic styling here
import { useSelector } from 'react-redux';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  Alert,
} from 'react-native';

import MiniCard from '../components/MiniCard';

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
      
function Team() {

  const items = useSelector((state) => state.items);
  console.log(items);
  return (
    <SafeAreaView>
      <View>
        <h2 id="AboutBlurb"> Your Current Team: </h2>
        {items.map(pokemon => (
            <MiniCard key={pokemon.id} entry={pokemon} />
        ))}
      </View>
    </SafeAreaView>
  )
}

export default Team;
