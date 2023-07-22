import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import  Logo  from './components/logo.js';
import React from 'react';
// import Svg, { Path, } from 'react-native-svg';
// import './styles.css';

export default function App() {
  return (
    <View style={styles.container}> 
    <Logo/>  
    
    <Text>Open up App.js to start working on your app!</Text>
    <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
