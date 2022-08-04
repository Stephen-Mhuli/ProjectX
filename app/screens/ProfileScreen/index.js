import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";
import { StatusBar } from "react-native";
import Header from "../../components/Header";

const DATA = [
  { id: 1, firstName: "John", lastName: "Doe", email: "john@gmail.com" },
  { id: 2, firstName: "Juma", lastName: "Doe", email: "juma@gmail.com" },
];

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
