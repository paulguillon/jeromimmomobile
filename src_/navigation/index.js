import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';

import PropertiesNavigator from "./PropertiesNavigator";
import Login from "../screens/auth/LoginScreen";
import PropertiesListScreen from "../screens/PropertiesListScreen";


const Tabs = createBottomTabNavigator();

export default function AppNavigation() {
  return (
      <NavigationContainer>
        <Tabs.Navigator 
          screenOptions={
            ({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let icon;

              if (route.name === "Liste des propriétés") {
                icon = "ios-home";
              } else {
                icon = "ios-person-circle";
              }

              return <Ionicons name={icon} size={size} color={color} />;
            }
          })}
        >
          <Tabs.Screen name="Login" component={Login} />
          <Tabs.Screen name="Liste des propriétés" component={PropertiesNavigator} />
        </Tabs.Navigator>
      </NavigationContainer>
  );
};
