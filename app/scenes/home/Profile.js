import React, {useState, useContext} from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';

import { useAuth } from "../../providers/Auth";

export default function Home({navigation}) {

    const {state, handleLogout} = useAuth();
    const user = state.user;

    return (
        <View style={{flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{marginBottom: 10}}>{`Mon compte`}</Text>

            <Button style={{marginBottom: 10}} title={"Mes favoris"} onPress={() => navigation.navigate('Modifier mon profil')}/>
            
            <Button style={styles.separatorItems} title={"Mes visites"} onPress={() => navigation.navigate('Modifier mon profil')}/>
            
            <Button style={styles.separatorItems} title={"Modifier le profil"} onPress={() => navigation.navigate('Modifier mon profil')}/>
            
            <Button style={styles.separatorItems} title={"Changer le mot de passe"} onPress={() => navigation.navigate('Modifier mon mot de passe')}/>
           
            <Button style={styles.separatorItems} title={"Log Out"} onPress={() => {
                handleLogout();
                navigate('Auth');
            }}/>
        </View>
    );
}

const styles = StyleSheet.create({
    separatorItems: {
        marginBottom: 10,
        color:'red',
    }
  });