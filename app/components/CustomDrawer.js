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
        <View style={{ flex: 1, marginTop: deviceHeight * 0.01 }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={styles.customButton}>
        <TouchableOpacity style={styles.btnStyle}>
          <View style={styles.btnContainer}>
            <Ionicons
              name="exit-outline"
              size={deviceWidth * 0.062}
              color="#fff"
            />
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
    marginTop: deviceHeight * 0.01,
    backgroundColor: "#2196F3",
  },
  userProfileStyle: {
    alignItems: "center",
    marginTop: deviceHeight * 0.05,
    marginBottom: deviceHeight * 0.01,
  },
  userInfo: {
    flexDirection: "column",
    justifyContent: "center",
  },
  imageStyle: {
    width: deviceWidth * 0.25,
    height: deviceHeight * 0.12,
    borderRadius: 50,
    marginBottom: deviceHeight * 0.02,
  },
  nameTextStyle: {
    fontSize: deviceWidth * 0.036,
    fontFamily: "nunito_semi_bold",
    marginBottom: deviceHeight * 0.01,
    color: "#fff",
  },
  customButton: {
    borderTopWidth: 1,
    borderTopColor: "#eee",
    padding: deviceWidth * 0.02,
  },
  btnStyle: {
    paddingVertical: 5,
  },
  btnContainer: {
    marginHorizontal: deviceWidth * 0.03,
    marginVertical: deviceWidth * 0.02,
    flexDirection: "row",
    alignItems: "center",
  },
  textStyle: {
    fontSize: deviceWidth * 0.044,
    fontFamily: "nunito_regular",
    marginLeft: deviceWidth * 0.03,
  },
});

export default CustomDrawer;
