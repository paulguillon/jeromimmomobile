import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

//IMPORT SCENES
import RegisterScreen from "../scenes/auth/Register";
import LoginScreen from "../scenes/auth/Login";
import UsernameScreen from "../scenes/auth/Username";
import ForgotPasswordScreen from "../scenes/auth/ForgotPassword";
import PropertiesNavigator from "./PropertiesNavigator";

const Stack = createStackNavigator();

export default function LoginNavigator() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Username" component={UsernameScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
    </Stack.Navigator>
  );
};