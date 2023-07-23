import * as React from "react"
import Svg, { Path,  } from "react-native-svg"
import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";

export default function AppButton({title}){
    return (
    <TouchableOpacity style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    appButtonContainer: {
      elevation: 8,
      backgroundColor: "#009688",
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 12
    },
    appButtonText: {
      fontSize: 18,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase"
    }
  });