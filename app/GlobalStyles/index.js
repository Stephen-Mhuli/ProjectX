import { StyleSheet, Dimensions } from "react-native";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const GlobalStyles = StyleSheet.create({
   commonHeading: {
       fontSize: deviceWidth < 380 ? 16 : 20,
       fontWeight: '500',
       marginHorizontal: deviceHeight < 700 ? 10 : 15,
       marginVertical: deviceWidth < 380 ? 2 : 4,
       fontFamily: 'nunito_semi_bold'
   },
   carTextName: {
       fontSize: 18,
       fontWeight: '300',
       color: 'black',
       letterSpacing: 1,
       padding: 1,
       fontFamily: 'nunito_semi_bold'
   },
   carSpeedText: {
       fontSize: 15,
       fontWeight: '300',
       color: 'lightgrey',
       padding: 1,
       fontFamily: 'nunito_regular'
   },
   carPriceText: {
    fontSize: 15,
    fontWeight: '300',
    padding: 4,
    marginTop: 6,
    fontFamily: 'nunito_regular'
   },
   buttonText: {
       fontSize: 20,
       color: '#fff',
       marginLeft: 4,
       fontFamily: 'nunito_semi_bold'

   },
   buttonIcon: {
    marginLeft: 20
   }
})

export default GlobalStyles;
