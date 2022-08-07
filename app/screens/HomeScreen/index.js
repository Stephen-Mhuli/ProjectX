//libraries
import { StyleSheet, Dimensions, SafeAreaView } from "react-native";
import SearchBarComponent from "../../components/searchBar";
import { StatusBar } from "react-native";

// Components
import CarListHotDealCard from "../../components/carLists/CarListHotDeal";
import CarListPopular from "../../components/carLists/CarListPopular";
import Header from "../../components/Header";
import cars from "../../../Common/Data/cars"
let { width } = Dimensions.get("window");

export default function HomeScreen({ navigation }) {

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      <SearchBarComponent navigation={navigation} />
      <CarListHotDealCard navigation={navigation} cars={cars} />
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
