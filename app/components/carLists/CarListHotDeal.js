import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";

import GlobalStyles from "../../GlobalStyles";
import CarListHotDealItem from "./CarListHotDealItem";

const deviceHeight = Dimensions.get("window").height;

const CarListHotDeal = ({ navigation, cars }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={GlobalStyles.commonHeading}>Hot Deals</Text>
      </View>
      <FlatList
        horizontal={true}
        data={cars}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CarListHotDealItem item={item} navigation={navigation} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: deviceHeight * 0.01,
    backgroundColor: "#c0c0c0",
  },
});

export default CarListHotDeal;
