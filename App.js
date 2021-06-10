import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Provider } from "react-redux";

import AppNavigation from "./src/navigation"
import store from "./src/redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <AppNavigation />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});
