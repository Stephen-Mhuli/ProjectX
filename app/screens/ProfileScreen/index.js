import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";
import { StatusBar } from "react-native";
import Header from "../../components/Header";

const ProfileScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      <View style={styles.headerContainer}>
        <Text style={styles.headerTextSttle}>Profile Screen</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
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

export default ProfileScreen;
