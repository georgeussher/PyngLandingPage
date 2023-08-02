import * as React from "react"
import { StyleSheet,Text, View, Pressable} from "react-native";

export default function wallet(){
    return (
        <Pressable style={styles.WalletButton}>
            <Text></Text>
        </Pressable>
    )
};

const styles = StyleSheet.create({
    WalletButton: {
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