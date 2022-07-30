import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { StatusBar } from "react-native";
import MessagesCard from "../../components/Messages/MessagesCard";
import Header from "../../components/Header";
import GlobalStyles from "../../GlobalStyles";
const MessagesScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header />
      <View>
        <Text style={GlobalStyles.commonHeading}>Messages</Text>
      </View>
      <View>
        <MessagesCard />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c0c0c0",
    paddingTop: StatusBar.currentHeight,
    // marginTop: 10
  },
});

export default MessagesScreen;
