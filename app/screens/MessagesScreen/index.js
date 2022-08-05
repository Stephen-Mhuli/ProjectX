import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { Avatar } from "@rneui/themed";

import MessagesCard from "../../components/Messages/MessagesCard";
import Header from "../../components/Header";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const MessagesScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header navigation={navigation}/>
        <View style={styles.mainHeader}>
          <Text style={styles.mainHeaderText}>Messages</Text>
        </View>
        <View style={styles.messagesContainer}>
          <TouchableOpacity style={styles.messageCardStyle}>
            <View style={styles.imageContainer}>
              {/* <Image /> */}
              <Avatar
                size={50}
                rounded
                source={require("../../../assets/profilepic.jpeg")}
              />
            </View>
            <View style={styles.mainBodyStyle}>
              <Text style={styles.userNameStyle}>John Doe</Text>
              <View>
                <Text style={styles.messageTextStyle}>
                  Hello world people...
                </Text>
              </View>
            </View>
            <View style={styles.arrowStyle}>
              <AntDesign name="right" size={40} color="black" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.messageCardStyle}>
            <View style={styles.imageContainer}>
              {/* <Image /> */}
              <Avatar
                size={50}
                rounded
                source={require("../../../assets/profilepic.jpeg")}
              />
            </View>
            <View style={styles.mainBodyStyle}>
              <Text style={styles.userNameStyle}>John Doe</Text>
              <View>
                <Text style={styles.messageTextStyle}>
                  Hello world people...
                </Text>
              </View>
            </View>
            <View style={styles.arrowStyle}>
              <AntDesign name="right" size={40} color="black" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.messageCardStyle}>
            <View style={styles.imageContainer}>
              {/* <Image /> */}
              <Avatar
                size={50}
                rounded
                source={require("../../../assets/profilepic.jpeg")}
              />
            </View>
            <View style={styles.mainBodyStyle}>
              <Text style={styles.userNameStyle}>John Doe</Text>
              <View>
                <Text style={styles.messageTextStyle}>
                  Hello world people...
                </Text>
              </View>
            </View>
            <View style={styles.arrowStyle}>
              <AntDesign name="right" size={40} color="black" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.messageCardStyle}>
            <View style={styles.imageContainer}>
              {/* <Image /> */}
              <Avatar
                size={50}
                rounded
                source={require("../../../assets/profilepic.jpeg")}
              />
            </View>
            <View style={styles.mainBodyStyle}>
              <Text style={styles.userNameStyle}>John Doe</Text>
              <View>
                <Text style={styles.messageTextStyle}>
                  Hello world people...
                </Text>
              </View>
            </View>
            <View style={styles.arrowStyle}>
              <AntDesign name="right" size={40} color="black" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.messageCardStyle}>
            <View style={styles.imageContainer}>
              {/* <Image /> */}
              <Avatar
                size={50}
                rounded
                source={require("../../../assets/profilepic.jpeg")}
              />
            </View>
            <View style={styles.mainBodyStyle}>
              <Text style={styles.userNameStyle}>John Doe</Text>
              <View>
                <Text style={styles.messageTextStyle}>
                  Hello world people...
                </Text>
              </View>
            </View>
            <View style={styles.arrowStyle}>
              <AntDesign name="right" size={40} color="black" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.messageCardStyle}>
            <View style={styles.imageContainer}>
              {/* <Image /> */}
              <Avatar
                size={50}
                rounded
                source={require("../../../assets/profilepic.jpeg")}
              />
            </View>
            <View style={styles.mainBodyStyle}>
              <Text style={styles.userNameStyle}>John Doe</Text>
              <View>
                <Text style={styles.messageTextStyle}>
                  Hello world people...
                </Text>
              </View>
            </View>
            <View style={styles.arrowStyle}>
              <AntDesign name="right" size={40} color="black" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.messageCardStyle}>
            <View style={styles.imageContainer}>
              {/* <Image /> */}
              <Avatar
                size={50}
                rounded
                source={require("../../../assets/profilepic.jpeg")}
              />
            </View>
            <View style={styles.mainBodyStyle}>
              <Text style={styles.userNameStyle}>John Doe</Text>
              <View>
                <Text style={styles.messageTextStyle}>
                  Hello world people...
                </Text>
              </View>
            </View>
            <View style={styles.arrowStyle}>
              <AntDesign name="right" size={40} color="black" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.messageCardStyle}>
            <View style={styles.imageContainer}>
              {/* <Image /> */}
              <Avatar
                size={50}
                rounded
                source={require("../../../assets/profilepic.jpeg")}
              />
            </View>
            <View style={styles.mainBodyStyle}>
              <Text style={styles.userNameStyle}>John Doe</Text>
              <View>
                <Text style={styles.messageTextStyle}>
                  Hello world people...
                </Text>
              </View>
            </View>
            <View style={styles.arrowStyle}>
              <AntDesign name="right" size={40} color="black" />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c0c0c0",
    paddingTop: StatusBar.currentHeight,
  },
  mainHeader: {
    marginLeft: deviceWidth < 375 ? 8 : 16,
    marginTop: deviceHeight < 750 ? 2 : 4,
  },
  mainHeaderText: {
    fontSize: deviceWidth < 375 ? 20 : 22,
    fontFamily: "nunito_semi_bold",
  },
  messagesContainer: {
    marginTop: deviceHeight < 750 ? 5 : 10,
    marginHorizontal: deviceWidth < 375 ? 10 : 10,
  },
  messageCardStyle: {
    display: "flex",
    flexDirection: "row",
    borderRadius: deviceWidth < 375 ? 10 : 14,
    width: deviceWidth < 375 ? deviceWidth - 20 : deviceWidth - 30,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: deviceWidth < 375 ? 5 : 10,
  },
  imageContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: deviceWidth < 375 ? 5 : 8,
    padding: deviceWidth < 375 ? 5 : 8,
    // borderWidth: 1,
    // borderColor: "blue",
  },
  mainBodyStyle: {
    flex: 4,
    margin: deviceWidth < 375 ? 2 : 4,
    padding: deviceWidth < 375 ? 5 : 8,
    alignItems: "flex-start",
    justifyContent: "center",
    // borderWidth: 1,
    // borderColor: "blue",
  },
  arrowStyle: {
    flex: 1,
    margin: deviceWidth < 375 ? 5 : 8,
    padding: deviceWidth < 375 ? 5 : 8,
    // borderWidth: 1,
    // borderColor: "blue",
  },
  userNameStyle: {
    fontSize: deviceWidth < 375 ? 16 : 20,
    fontFamily: "nunito_semi_bold",
  },
  messageTextStyle: {
    fontSize: deviceWidth < 375 ? 13 : 16,
    fontFamily: "nunito_regular",
  }
});

export default MessagesScreen;
