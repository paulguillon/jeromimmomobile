import React, { useState } from 'react';
import {View} from 'react-native';

import * as api from "../../services/auth";
import { useAuth } from "../../providers/Auth";

import Form from 'react-native-basic-form';
import {Header, ErrorText} from "../../components/Shared";

export default function Username (props) {
    const {navigation} = props;

    //1 - DECLARE VARIABLES
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const { state, updateUser } = useAuth();

    const fields = [
        {name: 'firstnameUser', label: 'Username', required: true}
    ];

    async function onSubmit(data) {
        setLoading(true);

        try {
            let response = await api.updateProfile(state.user.idUser, data);
            updateUser(response.user);

            setLoading(false);

            navigation.navigate('App');
        } catch (error) {
            setError(error.message);
            setLoading(false)
            navigation.navigate('Login');
        }
    }

    let formProps = {title: "Envoyer", fields, onSubmit, loading };
    return (
        <View style={{flex: 1, paddingHorizontal: 16, backgroundColor:"#fff"}}>
            <Header title={"Select Username"}/>
            <View style={{flex:1}}>
                <ErrorText error={error}/>
                <Form {...formProps}/>
            </View>
        </View>
    );
};

Username.navigationOptions = ({}) => {
    return {
        title: ``
    }
};