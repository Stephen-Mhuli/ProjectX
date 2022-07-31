// Packages
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";

// Navigators
import MainNavigator from "./app/Navigations/MainNavigator";
import AuthStackNavigator from "./app/Navigations/AuthStackNavigator";
import AppStackNavigator from "./app/Navigations/AppStackNavigator";

// Fonts
const App = () => {
  const [fontsLoaded] = useFonts({
    nunito_bold: require("./assets/fonts/Nunito-Bold.ttf"),
    nunito_semi_bold: require("./assets/fonts/Nunito-SemiBold.ttf"),
    nunito_italic: require("./assets/fonts/Nunito-Italic.ttf"),
    nunito_regular: require("./assets/fonts/Nunito-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <MainNavigator />
      {/* <AuthStackNavigator /> */}
      {/* <AppStackNavigator /> */}
    </NavigationContainer>
  );
};

export default App;
