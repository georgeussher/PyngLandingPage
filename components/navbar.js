import * as React from "react"
import { StyleSheet, View, Text} from "react-native";

export default function NavbarContainer(){

    
    return (
        <View style={styles.NavbarContainer}>
        </View>
    )
}
const styles = StyleSheet.create({
    NavbarContainer: {
      width: 280,
      height: 39,
      elevation: 8,
      backgroundColor: "#A010A3",
      color: "#A010A3",
      borderRadius: 20,
      paddingVertical: 10,
      paddingHorizontal: 50,
      marginVertical: 8,
    },
  });