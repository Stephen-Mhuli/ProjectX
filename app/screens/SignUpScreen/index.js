import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const SignUpScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainHeaderContainer}>{/* <Image /> logo */}</View>
      <View style={styles.formContainer}>
        <View style={styles.formHeaderContainer}>
          <Text style={styles.headerTextStyle}>Create an</Text>
          <Text style={styles.headerTextStyle}>Account</Text>
        </View>
        <View style={styles.inputsContainer}>
          <View>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(text) => console.log(text)}
              placeholder="Username"
            />
          </View>
          <View>
            <TextInput style={styles.inputStyle} placeholder="Email" />
          </View>
          <View>
            <TextInput style={styles.inputStyle} placeholder="Password" />
          </View>
          <View>
            <TextInput
              style={styles.inputStyle}
              placeholder="Repeat Password"
            />
          </View>
        </View>
        <TouchableOpacity style={styles.signUpButtonStyle}>
          <Text style={styles.buttonTextStyle}>Register</Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.signInTextStyle}>Have an accont? Login</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c0c0c0",
    paddingTop: StatusBar.currentHeight,
  },
  formContainer: {
    flex: 1,
  },
  formHeaderContainer: {
    alignItems: "flex-start",
    marginHorizontal: deviceWidth < 380 ? 4 : 8,
    marginTop: deviceHeight < 380 ? 10 : 20,
    padding: deviceWidth < 380 ? 4 : 8,
  },
  headerTextStyle: {
    fontSize: deviceWidth < 380 ? 16 : 22,
    fontFamily: "nunito_bold",
  },

  signUpButtonStyle: {
    backgroundColor: "#2196F3",
    borderRadius: deviceWidth < 380 ? 8 : 12,
    width: deviceWidth < 380 ? "70%" : "80%",
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
  inputsContainer: {
    marginHorizontal: deviceWidth < 380 ? 4 : 8,
    marginTop: deviceHeight < 380 ? 5 : 10,
    padding: deviceWidth < 380 ? 4 : 8,
  },
  inputStyle: {
    fontSize: deviceWidth < 380 ? 16 : 18,
    fontFamily: "nunito_regular",
    padding: deviceWidth < 380 ? 2 : 4,
    marginVertical: deviceHeight < 380 ? 2 : 4,
    marginHorizontal: deviceWidth < 380 ? 2 : 4,
    borderColor: "gray",
    borderWidth: deviceWidth < 380 ? 0.5 : 1,
    width: deviceWidth < 380 ? "80%" : "90%",
    height: deviceHeight < 380 ? 40 : 50,
  },
});

export default SignUpScreen;
