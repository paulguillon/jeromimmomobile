import React, { useState } from 'react';
import {View} from 'react-native';

import * as api from "../../services/auth";
import { useAuth } from "../../providers/Auth";

import Form, {TYPES} from 'react-native-basic-form';
import {ErrorText} from "../../components/Shared";

export default function UpdatePassword (props) {
    const {navigation} = props;

    //1 - DECLARE VARIABLES
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const { state, updateUser } = useAuth();

    const fields = [
        {name: 'passwordUser', label: 'Mot de passe', required: true, secure:true},
        {name: 'passwordUser_confirmation', label: 'Confirmation du mot de passe', required: true, secure:true},
    ];

    async function onSubmit(data) {
        setLoading(true);

        try {
            let response = await api.updateProfile(state.user.idUser, data);
            updateUser(response.user);

            setLoading(false);

            navigation.goBack();
        } catch (error) {
            setError(error.message);
            setLoading(false)
        }
    }

    return (
        <View style={{flex: 1, paddingHorizontal: 16, backgroundColor:"#fff"}}>
            <View style={{flex:1}}>
                <ErrorText error={error}/>
                <Form
                    fields={fields}
                    title={'Submit'}
                    loading={loading}
                    initialData={state.user}
                    error={error}
                    onSubmit={onSubmit}/>
            </View>
        </View>
    );
};

UpdatePassword.navigationOptions = ({}) => {
    return {
        title: `Modifier le mot de passe`
    }
};