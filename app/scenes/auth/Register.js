import React, { useState } from 'react';
import {Alert, View} from 'react-native';

import * as api from "../../services/auth";

import Form, {TYPES} from 'react-native-basic-form';
import CTA from "../../components/CTA";
import {Header, ErrorText} from "../../components/Shared";

export default function Register(props) {
    const {navigation} = props;

    //1 - DECLARE VARIABLES
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const fields = [
        {name: 'firstnameUser', label: 'Prénom', required: true},
        {name: 'lastnameUser', label: 'Nom', required: true},
        {name: 'emailUser', label: 'Email', required: true},
        {name: 'passwordUser', label: 'Mot de passe', required: true, secure:true},
        {name: 'passwordUser_confirmation', label: 'Confirmation du mot de passe', required: true, secure:true},
    ];

    async function onSubmit(state) {
        setLoading(true);

        try {
            let response = await api.register(state);
            setLoading(false);
            Alert.alert(
                'Registration Successful',
                response.message,
                [{text: 'OK', onPress: () => navigation.replace("Login")}],
                {cancelable: false},
            );
        } catch (error) {
            setError(error.message);
            setLoading(false)
        }
    }

    let formProps = {title: "Envoyer", fields, onSubmit, loading };
    return (
        <View style={{flex: 1, paddingHorizontal: 16, backgroundColor:"#fff"}}>
            <Header title={"Nouveau compte"}/>
            <View style={{flex:1}}>
                <ErrorText error={error}/>
                <Form {...formProps}>
                    <CTA
                        title={"Vous avez déjà un compte?"}
                        ctaText={"Login"}
                        onPress={() => navigation.replace("Login")}
                        style={{marginTop: 50}}/>
                </Form>
            </View>
        </View>
    );
};

Register.navigationOptions = ({}) => {
    return {
        title: ``
    }
};