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
              <AntDesign name="right" size={16} color="white" />
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
    marginHorizontal: deviceWidth < 380 ? 6 : 8,
    marginVertical: deviceHeight < 700 ? 2 : 4,
    borderRadius: deviceWidth < 375 ? 10 : 12,
    backgroundColor: "#fff",
    height: deviceWidth / 3 + 7,
  },
  modelNameImageStyle: {
    flex: 3,
    flexDirection: "row",
  },
  carImage: {
    width: deviceWidth / 4 + 14,
    height: deviceHeight / 6 - 16,
    resizeMode: "contain",
  },
  priceButtonStyle: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  carPriceText: {
    fontSize: deviceWidth < 375 ? 10 : 12,
    padding: deviceWidth < 375 ? 1 : 2,
    marginLeft: 4,
    fontFamily: "nunito_regular",
    alignSelf: "center",
  },
  button: {
    flexDirection: "row",
    backgroundColor: "#2196F3",
    borderBottomRightRadius: deviceWidth < 375 ? 10 : 12,
    borderTopLeftRadius: deviceWidth < 375 ? 10 : 12,
    padding: deviceWidth < 370 ? 2 : 3.5,
    alignSelf: "flex-start",
    alignItems: "center",
  },
  buttonText: {
    fontSize: deviceWidth < 370 ? 10 : 16,
    color: "#fff",
    marginLeft: 2,
    fontFamily: "nunito_semi_bold",
  },
  buttonIcon: {
    marginLeft: 20,
    marginHorizontal: deviceWidth < 370 ? 2 : 10,
    marginVertical: deviceWidth < 370 ? 2 : 5,
  },
  carTextName: {
    fontSize: deviceWidth < 375 ? 9 : 12,
    marginVertical: deviceHeight < 700 ? 5 : 8,
    marginHorizontal: deviceWidth < 370 ? 3 : 6,
    fontFamily: "nunito_semi_bold",
  },
});
