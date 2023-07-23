import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import  Logo  from './components/Logo.js';
import AppButton from './components/Button.js';
// import Svg, { Path, } from 'react-native-svg';
// import './styles.css';

export default function App() {
  return (
    <View style={styles.container}> 
    <Logo/> 
    <AppButton title={'Test'}/>
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
