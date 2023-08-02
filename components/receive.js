import * as React from "react"
import { StyleSheet,Text, View, Pressable} from "react-native";

export default function receive(){
    return (
        <Pressable style={styles.ReceiveButton}>
            <Text></Text>
        </Pressable>
    )
};

const styles = StyleSheet.create({
    ReceiveButton: {
        width: 68,
        height: 35,
        elevation: 8,
        backgroundColor: "#FFF",
        color: "#A010A3",
        borderRadius: 22,
        marginVertical: 0,
    },
  });