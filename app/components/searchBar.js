import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Searchbar } from "react-native-paper";
import GlobalStyles from "../GlobalStyles";

import { View, Text, StyleSheet, Dimensions } from "react-native";

const SearchBarComponent = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  const deviceWidth = Dimensions.get("window").width;
  const deviceHeight = Dimensions.get("window").height;

  return (
    <View style={styles.search}>
      <View>
        <Text style={GlobalStyles.carTextName}>Rent a Ride</Text>
        <Text style={styles.carPriceText}>With pride...</Text>
      </View>
      <Searchbar
        iconColor="gray"
        placeholder="Search a car"
        style={{ fontFamily: "nunito_regular" }}
        onChangeText={onChangeSearch}
        value={searchQuery}
        clearIcon={({ size, color }) => (
          <MaterialIcons name="cancel" size={24} color="black" />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  search: {
    marginHorizontal: 8,
  },
  carPriceText: {
    fontSize: 15,
    fontWeight: "100",
    padding: 4,
    marginTop: 1,
    fontFamily: "nunito_regular",
  },
});

export default SearchBarComponent;
