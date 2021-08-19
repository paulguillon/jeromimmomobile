import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import PropertiesListScreen from "../scenes/home/PropertiesList";
import PropertyDetailsScreen from "../components/properties/propertyDetails";
import FiltersForm from "../components/properties/filtersProperties";


const Stack = createStackNavigator();

export default function PropertiesNavigator() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Liste des propriétés" component={PropertiesListScreen} />
        <Stack.Screen name="Propriété" component={PropertyDetailsScreen} />
        <Stack.Screen name="Filtres" component={FiltersForm} />
    </Stack.Navigator>
  );
};