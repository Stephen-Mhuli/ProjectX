// Packages
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";

// Screens
import HomeScreen from "./app/screens/HomeScreen";
import CarDetailsScreen from "./app/screens/CarDetailsScreen";
import ProfileScreen from "./app/screens/ProfileScreen";
import MessagesScreen from "./app/screens/MessagesScreen";

const Stack = createNativeStackNavigator();

export default function App() {
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
      <Stack.Navigator
        screenOptions={{ headerTitleAlign: "center", headerShown: false }}
      >
        <Stack.Screen name="Messages" component={MessagesScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />

        <Stack.Screen
          name="Details"
          component={CarDetailsScreen}
          options={({ route }) => ({ title: route.params.item.model })}
        />

        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
