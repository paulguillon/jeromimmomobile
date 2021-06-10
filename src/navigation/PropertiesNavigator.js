import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import PropertiesListScreen from "../../src/screens/PropertiesListScreen";
import PropertyDetails from "../components/properties/propertyDetails";


const Stack = createStackNavigator();

export default function PropertiesNavigator() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Liste des propriétés" component={PropertiesListScreen} />
        <Stack.Screen name="PropertyDetails" component={PropertyDetails} />
    </Stack.Navigator>
  );
};
