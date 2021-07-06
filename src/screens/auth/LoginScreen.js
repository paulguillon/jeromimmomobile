import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

import * as api from "../../api/auth";
import {useAuth} from "./Auth";

import {ErrorText} from "../../components/auth/Shared";

export default function TabOneScreen() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  // const { handleLogin } = useAuth();

  const [loginInputValue, setLoginInputValue] = useState("");
  const [passwordInputValue, setPasswordInputValue] = useState("");

  async function _onPressBtn(state) {
    setLoading(true);

    try {
      console.log(state);
        let response = await api.login(loginInputValue, passwordInputValue);
        console.log(response.token);
        // await handleLogin(response);

        // setLoading(false);

        //check if username is null
        let username = (response.user.username !== null);
        if (username) navigate('App');
        else navigation.replace('Username');
    } catch (error) {
        setError(error.message);
        setLoading(false)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Se connecter</Text>
      <View style={styles.separator} />
      <Text style={styles.labelInput}>Identifiant</Text>
      <TextInput style={styles.containerInput}
        value={loginInputValue} onChangeText={identifiant => setLoginInputValue(identifiant)}
      />
      <Text style={styles.labelInput}>Mot de passe</Text>
      <TextInput style={styles.containerInput}
        value={passwordInputValue} onChangeText={password => setPasswordInputValue(password)}
      />
      <ErrorText error={error}/>
      <View style={styles.separatorButton} />
      <Button onPress={_onPressBtn} title="Connexion" color="#68b0ab" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 15,
    height: 1,
    width: '80%',
  },
  containerInput: {
    width: "75%",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 4,
    paddingLeft: 7
  },
  labelInput: {
    marginBottom: 10,
    marginTop: 10
  },
  separatorButton: {
    marginTop: 20
  }
});
