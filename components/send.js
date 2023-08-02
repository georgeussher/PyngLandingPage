import * as React from "react"
import { StyleSheet,Text, View, Pressable} from "react-native";

export default function send(){
    return (
        <Pressable style={styles.SendButton}>
            <View>
            <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={33}
    fill="none"
  >
    <path
      fill="#fff"
      d="M20 .325v10.569a.316.316 0 0 1-.1.23l-7.058 6.777c-.221.21-.597.063-.597-.23V7.688a.347.347 0 0 0-.354-.335H1.348c-.31 0-.465-.356-.244-.565L8.262.094A.353.353 0 0 1 8.505 0h11.152c.188 0 .343.147.343.325Z"
    />
    <path
      fill="#fff"
      d="m.104 18.751 7.28-6.653c.229-.208.616-.062.616.23v13.598a.31.31 0 0 1-.103.229l-7.28 6.747c-.228.208-.615.062-.615-.23V18.981c-.012-.084.034-.167.102-.23Z"
    />
  </svg>
            </View>
        </Pressable>
    )
};

const styles = StyleSheet.create({
    SendButton: {
        width: 68,
        height: 35,
        elevation: 8,
        backgroundColor: "#FE07C8",
        color: "#A010A3",
        borderRadius: 22,
        marginVertical: 0,
        justifyContent: "center",
        alignItems: "center",
    },
  });