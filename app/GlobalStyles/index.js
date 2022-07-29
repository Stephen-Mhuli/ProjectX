import { StyleSheet } from "react-native";

const GlobalStyles = StyleSheet.create({
   commonHeading: {
       fontSize: 20,
       fontWeight: '500',
       marginHorizontal: 10,

   },
   carTextName: {
       fontSize: 18,
       fontWeight: '300',
       color: 'black',
       letterSpacing: 1,
       padding: 1
   },
   carSpeedText: {
       fontSize: 15,
       fontWeight: '300',
       color: 'lightgrey',
       padding: 1
   },
   carPriceText: {
    fontSize: 15,
    fontWeight: '300',
    padding: 4,
    marginTop: 6
   },
   buttonText: {
       fontSize: 20,
       color: '#fff',
       marginLeft: 4

   },
   buttonIcon: {
    marginLeft: 20
   }
})

export default GlobalStyles;
