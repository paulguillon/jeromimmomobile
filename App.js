import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Provider } from "react-redux";

import AppNavigation from "./src/navigation"
import store from "./src/redux/store";

import Router from './src/navigation/router'

export default function App() {
  return (
    // <Provider store={store}>
    //   <SafeAreaView style={styles.container}>
    //     <AppNavigation />
    //   </SafeAreaView>
    // </Provider>
     <Router/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});
