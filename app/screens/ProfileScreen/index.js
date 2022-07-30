import { View, Text, StyleSheet, Image } from "react-native";
import { StatusBar } from "react-native";

const DATA = [
  { id: 1, firstName: "John", lastName: "Doe", email: "john@gmail.com" },
  { id: 2, firstName: "Juma", lastName: "Doe", email: "juma@gmail.com" },
];

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Text>Profile Screen</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
  },
});

export default ProfileScreen;
