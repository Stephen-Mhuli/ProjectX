import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
// import { Searchbar } from "react-native-paper";
import { SearchBar } from "@rneui/themed";
import GlobalStyles from "../GlobalStyles";

import { View, Text, StyleSheet, Dimensions } from "react-native";

const deviceWidth = Dimensions.get("window").width;

const SearchBarComponent = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <View style={styles.search}>
      <View>
        <Text style={GlobalStyles.carTextName}>Rent a Ride</Text>
        <Text style={styles.prideText}>With pride...</Text>
      </View>
      <SearchBar
        inputStyle={styles.searchInput}
        containerStyle={styles.searchContainer}
        inputContainerStyle={styles.searchInputContainer}
        placeholder="Search for a ride"
        rightIconContainerStyle={styles.searchIconContainer}
        leftIconContainerStyle={styles.searchIconContainer}
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  search: {
    marginHorizontal: deviceWidth * 0.022,
  },
  prideText: {
    fontSize: deviceWidth * 0.044,
    padding: deviceWidth * 0.008,
    marginTop: deviceWidth * 0.002,
    fontFamily: "nunito_regular",
  },
  searchInput: {
    fontSize: deviceWidth * 0.042,
    fontFamily: "nunito_regular",
  },
  searchContainer: {
     backgroundColor: "white",
     borderRadius: deviceWidth * 0.05,

    marginTop: deviceWidth * 0.01,
    marginBottom: deviceWidth * 0.01,
    padding: 0,
    elevation: 5,
    borderBottomWidth: 0,
    borderTopWidth: 0,
  },
  searchInputContainer: {
    backgroundColor: "white",
    borderRadius: deviceWidth * 0.03,
    borderWidth: 0,
    borderBottomWidth: 0,
    borderTopWidth: 0,
    padding: 1,

  },
  searchIconContainer: {
    color: "black",
    marginRight: deviceWidth * 0.02,
    marginLeft: deviceWidth * 0.02,
    padding: deviceWidth * 0.02,
  }
});

export default SearchBarComponent;
