import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PokedexList from '../components/PokedexList';
import '../App.css'; // Add some basic styling here
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
    justifyContent: 'left',
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

  const [pokedexEntries, setPokedexEntries] = useState(null);

  const [query, setQuery] = useState("");

  useEffect(() => {

    const fetchLibrary = async () => {
      try {
        const response = await axios.get('http://localhost:3085/pokemon/all');
        console.log(response.data);
        setPokedexEntries(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchLibrary();
  }, []);

  if (!pokedexEntries) {
    return <div><p>No Entries</p></div> // Display a loading message while fetching data
  }else{
    console.log("We got a bookcase with something");
  }

  //These are the keys we use to designate what we want to search for
  const keys = ["first_name", "last_name", "email"];

  const search = (data) => {
    console.log("This is the input we made");
    console.log(data);
    return data.filter(
      item=>item.name.toLowerCase().includes(query))
  };
  
  return (
    <SafeAreaView>
      <View>
      <input type="text" placeholder="Search..." 
        className="search" 
        onChange={e=> setQuery(e.target.value)}>
      </input>
        <PokedexList data={search(pokedexEntries)}></PokedexList>
      </View>
    </SafeAreaView>
  )
}

export default Pokedex;
