import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import  Logo  from './components/logo';
import AppButton from './components/Button.js';
// import Svg, { Path, } from 'react-native-svg';
// import './styles.css';
 

export default function App() {
  return (
    <View style={styles.container}> 
    <Logo /> 
    <View style={styles.buttonContainer}>
    <AppButton
      backgroundColor={"#FE07C8"} 
      title={'Login'}
      borderColor={"#A010A3"}
      />
    <AppButton
      backgroundColor={"#A010A3"} 
      title={'Signup'}
      borderColor={"#FE07C8"}
      />
    </View>
    <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#FFF",
    marginTop: 150,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 36,
  },
 
});
