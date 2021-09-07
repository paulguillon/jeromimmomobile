import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';

//IMPORT SCENES
import PropertiesNavigator from "./PropertiesNavigator";
import HomeScreen from "../scenes/home/Profile";
import UpdateProfileScreen from "../scenes/home/UpdateProfile";
import ProfileNavigator from "./ProfileNavigator";
import LoginNavigator from "./loginNavigator";

import { useAuth } from "../providers/Auth";

const Tabs = createBottomTabNavigator();

export default function Properties() {
  const {state} = useAuth();
  // const idUser = "";
  const idUser = state.user !== null ? state.user.idUser : "";
  // console.log(state.user);
  return (
      <NavigationContainer>
        <Tabs.Navigator 
          screenOptions={
            ({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let icon;

              if (route.name === "Liste des propriétés") {
                icon = "ios-home";
              } if (route.name === "Mes favoris") {
                icon = "ios-heart";
              } if (route.name === "Profil" || route.name === "Login") {
                icon = "ios-person-circle";
              }

              return <Ionicons name={icon} size={size} color={color} />;
            }
          })}
        >
          <Tabs.Screen name="Liste des propriétés" component={PropertiesNavigator} />
          <Tabs.Screen name="Mes favoris" component={PropertiesNavigator} />
          {idUser ? 
            <Tabs.Screen name="Profil" component={ProfileNavigator} /> : 
            <Tabs.Screen name="Login" component={LoginNavigator} /> 
          }
          {/* <Tabs.Screen name="Login" component={LoginNavigator} />
          <Tabs.Screen name="Profil" component={ProfileNavigator} /> */}
        </Tabs.Navigator>
      </NavigationContainer>
  );
};