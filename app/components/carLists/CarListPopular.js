import { View, Text, StyleSheet, FlatList } from "react-native";

import GlobalStyles from "../../GlobalStyles";
import CarListPopularItem from "./CarListPopularItem";

const CarListPopular = ({ navigation, cars }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={GlobalStyles.commonHeading}>Popular</Text>
      </View>
      <FlatList
        data={cars}
        nestedScrollEnabled={true}
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
    backgroundColor: "#c0c0c0",
  },
});

export default CarListPopular;
