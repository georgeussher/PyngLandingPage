import * as React from "react"
import { StyleSheet, View, Text} from "react-native";

export default function NavbarContainer(){

    const styles = StyleSheet.create({
        navbarContainer: {
          width: 271,
          height: 44,
          elevation: 8,
          backgroundColor: "#A010A3",
          color: "#A010A3",
          borderRadius: 50,
          paddingVertical: 10,
          paddingHorizontal: 12,
        //   borderColor: borderColor,
          borderWidth: 1,
          marginVertical: 8,
        },
      });

    return (
        <View style={styles.Navbarcontainer}>
            <Text>Navbar</Text>
        </View>
    )
}