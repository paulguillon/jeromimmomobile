import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';

//IMPORT SCENES
import RegisterScreen from "../screens/auth/scenes/Register";
import LoginScreen from "../screens/auth/scenes/Login";
import UsernameScreen from "../screens/auth/scenes/Username";
import ForgotPasswordScreen from "../screens/auth/scenes/ForgotPassword";

// import {headerStyle, headerTitleStyle} from '../theme'

//Create Routes
const AuthStack = createStackNavigator(
    {
        Register: RegisterScreen,
        Login: LoginScreen,
        Username: UsernameScreen,
        ForgotPassword: ForgotPasswordScreen
    },
    {
        initialRouteName: 'Login',
        defaultNavigationOptions: () => ({})
    }
);

export default AuthStack;