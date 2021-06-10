import React, { useEffect } from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
// import { useDispatch } from "react-redux";

import { fetchProperties } from "../api/properties"
import { getProperties } from "../redux/selectors";
import PropertiesListItem from "../components/properties/propertiesListItem";
// import { FlatList } from 'react-native-gesture-handler';

export default function PropertiesListScreen({ navigation }) {

  const dispatch = useDispatch();
  const properties = useSelector(getProperties);

  useEffect(() => {
    fetchProperties(dispatch)
  }, []);

  const _renderItem = ({ item }) => {
    return <PropertiesListItem item={item} navigation={navigation} />
  }

  return (
    <View style={styles.container}>
      <FlatList data={properties} renderItem={_renderItem} ItemSeparatorComponent={() => <View style={styles.separatorItems} />} /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  
  separatorItems: {
    height: 1,
    backgroundColor: "grey",
  }
});
