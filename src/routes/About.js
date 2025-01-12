import React from 'react';
import '../App.css'; // Add some basic styling here
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  Alert,
} from 'react-native';
import { Counter } from '../features/counter/counter';

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
      
function About() {
  
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <h2 id="AboutBlurb"> So the purpose of this website to showcase all 151 original pokemon
        </h2>
        <h1 id="Disclaimer"> Disclaimer: I do not own any of these characters
        </h1>
        <Counter></Counter>
      </View>
    </SafeAreaView>
  )
}

export default About;
