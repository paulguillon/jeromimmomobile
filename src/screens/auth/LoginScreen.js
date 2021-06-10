import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

export default function TabOneScreen() {
  const [loginInputValue, setLoginInputValue] = useState("");
  const [passwordInputValue, setPasswordInputValue] = useState("");
  const _onPressBtn = () => {
    if (loginInputValue.length > 0 && passwordInputValue.length > 0) {
      setLoginInputValue("");
      setPasswordInputValue("");
    }
  };

  // const _onChangeText = value => {
  //   setTitle(value);
  // };

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
