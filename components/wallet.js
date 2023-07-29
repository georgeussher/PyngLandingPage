import * as React from "react"
import { StyleSheet,Text, View, Pressable} from "react-native";

export default function wallet(){
    return (
        <Pressable>
            <Text></Text>
        </Pressable>
    )
};

const styles = StyleSheet.create({
    WalletButton: {
      width: 280,
      height: 39,
      elevation: 8,
      backgroundColor: "#FFF",
      color: "#A010A3",
      borderRadius: 20,
      paddingVertical: 10,
      paddingHorizontal: 50,
      marginVertical: 8,
    },
  });