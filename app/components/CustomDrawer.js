import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const CustomDrawer = (props) => {
  return (
    <View style={styles.drawerContainer}>
      <DrawerContentScrollView {...props} style={styles.scrollSttyle}>
        <View style={styles.userProfileStyle}>
          <Image
            source={require("../../assets/profilepic.jpeg")}
            style={styles.imageStyle}
          />
          <View style={styles.userInfo}>
            <Text style={styles.nameTextStyle}>Name: John Doe</Text>
            <Text style={styles.nameTextStyle}>Email: johndoe@gmail.com</Text>
          </View>
        </View>
        <View style={{ borderColor: "#fff", borderWidth: 1 }} />
        <View style={{ flex: 1, marginTop: 10 }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={styles.customButton}>
        <TouchableOpacity style={styles.btnStyle}>
          <View style={styles.btnContainer}>
            <Ionicons name="exit-outline" size={22} color="#fff" />
            <Text style={styles.textStyle}>Sign Out</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    marginTop: deviceHeight < 800 ? 10 : 20,
    backgroundColor: "#2196F3",
  },
  scrollSttyle: {},
  userProfileStyle: {
    alignItems: "center",
    marginTop: deviceHeight < 750 ? 20 : 40,
    marginBottom: deviceHeight < 750 ? 5 : 10,
  },
  userInfo: {
    flexDirection: "column",
    justifyContent: "center",
  },
  imageStyle: {
    width: deviceWidth < 375 ? 80 : 100,
    height: deviceHeight < 750 ? 80 : 100,
    borderRadius: 50,
    marginBottom: deviceHeight < 750 ? 10 : 20,
  },
  nameTextStyle: {
    fontSize: deviceWidth < 375 ? 10 : 13,
    fontFamily: "nunito_semi_bold",
    marginBottom: deviceHeight < 750 ? 5 : 8,
    color: "#fff",
  },
  customButton: {
    borderTopWidth: 1,
    borderTopColor: "#fff",
    padding: 10,
  },
  btnStyle: {
    paddingVertical: 5,
  },
  btnContainer: {
    marginHorizontal: deviceWidth < 375 ? 5 : 12,
    marginVertical: deviceHeight < 750 ? 2 : 4,
    flexDirection: "row",
    alignItems: "center",
  },
  textStyle: {
    fontSize: deviceWidth < 375 ? 12 : 16,
    fontFamily: "nunito_regular",
    marginLeft: deviceWidth < 375 ? 5 : 10,
  },
});

export default CustomDrawer;
