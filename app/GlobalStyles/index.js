import { StyleSheet, Dimensions } from "react-native";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const GlobalStyles = StyleSheet.create({
  commonHeading: {
    fontSize: deviceWidth * 0.055,
    marginHorizontal: deviceHeight * 0.015,
    marginVertical: deviceWidth * 0.008,
    fontFamily: "nunito_semi_bold",
  },
  carTextName: {
    fontSize: deviceWidth * 0.045,
    color: "black",
    letterSpacing: 0.2,
    padding: deviceWidth * 0.006,
    fontFamily: "nunito_semi_bold",
  },
  carSpeedText: {
    fontSize: deviceWidth * 0.04,
    color: "lightgrey",
    padding: deviceWidth * 0.006,
    fontFamily: "nunito_regular",
  },
  carPriceText: {
    fontSize: deviceWidth * 0.038,
    fontWeight: "300",
    padding: deviceWidth * 0.006,
    marginTop: deviceWidth*0.009,
    fontFamily: "nunito_regular",
  },
  buttonText: {
    fontSize: deviceWidth*0.048,
    color: "#fff",
    marginLeft: deviceWidth * 0.004,
    fontFamily: "nunito_semi_bold",
  },
  buttonIcon: {
    marginLeft: deviceWidth * 0.055,
  },
});

export default GlobalStyles;
