import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import UserinfoScreen from "./screens/UserinfoScreen";
import MoreinfoScreen from "./screens/MoreInfoScreen";
import AddConfessionScreen from "./screens/AddConfessionScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeStack" component={HomeScreen} />
      <Stack.Screen name="Moreinfo" component={MoreinfoScreen} />
      <Stack.Screen name="Userinfo" component={UserinfoScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Moreinfo') {
            iconName = 'info-circle';
          } else if (route.name === 'Addconfession') {
            iconName = 'plus';
          } else if (route.name === 'Login') {
            iconName = 'sign-in-alt';
          } else if (route.name === 'Register') {
            iconName = 'user-plus';
          } else if (route.name === 'userinfo'){
            iconName = 'user'
          }

          return <FontAwesome5 name={iconName} size={size} color={color} />;
        },
      })}>
        <Tab.Screen name="Home" component={HomeStack} options={{ headerShown: false }} />
        <Tab.Screen name="Addconfession" component={AddConfessionScreen} />
        <Tab.Screen name="userinfo" component={UserinfoScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
