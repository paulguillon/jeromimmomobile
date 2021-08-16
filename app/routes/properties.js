import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';

//IMPORT SCENES
import PropertiesNavigator from "./PropertiesNavigator";
import HomeScreen from "../scenes/home/Profile";
import UpdateProfileScreen from "../scenes/home/UpdateProfile";
import ProfileNavigator from "./ProfileNavigator";


const Tabs = createBottomTabNavigator();

export default function Properties() {
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
            <Tabs.Screen name="Liste des propriétés" component={PropertiesNavigator} />
          <Tabs.Screen name="Profil" component={ProfileNavigator} />
        </Tabs.Navigator>
      </NavigationContainer>
  );
};