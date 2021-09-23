import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//IMPORT SCENES
import localisationGPSscreen from "../../components/properties/propertyMap";

const Tabs = createBottomTabNavigator();
console.log("ok")

export default function Login() {
    return (
        <NavigationContainer>
          <Tabs.Navigator>
            <Tabs.Screen name="Test" component={localisationGPSscreen} />
          </Tabs.Navigator>
        </NavigationContainer>
    );
  };