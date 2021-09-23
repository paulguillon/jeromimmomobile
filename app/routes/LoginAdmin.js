import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from "@react-navigation/stack";

//IMPORT SCENES
import AddProperty from "../scenes/home/AddProperty";
//IMPORT SCENES PropertiesNavigator
import PropertiesListScreen from "../scenes/home/PropertiesList";
import PropertyDetailsScreen from "../components/properties/propertyDetails";
import Filters from "../components/properties/filtersProperties";
//IMPORT SCENES ProfileNavigator
import HomeScreen from "../scenes/home/Profile";
import UpdateProfileScreen from "../scenes/home/UpdateProfile";
import UpdatePasswordScreen from "../scenes/home/UpdatePassword";
import AuthStack from "./auth";

const Tabs = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function LoginAdmin() {

  return (
        <Tabs.Navigator 
          screenOptions={
            ({ route }) => ({
            tabBarIcon: ({ color, size }) => {
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
          <Tabs.Screen name="Ajouter une propriété" component={AddProperty} />
          <Tabs.Screen name="Profil" component={ProfileNavigator} />
        </Tabs.Navigator>
  );
};

const PropertiesNavigator = () => {
    return (
      <Stack.Navigator>
          <Stack.Screen name="Liste des propriétés" component={PropertiesListScreen} />
          <Stack.Screen name="Propriété" component={PropertyDetailsScreen} />
          <Stack.Screen name="Filtres" component={Filters} />
      </Stack.Navigator>
    );
  };

const ProfileNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Mon profil" component={HomeScreen} />
        <Stack.Screen name="Modifier mon profil" component={UpdateProfileScreen} />
        <Stack.Screen name="Modifier mon mot de passe" component={UpdatePasswordScreen} />
    </Stack.Navigator>
  );
};