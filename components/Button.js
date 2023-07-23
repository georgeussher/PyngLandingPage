import * as React from "react"
import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default function AppButton({title, backgroundColor, borderColor}){

  const styles = StyleSheet.create({
    appButtonContainer: {
      elevation: 8,
      backgroundColor: backgroundColor,
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 12,
      borderColor: borderColor,
      borderWidth: 1,
    },
    appButtonText: {
      fontSize: 18,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase"
    }
  });

    return (
    <TouchableOpacity style={styles.appButtonContainer} >
    <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
    )
};

