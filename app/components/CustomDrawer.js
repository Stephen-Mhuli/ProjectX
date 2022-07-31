import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const CustomDrawer = (props) => {
  return (
    <View style={styles.drawerContainer}>
      <DrawerContentScrollView {...props}>
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
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    backgroundColor: "#2196F3",
  },
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
});

export default CustomDrawer;
