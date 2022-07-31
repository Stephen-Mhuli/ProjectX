import { View, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import React from "react";

import { MaterialIcons } from "@expo/vector-icons";
import { Avatar } from "@rneui/themed";

const deviceWidth = Dimensions.get("window").width;

const Header = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
        <MaterialIcons
          name="menu"
          size={32}
          color="black"
          style={styles.menuButton}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Messages")} style={styles.avaterStyle}>
        <Avatar
          size={40}
          rounded
          source={require("../../../assets/profilepic.jpeg")}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: deviceWidth < 380 ? 3 : 6,
    marginTop: deviceWidth < 380 ? 6 : 10,
    marginHorizontal: deviceWidth < 380 ? 6 : 10,
    // borderWidth: 1,
    // borderColor: "blue",
  },
  menuButton: {
    padding: 2,
    margin: 2,
  },
  userIcon: {
    padding: 2,
    marginRight: 4,
  },
  avaterStyle: {
    marginHorizontal: 10,
  }
});

export default Header;
