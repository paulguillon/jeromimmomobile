import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//IMPORT SCENES
import LoginNavigator from "./loginNavigator";

const Tabs = createBottomTabNavigator();

export default function Login() {
    return (
        <NavigationContainer>
          <Tabs.Navigator>
            <Tabs.Screen name="Login" component={LoginNavigator} />
            <Tabs.Screen name="Register" component={LoginNavigator} />
            <Tabs.Screen name="Username" component={LoginNavigator} />
            <Tabs.Screen name="ForgotPassword" component={LoginNavigator} />
          </Tabs.Navigator>
        </NavigationContainer>
    );
  };