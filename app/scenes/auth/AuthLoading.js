import React, {useEffect} from 'react';
import {ActivityIndicator, View, Text} from 'react-native';
import { StackActions } from 'react-navigation';

import * as api from "../../services/auth";

import { useAuth } from "../../providers/Auth";

export default function AuthLoading(props) {
    const {navigate} = props.navigation;
    const { getAuthState } = useAuth();
    console.log("Bla");

    useEffect(() => {
        initialize()
    }, []);

    async function initialize() {
        try {
            const {user} = await getAuthState();
            console.log(user,"12");
            if (user) {
                //check if username exist
                let username = !!(user.firstnameUser);

                let userRole = await api.getRole(user.idUser);
console.log(userRole)
                if (userRole.roleName === "admin") navigate('App');
                // else navigate('Auth', {}, StackActions.replace({ routeName: "Username" }))
                else navigate('App')

            } else navigate('App');
        } catch (e) {
            navigate('App');
        }
    }

    return (
        <View style={{backgroundColor: "#fff", alignItems: 'center', justifyContent: 'center', flex: 1}}>
            <ActivityIndicator/>
            <Text>{"Loading User Data"}</Text>
        </View>
    );
};