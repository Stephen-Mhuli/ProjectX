import { createDrawerNavigator } from "@react-navigation/drawer";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Dimensions } from "react-native";

import HomeStackNavigator from "./HomeStackNavigator";
import MessagesScreen from "../screens/MessagesScreen";
import SettingsScreen from "../screens/SettingsScreen";
import ProfileScreen from "../screens/ProfileScreen";

import CustomDrawer from "../components/CustomDrawer";

const Drawer = createDrawerNavigator();

const MainNavigator = () => {

  const screenWidth = Dimensions.get("window").width;

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerLabelStyle: {
          marginLeft: -screenWidth * 0.035,
          fontFamily: "nunito_regular",
          fontSize: screenWidth * 0.042,
        },
        drawerActiveTintColor: "#eee",
        drawerInactiveTintColor: "#333",
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          drawerIcon: () => {
            return (
              <Ionicons name="home" size={screenWidth * 0.062} color="#eee" />
            );
          },
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          drawerIcon: () => {
            return (
              <Ionicons
                name="person-outline"
                size={screenWidth * 0.062}
                color="#eee"
              />
            );
          },
        }}
      />
      <Drawer.Screen
        name="Messages"
        component={MessagesScreen}
        options={{
          drawerIcon: () => {
            return (
              <Ionicons
                name="chatbox-ellipses-outline"
                size={screenWidth * 0.062}
                color="#eee"
              />
            );
          },
        }}
      />

      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          drawerIcon: () => {
            return (
              <Ionicons
                name="settings-outline"
                size={screenWidth * 0.062}
                color="#eee"
              />
            );
          },
        }}
      />
    </Drawer.Navigator>
  );
};

export default MainNavigator;
