//libraries
import { StyleSheet, Dimensions, SafeAreaView } from "react-native";
import SearchBarComponent from "../../components/searchBar";
import { StatusBar } from "react-native";

// Components
import CarListHotDealCard from "../../components/carLists/CarListHotDealCard";
import CarListPopularCard from "../../components/carLists/CarListPopularCard";
import Header from "../../components/Header";
import cars from "../../../Common/Data/cars"
let { width } = Dimensions.get("window");

export default function HomeScreen({ navigation }) {

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      <SearchBarComponent navigation={navigation} />
      <CarListHotDealCard navigation={navigation} cars={cars} />
      <CarListPopularCard navigation={navigation} cars={cars} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c0c0c0",
    paddingTop: StatusBar.currentHeight,
  },
});
