import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const CarListHotDealItem = ({ navigation, item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <View style={styles.modelNameImageStyle}>
          <Text style={styles.carTextName}>{item.model}</Text>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("Details", { item: item })}
          >
            <Image source={item.src} style={styles.carImage} />
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.priceButtonStyle}>
          <Text style={styles.carPriceText}>{item.price}</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Details", { item: item })}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Rent</Text>
            <View style={styles.buttonIcon}>
              <AntDesign
                name="right"
                size={deviceWidth * 0.045}
                color="white"
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CarListHotDealItem;

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: deviceWidth * 0.02,
    marginVertical: deviceHeight * 0.008,
    borderRadius: deviceWidth * 0.035,
    backgroundColor: "#fff",
    height: deviceWidth * 0.36,
  },
  modelNameImageStyle: {
    flex: 3,
    flexDirection: "row",
  },
  carImage: {
    width: deviceWidth * 0.288,
    height: deviceHeight * 0.144,
    resizeMode: "contain",
  },
  priceButtonStyle: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  carPriceText: {
    fontSize: deviceWidth * 0.034,
    padding: deviceWidth * 0.01,
    marginLeft: deviceWidth * 0.01,
    fontFamily: "nunito_regular",
    alignSelf: "center",
  },
  button: {
    flexDirection: "row",
    backgroundColor: "#2196F3",
    borderBottomRightRadius: deviceWidth * 0.035,
    borderTopLeftRadius: deviceWidth * 0.035,
    padding: deviceWidth * 0.009,
    alignSelf: "flex-start",
    alignItems: "center",
  },
  buttonText: {
    fontSize: deviceWidth * 0.038,
    color: "#fff",
    marginLeft: deviceWidth * 0.01,
    fontFamily: "nunito_semi_bold",
  },
  buttonIcon: {
    marginLeft: deviceWidth * 0.035,
    marginHorizontal: deviceWidth * 0.02,
    marginVertical: deviceWidth * 0.015,
  },
  carTextName: {
    fontSize: deviceWidth * 0.0306,
    marginVertical: deviceWidth * 0.01,
    marginHorizontal: deviceWidth * 0.016,
    fontFamily: "nunito_semi_bold",
  },
});
