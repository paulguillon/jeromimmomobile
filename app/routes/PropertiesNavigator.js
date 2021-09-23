import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import PropertiesListScreen from "../scenes/home/PropertiesList";
import FavoritesListScreen from "../scenes/home/FavoritesList";
import PropertyDetailsScreen from "../components/properties/propertyDetails";
import Filters from "../components/properties/filtersProperties";

const Stack = createStackNavigator();

const PropertiesNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Liste des propriétés" component={PropertiesListScreen} />
        <Stack.Screen name="Propriété" component={PropertyDetailsScreen} />
        <Stack.Screen name="Filtres" component={Filters} />
    </Stack.Navigator>
  );
};

const FavoritesNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Favoris" component={FavoritesListScreen} />
        <Stack.Screen name="Propriété" component={PropertyDetailsScreen} />
    </Stack.Navigator>
  );
};

export { PropertiesNavigator, FavoritesNavigator };