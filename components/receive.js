import * as React from "react"
import { StyleSheet,Text, View, Pressable} from "react-native";

export default function receive(){
    return (
        <Pressable style={styles.ReceiveButton}>
              <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={34}
    fill="none"
  >
    <path
      fill="#fff"
      d="M0 32.69V22.123c0-.084.033-.168.1-.23l7.058-6.778c.221-.21.597-.063.597.23v9.983c0 .178.155.335.354.335h10.543c.31 0 .465.357.244.566l-7.158 6.693a.354.354 0 0 1-.243.095H.343c-.188 0-.343-.147-.343-.325Z"
    />
    <path
      fill="#fff"
      d="m19.863 14.249-7.28 6.653c-.228.208-.615.062-.615-.23V7.074a.31.31 0 0 1 .102-.229L19.35.098c.229-.208.616-.062.616.23v13.691c.011.084-.034.167-.103.23Z"
    />
  </svg>
        </Pressable>
    )
};

const styles = StyleSheet.create({
    ReceiveButton: {
        width: 68,
        height: 35,
        elevation: 8,
        backgroundColor: "#A010A3",
        color: "#A010A3",
        borderRadius: 22,
        marginVertical: 0,
        justifyContent: "center",
        alignItems: "center",
    },
  });