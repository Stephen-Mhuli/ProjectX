import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";

import GlobalStyles from "../../GlobalStyles";
import { AntDesign } from "@expo/vector-icons";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const CarListPopularItem = ({ navigation, item }) => {
  return (
    <View>
      <View style={styles.cardContainer}>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("Details", { item: item })}
        >
          <Image source={item.src} style={styles.carImage} />
        </TouchableWithoutFeedback>
        <View style={styles.carDetails}>
          <View style={styles.carSpeedPrice}> 
            <Text style={GlobalStyles.carTextName}>{item.model}</Text>
            <Text style={GlobalStyles.carSpeedText}>{item.speed}</Text>
            <Text style={GlobalStyles.carPriceText}>{item.price}</Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Details", { item: item })}
            style={styles.button}
          >
            <Text style={GlobalStyles.buttonText}>Details</Text>
            <View style={GlobalStyles.buttonIcon}>
              <AntDesign name="right" size={deviceWidth * 0.065} color="white" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CarListPopularItem;

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    marginHorizontal: deviceWidth * 0.02,
    marginVertical: deviceHeight * 0.008,
    borderRadius: deviceWidth * 0.04,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  carImage: {
    width: deviceWidth * 0.61,
    height: deviceHeight * 0.192,
    resizeMode: "contain",
  },
  carDetails: {
    marginLeft: deviceWidth * 0.009,
    marginTop: deviceWidth * 0.009,
  },
  carSpeedPrice: {
    flex: 1
  },
  button: {
    flex: 2,
    borderBottomRightRadius: deviceWidth * 0.04,
    borderTopLeftRadius: deviceWidth * 0.04,
    padding: deviceWidth*0.014,
    marginTop: deviceWidth*0.051,
    flexDirection: "row",
    width: deviceWidth * 0.34,
    alignItems: "center",
    backgroundColor: "#2196F3",
  },
});
