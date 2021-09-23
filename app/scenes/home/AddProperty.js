import React, { useState } from 'react';
import { Alert, View } from 'react-native';

import * as api from "../../services/properties/index";

import Form, {TYPES} from 'react-native-basic-form';
import CTA from "../../components/CTA";
import {Header, ErrorText} from "../../components/Shared";


export default function AddProperty (props) {

    const {navigation} = props;

    //1 - DECLARE VARIABLES
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const initialData = {
        "idRoleUser": 2,
        "updated_by": 1,
        "created_by": 1,
    };

    const fields = [
        {name: 'image', label: 'Image', required: true, type:TYPES.Image },
        {name: 'typeProperty', label: 'Type de propriété', required: true},
        {name: 'priceProperty', label: 'Prix', required: true},
        {name: 'zipCodeProperty', label: 'Code postal', required: true},
        {name: 'cityProperty', label: 'Ville', required: true},
        {name: 'updated_by', label: 'Updated_by', required: true},
        {name: 'created_by', label: 'created_by', required: true},
    ];

    async function showImagePicker() {
        try{
            //return - cancelled or error or uri
            //return {cancelled:true}
            //return {error:"error message}
            //return {uri:...}
        }catch(e){
            return {error:e}
        }
    }

    async function onSubmit(state) {
        setLoading(true);

        try {
            let response = await api.fetchProperties(state);
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

    let formProps = {title: "Envoyer", fields, initialData, onSubmit, loading };
    return (
        <View style={{flex: 1, paddingHorizontal: 16, backgroundColor:"#fff"}}>
            <Header title={"Nouveau compte"}/>
            {/* <ImageUpload/> */}
            <View style={{flex:1}}>
                <ErrorText error={error}/>
                <Form {...formProps} showImagePicker={showImagePicker}>
                </Form>
        
            </View>
        </View>
    );
};

