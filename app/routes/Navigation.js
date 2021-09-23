import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Properties from "./properties";
import ProfileNavigator from "./ProfileNavigator";
import { PropertiesNavigator, FavoritesNavigator } from "./PropertiesNavigator";

import Login from "./Login";
import Logout from "./Logout";
import LoginAdmin from "./LoginAdmin";

import { useAuth } from "../providers/Auth";

const Stack = createStackNavigator();

// console.log(state);

export default function Navigation() {

const {state} = useAuth();
console.log(state)
const idUser = state.user !== null ? state.user.idUser : "";

  return (
    <NavigationContainer>

    <Stack.Navigator screenOptions={{
        headerShown: false
        }}>
        {!idUser ? ( 
            <Stack.Screen name="Logged out" component={Logout} /> 
        ) : (
        idUser && state.role.roleName === "admin" ? (
            <Stack.Screen name="LoggedAdmin" component={LoginAdmin} />
        ) : (
            <Stack.Screen name="Logged" component={Login} />
        )
        )}
    </Stack.Navigator>
    </NavigationContainer>
  );
};
