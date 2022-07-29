
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './app/screens/HomeScreen';
import CarDetailsScreen from "./app/screens/CarDetailsScreen";
import ProfileScreen from './app/screens/ProfileScreen';
import MessagesScreen from './app/screens/MessagesScreen';
//import { createAppContainer } from 'react-navigation';
const Stack = createNativeStackNavigator();


export default function App() {
  return (

      <NavigationContainer>
         <Stack.Navigator >
            <Stack.Screen
              name='Home'
              component={HomeScreen}
              />
            <Stack.Screen
              name='Messages'
              component={MessagesScreen}
              />
            
            <Stack.Screen
              name='Details'
              component={CarDetailsScreen}
              options={{title: 'Details'}}
              />
            
            <Stack.Screen
              name='Profile'
              component={ProfileScreen}
              options={{title: 'Profile'}}
              />
            
          </Stack.Navigator>
      </NavigationContainer>

  );
};
