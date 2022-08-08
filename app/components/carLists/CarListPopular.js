import { View, Text, StyleSheet, FlatList } from "react-native";

import GlobalStyles from "../../GlobalStyles";
import CarListPopularItem from "./CarListPopularItem";
import CarListHotDeal from "./CarListHotDeal";
import SearchBarComponent from "../searchBar";
import Header from "../Header";

const CarListPopular = ({ navigation, cars }) => {
  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <>
            <Header navigation={navigation} />
            <SearchBarComponent navigation={navigation} />
            <CarListHotDeal navigation={navigation} cars={cars} />
            <View>
              <Text style={GlobalStyles.commonHeading}>Popular</Text>
            </View>
          </>
        }
        data={cars}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CarListPopularItem navigation={navigation} item={item} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
  },
});

export default CarListPopular;
