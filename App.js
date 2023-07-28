import React from 'react';
import { StyleSheet, View } from 'react-native';
import NavbarContainer from './components/navbar';


 

export default function App() {
  return (
    <View styles={styles.buttonContainer} > 
      <NavbarContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 150,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 36,
    backgroundColor: "#E010A5",
  },
 
});
