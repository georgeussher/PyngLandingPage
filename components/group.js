import * as React from "react"
import { StyleSheet,Text, View, Pressable} from "react-native";

export default function Group(){
    return (
        <Pressable style={styles.GroupButton}>
        </Pressable>
    )
};

const styles = StyleSheet.create({
    GroupButton: {
      width: 68,
      height: 35,
      elevation: 8,
      backgroundColor: "#FFF",
      color: "#A010A3",
      borderRadius: 22,
    //   paddingVertical: 10,
    //   paddingHorizontal: 50,
      marginVertical: 0,
    },
  });