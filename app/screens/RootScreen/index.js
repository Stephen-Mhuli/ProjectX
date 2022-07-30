import { View, Text } from "react-native";
import React from "react";

const RootScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Root Screen</Text>
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

export default RootScreen;
