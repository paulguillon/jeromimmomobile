import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';

//IMPORT SCENES
import HomeScreen from "../scenes/home/Profile";
import UpdateProfileScreen from "../scenes/home/UpdateProfile";
import PropertiesListScreen from "../scenes/home/PropertiesList";
import PropertyDetailsScreen from "../components/properties/propertyDetails";

import {headerStyle, headerTitleStyle} from '../theme'

const HomeStack = createStackNavigator(
    {
        Home: HomeScreen,
        UpdateProfile: UpdateProfileScreen,
        PropertiesList: PropertiesListScreen,
        PropertyDetails: PropertyDetailsScreen
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: () => ({headerStyle, headerTitleStyle})
    }
);

export default HomeStack;