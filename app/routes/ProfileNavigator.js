import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../scenes/home/Profile";
import UpdateProfileScreen from "../scenes/home/UpdateProfile";
import UpdatePasswordScreen from "../scenes/home/UpdatePassword";
import AuthStack from "./auth";

const Stack = createStackNavigator();

export default function ProfileNavigator() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Mon profil" component={HomeScreen} />
        <Stack.Screen name="Modifier mon profil" component={UpdateProfileScreen} />
        <Stack.Screen name="Modifier mon mot de passe" component={UpdatePasswordScreen} />
        <Stack.Screen name="Auth" component={AuthStack} />
    </Stack.Navigator>
  );
};
