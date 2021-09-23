import React from 'react';
import { Provider } from "react-redux";
import store from "./redux/store";
import AuthProvider from "./providers/Auth";
import Navigator from "./routes/Navigation";
// import Navigation from "./routes/Navigation";

// import {createAppContainer, createSwitchNavigator} from 'react-navigation';

//IMPORT ROUTES
// import AuthStack from "./routes/auth";
// import Login from "./routes/old/login";

// import AuthLoading from "./scenes/auth/AuthLoading";

//APP ROUTES STACK
// const AppStack = createSwitchNavigator(
//     {
//         Loading: AuthLoading,
//         Auth: AuthStack,
//         App: Properties,
//         Test: Login
//     },
//     {initialRouteName: 'Loading'}
// );

// const Navigator = createAppContainer(AppStack);

export default function Router(props) {
    return (
        <Provider store={store}>
            <AuthProvider>
                <Navigator/>
            </AuthProvider>
        </Provider>
    );
}