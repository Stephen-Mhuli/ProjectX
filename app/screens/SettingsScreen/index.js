import { View, Text, StyleSheet, StatusBar, SafeAreaView } from "react-native";

import Header from "../../components/Header";

const SettingsScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      <View style={styles.headerContainer}>
        <Text style={styles.headerTextSttle}>Settings Screen</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c0c0c0",
    paddingTop: StatusBar.currentHeight,
  },
  headerContainer: {
    alignItems: "center",
  },
  headerTextSttle: {
    fontSize: 20,
    fontFamily: "nunito_semi_bold",
  },
});

export default SettingsScreen;
