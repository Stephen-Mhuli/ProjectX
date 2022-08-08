import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  SafeAreaView,
} from "react-native";
import { StatusBar } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const CarDetailsScreen = ({ route }) => {
  const car = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{ alignItems: "center" }}>
          <Image source={car.item.src} style={styles.mainImageStyle} />
        </View>

        <View style={styles.detailsContainer}>
          <TouchableOpacity style={styles.imageOpacity}>
            <Image source={car.item.src} style={styles.smallImageStyle} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.imageOpacity}>
            <Image source={car.item.src} style={styles.smallImageStyle} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.imageOpacity}>
            <Image source={car.item.src} style={styles.smallImageStyle} />
          </TouchableOpacity>
        </View>
        <View style={styles.headerContainerStyle}>
          <View style={styles.subHeader}>
            <Text style={styles.subHeaderTextStyle}>Key Specs</Text>
          </View>
          <View style={styles.specsContainerStyle}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-around" }}
            >
              <View style={styles.singleSpecStyle}>
                <Ionicons name="speedometer" size={28} color="black" />
                <Text style={styles.specTextStyle}>{car.item.speed}</Text>
              </View>
              <View style={styles.singleSpecStyle}>
                <MaterialCommunityIcons
                  name="water-pump"
                  size={24}
                  color="black"
                />
                <Text style={styles.specTextStyle}>2400cc</Text>
              </View>
              <View style={styles.singleSpecStyle}>
                <Ionicons name="flash" size={28} color="black" />
                <Text style={styles.specTextStyle}>120hp</Text>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View style={styles.singleSpecStyle}>
                <FontAwesome name="automobile" size={28} color="black" />
                <Text style={styles.specTextStyle}>Automatic</Text>
              </View>
              <View style={styles.singleSpecStyle}>
                <MaterialCommunityIcons
                  name="car-seat"
                  size={28}
                  color="black"
                />
                <Text style={styles.specTextStyle}> 5 Seats</Text>
              </View>
              <View style={styles.singleSpecStyle}>
                <FontAwesome5 name="comment-dollar" size={28} color="black" />
                <Text style={styles.specTextStyle}>{car.item.price}</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.headerContainerStyle}>
          <View style={styles.subHeader}>
            <Text style={styles.subHeaderTextStyle}>About</Text>
          </View>
          <View style={styles.aboutStyle}>
            <Text style={styles.aboutTextStyle}>
              The BMW X6, though, set the trend and it's now in it's generation.
              These SUVs are a great fit for the modern lifestyle. The X6 is a
              great choice for those who want to get out of the city and into
              the great outdoors.
            </Text>
          </View>
        </View>
        <TouchableOpacity style={styles.rentNowButton}>
          <Text style={styles.buttonTextStyle}>Rent Now</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eeeeee",
    paddingTop: StatusBar.currentHeight,
  },
  mainImageStyle: {
    height: deviceHeight / 3.0,
    width: "80%",
    resizeMode: "contain",
  },
  smallImageStyle: {
    height: deviceHeight / 12,
    width: "100%",
    resizeMode: "contain",
  },
  detailsContainer: {
    flexDirection: "row",
    marginHorizontal: deviceWidth < 380 ? 4 : 6,
  },
  imageOpacity: {
    flex: 1,
    borderColor: "black",
    borderWidth: deviceWidth < 380 ? 0.5 : 1,
    borderRadius: deviceWidth < 380 ? 8 : 12,
    margin: 8,
  },
  subHeader: {
    marginHorizontal: deviceWidth < 380 ? 10 : 16,
    marginTop: deviceWidth < 380 ? 6 : 10,
  },

  subHeaderTextStyle: {
    fontSize: deviceWidth < 380 ? 16 : 18,
    fontFamily: "nunito_bold",
  },
  specsContainerStyle: {
    padding: deviceWidth < 380 ? 8 : 16,
    alignItems: "center",
  },
  singleSpecStyle: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: deviceWidth < 380 ? 4 : 6,
  },
  headerContainerStyle: {
    marginHorizontal: deviceWidth < 380 ? 8 : 12,
  },
  aboutStyle: {
    padding: deviceWidth < 380 ? 8 : 12,
  },
  aboutTextStyle: {
    fontSize: deviceWidth < 380 ? 14 : 16,
    fontFamily: "nunito_regular",
  },
  specTextStyle: {
    fontSize: deviceHeight < 380 ? 14 : 17,
    fontFamily: "nunito_regular",
    color: "gray",
  },
  rentNowButton: {
    backgroundColor: "#0AABDE",
    borderRadius: deviceWidth < 380 ? 8 : 12,
    width: deviceWidth < 380 ? "90%" : "90%",
    height: deviceHeight < 380 ? 35 : 50,
    alignSelf: "center",
    justifyContent: "center",
    marginVertical: deviceHeight < 380 ? 10 : 20,
  },
  buttonTextStyle: {
    fontSize: deviceWidth < 380 ? 16 : 18,
    fontFamily: "nunito_bold",
    textAlign: "center",
    padding: deviceWidth < 380 ? 4 : 8,
    color: "white",
  },
});

export default CarDetailsScreen;
