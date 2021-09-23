import React, { useState, useEffect } from 'react';
import {StyleSheet, FlatList, View} from 'react-native';
import * as api from "../../services/properties";

import Form, {TYPES} from 'react-native-basic-form';
import CTA from "../../components/CTA";
import {Header, ErrorText} from "../../components/Shared";

import { useDispatch, useSelector } from "react-redux";

import { getFilters } from "../../redux/selectors";
import { fetchFilteredProperties } from "../../services/properties";
import { fetchFiltersAction } from "../../redux/actions";

export default function Filters({navigation}) {
    // const {navigation} = props;
    
    //1 - DECLARE VARIABLES
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const filters = useSelector(getFilters);

    const typeProperty = [
        {label:"Tous", value:"Tous"},
        {label:"Appartement", value:"Appartement"},
        {label:"Maison", value:"Maison"},
        {label:"Terrain", value:"Terrain"},
        {label:"Garage", value:"Garage"}
    ];

    const criteres = [
        {label:"Tous", value:"Tous"},
        {label:"Jardin", value:"Jardin"},
        {label:"Piscine", value:"Piscine"},
        {label:"Sous-sol", value:"Sous-sol"},
        {label:"Interphone", value:"Interphone"},
        {label:"Cheminée", value:"Cheminée"},
        {label:"Gardien", value:"Gardien"},
        {label:"Belle vue", value:"Belle vue"},
        {label:"Balcon", value:"Balcon"},
        {label:"Ascenseur", value:"Ascenseur"},
        {label:"Rez-de-chaussée", value:"Rez-de-chaussée"},
        {label:"Terrasse", value:"Terrasse"},
        {label:"Cave", value:"Cave"},
        {label:"Orientation Sud", value:"Orientation Sud"},
        {label:"Climatisation", value:"Climatisation"},
        {label:"Meublé", value:"Meublé"},
        {label:"Colocation", value:"Colocation"},
        {label:"Stationnement", value:"Stationnement"},
        {label:"Plain-pied", value:"Plain-pied"},
        {label:"Accessibilité PMR", value:"Accessibilité PMR"},
        {label:"Véranda", value:"Véranda"},
        {label:"Alarme", value:"Alarme"},
        {label:"Digicode", value:"Digicode"}
    ];
    
    const initialData = filters.length !== 0 ? filters : {
        'typeProperty' : 'Tous',
        'dataProperty' : 'Tous'
    };
    
    const fields = [
        {name: 'typeProperty', label: 'Type de bien', type: TYPES.Dropdown, options: typeProperty},
        {name: 'minPriceProperty', label: 'Budget minimum', type: TYPES.Number},
        {name: 'maxPriceProperty', label: 'Budget maximum', type: TYPES.Number},
        {name: 'zipCodeProperty', label: 'Code postal', type: TYPES.String},
        {name: 'dataProperty', label: 'Critères', type: TYPES.Dropdown, options: criteres},
    ];

    async function onSubmit(state) {
        setLoading(true);
        try {
            dispatch(fetchFiltersAction(state));

            fetchFilteredProperties(dispatch, state);
            {navigation.navigate("Liste des propriétés")}

            setLoading(false);
           
        } catch (error) {
            setError(error.message);
            setLoading(false)
        }
    }
    let formProps = {title: "Voir les biens", fields, initialData, onSubmit, loading };
    return (
        <View style={{flex: 1, paddingHorizontal: 16, backgroundColor:"#fff"}}>
            <Header title={"Mon projet"}/>
            <View style={{flex:1}}>
                <ErrorText error={error}/>
                <Form {...formProps}>
                </Form>
            </View>
        </View>
    );
};

Filters.navigationOptions = ({}) => {
    return {
        title: ``
    }
};
  