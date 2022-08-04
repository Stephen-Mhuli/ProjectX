;import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

import GlobalStyles from "../../GlobalStyles";
import { AntDesign } from "@expo/vector-icons";

const CarListPopularCard = ({ navigation, cars }) => {
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
          <View style={styles.cardContainer}>
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate("Details", { item: item })}
            >
              <Image source={item.src} style={styles.carImage} />
            </TouchableWithoutFeedback>
            <View style={styles.cardDetails}>
              <View>
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
                  <AntDesign name="right" size={20} color="white" />
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
    flex: 1,
    //marginTop: 24,
    backgroundColor: "#c0c0c0",
  },
  cardContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    borderColor: "#c0c0c0",
    marginHorizontal: 8,
    borderWidth: 1,
    marginVertical: 8,
    padding: 2,
    borderRadius: 14,
    backgroundColor: "#fff",
  },
  carImage: {
    width: 230,
    height: 150,
    resizeMode: "stretch",
  },
  cardDetails: {
    marginLeft: 2,
    marginTop: 2,
  },
  button: {
    borderWidth: 1,
    borderColor: "#2196F3",
    borderBottomRightRadius: 14,
    borderTopLeftRadius: 14,
    padding: 6,
    marginTop: 20,
    flexDirection: "row",
    width: 132,
    alignItems: "center",
    backgroundColor: "#2196F3",
  },
});

export default CarListPopularCard;
