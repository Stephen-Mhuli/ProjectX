import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Dimensions,
  ScrollView,
} from "react-native";

import MessageItem from "../../components/MessageItem";
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
          <MessageItem />
          <MessageItem />
          <MessageItem />
          <MessageItem />
          <MessageItem />
          <MessageItem />
          <MessageItem />
          <MessageItem />
          <MessageItem />
          <MessageItem />
          <MessageItem />
          <MessageItem />
          <MessageItem />
          <MessageItem />
          <MessageItem />
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
    marginLeft: deviceWidth * 0.04,
    marginTop: deviceHeight * 0.002,
  },
  mainHeaderText: {
    fontSize: deviceWidth * 0.055,
    fontFamily: "nunito_semi_bold",
  },
  messagesContainer: {
    marginTop: deviceHeight * 0.001,
    marginHorizontal: deviceWidth * 0.03
  },
  
});

export default MessagesScreen;
