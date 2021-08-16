import React from 'react';
import { Provider } from "react-redux";
import store from "./redux/store";

import {createAppContainer, createSwitchNavigator} from 'react-navigation';

//IMPORT ROUTES
import AuthStack from "./routes/auth";
import HomeStack from "./routes/home";
import Properties from "./routes/properties";

import AuthLoading from "./scenes/auth/AuthLoading";
import AuthProvider from "./providers/Auth";

//APP ROUTES STACK
const AppStack = createSwitchNavigator(
    {
        Loading: AuthLoading,
        Auth: AuthStack,
        App: Properties
    },
    {initialRouteName: 'Loading'}
);

const Navigator = createAppContainer(AppStack);

export default function Router(props) {
    return (
        <Provider store={store}>
            <AuthProvider>
                <Navigator/>
            </AuthProvider>
        </Provider>
    );
}