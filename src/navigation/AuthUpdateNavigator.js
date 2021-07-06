import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';

//IMPORT SCENES
import HomeScreen from "../screens/auth/HomeLogin";
import UpdateProfileScreen from "../screens/auth/UpdateProfile";

// import {headerStyle, headerTitleStyle} from '../theme'

const HomeStack = createStackNavigator(
    {
        Home: HomeScreen,
        UpdateProfile: UpdateProfileScreen,
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: () => ({})
    }
);

export default HomeStack;