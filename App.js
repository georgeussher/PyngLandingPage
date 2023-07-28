import React from 'react';
import { StyleSheet, View } from 'react-native';
import NavbarContainer from './components/navbar';


 

export default function App() {
  return (
    <View > 
      <NavbarContainer style={StyleSheet.container}/>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "space-around",
//     alignItems: "center",
//     backgroundColor: "#f0f0f0",
//     marginTop: 150,
//   },
//   buttonContainer: {
//     flex: 1,
//     justifyContent: "flex-end",
//     alignItems: "center",
//     marginBottom: 36,
//   },
 
//});
