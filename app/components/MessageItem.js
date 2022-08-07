import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { Avatar } from "@rneui/themed";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const MessageItem = () => {
  return (
    <View>
      <TouchableOpacity style={styles.messageCardStyle}>
        <View style={styles.imageContainer}>
          {/* <Image /> */}
          <Avatar
            size={50}
            rounded
            source={require("../../assets/profilepic.jpeg")}
          />
        </View>
        <View style={styles.mainBodyStyle}>
          <Text style={styles.userNameStyle}>John Doe</Text>
          <View>
            <Text style={styles.messageTextStyle}>Hello world people...</Text>
          </View>
        </View>
        <View style={styles.arrowStyle}>
          <AntDesign name="right" size={deviceWidth * 0.075} color="black" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MessageItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c0c0c0",
    paddingTop: StatusBar.currentHeight,
  },
  mainHeader: {
    marginLeft: deviceWidth * 0.04,
    marginTop: deviceHeight * 0.002,
  },
  mainHeaderText: {
    fontSize: deviceWidth * 0.055,
    fontFamily: "nunito_semi_bold",
  },
  messagesContainer: {
    marginTop: deviceHeight * 0.001,
    marginHorizontal: deviceWidth * 0.03,
  },
  messageCardStyle: {
    display: "flex",
    flexDirection: "row",
    borderRadius: deviceWidth * 0.04,
    width: deviceWidth * 0.93,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: deviceHeight * 0.01,
  },
  imageContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: deviceWidth * 0.02,
    padding: deviceWidth * 0.02,
    // borderWidth: 1,
    // borderColor: "blue",
  },
  mainBodyStyle: {
    flex: 4,
    margin: deviceWidth * 0.01,
    padding: deviceWidth * 0.02,
    alignItems: "flex-start",
    justifyContent: "center",
    // borderWidth: 1,
    // borderColor: "blue",
  },
  arrowStyle: {
    flex: 1,
    margin: deviceWidth * 0.02,
    padding: deviceWidth * 0.02,
    // borderWidth: 1,
    // borderColor: "blue",
    alignItems: "center",
  },
  userNameStyle: {
    fontSize: deviceWidth * 0.055,
    fontFamily: "nunito_semi_bold",
  },
  messageTextStyle: {
    fontSize: deviceWidth * 0.042,
    fontFamily: "nunito_regular",
  },
});


