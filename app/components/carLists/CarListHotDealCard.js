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
import { AntDesign } from "@expo/vector-icons";

// let { width } = Dimensions.get('window');
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const CarListPopularCard = ({ navigation }) => {
  const [Cars, setCars] = useState([
    {
      src: require("./Cars/maseraticar.png"),
      id: 1,
      model: "BMW X6",
      price: "50$/Day",
      year: 2017,
      speed: "120 km/hr",
    },
    {
      src: require("./Cars/toyotacar1.png"),
      id: 2,
      model: "TOYOTA",
      price: "30$/Day",
      year: 2019,
      speed: "100 km/hr",
    },
    {
      src: require("./Cars/maseraticar.png"),
      id: 3,
      model: "BMW X6",
      price: "50$/Day",
      year: 2017,
      speed: "120 km/hr",
    },
    {
      src: require("./Cars/toyotacar1.png"),
      id: 4,
      model: "TOYOTA",
      price: "30$/Day",
      year: 2019,
      speed: "100 km/hr",
    },
    {
      src: require("./Cars/maseraticar.png"),
      id: 5,
      model: "BMW X6",
      price: "50$/Day",
      year: 2017,
      speed: "120 km/hr",
    },
    {
      src: require("./Cars/toyotacar1.png"),
      id: 6,
      model: "TOYOTA",
      price: "30$/Day",
      year: 2019,
      speed: "100 km/hr",
    },
  ]);

  console.log(width);
  console.log(height);

  return (
    <View style={styles.container}>
      <View>
        <Text style={GlobalStyles.commonHeading}>Hot Deals</Text>
      </View>
      <FlatList
        //numColumns={2}

        horizontal={true}
        data={Cars}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.cardContainer}>
            <View>
              <Text style={styles.carTextName}>{item.model}</Text>
              <Text style={styles.carPriceText}>{item.price}</Text>
            </View>
            <View style={styles.cardDetails}>
              <TouchableWithoutFeedback
                onPress={() => navigation.navigate("Details", { item: item })}
              >
                <Image
                  source={item.src}
                  style={styles.carImage}
                  //fadeDuration='100'
                />
              </TouchableWithoutFeedback>
              <TouchableOpacity
                onPress={() => navigation.navigate("Details", { item: item })}
                style={styles.button}
              >
                <Text style={styles.buttonText}>Rent</Text>
                <View style={styles.buttonIcon}>
                  <AntDesign name="right" size={16} color="white" />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    backgroundColor: "#c0c0c0",
  },
  cardContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    borderColor: "#c0c0c0",
    marginHorizontal: 8,
    marginVertical: 8,
    padding: 0,
    borderRadius: 12,
    backgroundColor: "#fff",
    height: width / 3 + 7,
    //width: 170
  },
  carImage: {
    width: width / 4 + 14,
    height: width / 4 - 16,
    resizeMode: "contain",
  },
  cardDetails: {
    marginLeft: 0,
    marginTop: 0,
  },
  button: {
    //borderWidth:1,
    marginLeft: 10,
    borderColor: "#00ffff",
    borderBottomRightRadius: 14,
    borderTopLeftRadius: 14,
    padding: 4,
    marginTop: 20,
    flexDirection: "row",
    width: width / 4 + 4,
    alignItems: "center",
    backgroundColor: "#2196F3",
  },

  buttonText: {
    fontSize: 17,
    color: "#fff",
    marginLeft: 10,
    fontFamily: "nunito_semi_bold",
  },
  buttonIcon: {
    marginLeft: 20,
  },
  carTextName: {
    fontSize: 14,
    fontWeight: "300",
    marginLeft: 6,
    marginTop: 6,
    fontFamily: "nunito_regular",
  },
  carPriceText: {
    fontSize: 12,
    fontWeight: "300",
    padding: 4,
    marginTop: 80,
    marginLeft: 4,
    fontFamily: "nunito_regular",
  },
});

export default CarListPopularCard;
