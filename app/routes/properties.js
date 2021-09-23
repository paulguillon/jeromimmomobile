import React from 'react';
import { useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';

//IMPORT SCENES
import { PropertiesNavigator, FavoritesNavigator } from "./PropertiesNavigator";
import ProfileNavigator from "./ProfileNavigator";
import LoginNavigator from "./loginNavigator";

import { getFavorites } from "../redux/selectors";

import { useAuth } from "../providers/Auth";

const Tabs = createBottomTabNavigator();

export default function Properties() {

  const {state} = useAuth();
  console.log(state);
  const idUser = state.user !== null ? state.user.idUser : "";

  const favorites = useSelector(getFavorites);

  return (
      // <NavigationContainer>
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
          
          {idUser ? (
            <>
              <Tabs.Screen name="Mes favoris" options={{ tabBarBadge: favorites.length }} component={FavoritesNavigator} />
              <Tabs.Screen name="Profil" component={ProfileNavigator} />
            </>
          ) : (
            <Tabs.Screen name="Login" component={LoginNavigator} /> 
          )}
        </Tabs.Navigator>
      // </NavigationContainer>
  );
};