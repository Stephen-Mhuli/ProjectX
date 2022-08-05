import { createDrawerNavigator } from "@react-navigation/drawer";
import Ionicons from "@expo/vector-icons/Ionicons";

import HomeStackNavigator from "./HomeStackNavigator";
import MessagesScreen from "../screens/MessagesScreen";
import SettingsScreen from "../screens/SettingsScreen";
import ProfileScreen from "../screens/ProfileScreen";

import CustomDrawer from "../components/CustomDrawer";

const Drawer = createDrawerNavigator();

const MainNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerLabelStyle: {
          marginLeft: -20,
          fontFamily: "nunito_regular",
          fontSize: 16,
        },
        drawerActiveTintColor: "#fff",
        drawerInactiveTintColor: "#333",
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          drawerIcon: () => {
            return <Ionicons name="home" size={24} color="#fff" />;
          },
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          drawerIcon: () => {
            return <Ionicons name="person-outline" size={24} color="#fff" />;
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
                size={24}
                color="#fff"
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
            return <Ionicons name="settings-outline" size={24} color="#fff" />;
          },
        }}
      />
    </Drawer.Navigator>
  );
};

export default MainNavigator;
