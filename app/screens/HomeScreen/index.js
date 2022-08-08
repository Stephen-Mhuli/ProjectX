//libraries
import { StyleSheet, Dimensions, SafeAreaView, ScrollView } from "react-native";
import { StatusBar } from "react-native";

// Components
import CarListPopular from "../../components/carLists/CarListPopular";
import cars from "../../../Common/Data/cars";
let { width } = Dimensions.get("window");

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <CarListPopular navigation={navigation} cars={cars} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    paddingTop: StatusBar.currentHeight,
  },
});
