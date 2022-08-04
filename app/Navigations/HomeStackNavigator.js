import HomeScreen from "../screens/HomeScreen";
import CarDetailsScreen from "../screens/CarDetailsScreen";
import ProfileScreen from "../screens/ProfileScreen";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} >
      <Stack.Screen name="HomePage" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen
        name="Details"
        component={CarDetailsScreen}
        options={({ route }) => ({ title: route.params.item.model })}
      />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
