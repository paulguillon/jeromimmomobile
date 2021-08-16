import React, { useEffect } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { fetchProperties } from "../../services/properties"
import { getProperties } from "../../redux/selectors";
import PropertiesListItem from "../../components/properties/propertiesListItem";

export default function PropertiesListScreen({ navigation }) {

  const dispatch = useDispatch();
  const properties = useSelector(getProperties);

  useEffect(() => {
    fetchProperties(dispatch)
  }, []);

  const _renderItem = ({ item }) => {
    return <PropertiesListItem item={item} keyExtractor={(item, idProperty) => {
      return item.idProperty;
    }} navigation={navigation} />
  }

  return (
    <View style={styles.container}>
      <FlatList data={properties} keyExtractor={(item, index) => 'key'+index} renderItem={_renderItem} ItemSeparatorComponent={() => <View style={styles.separatorItems} />} /> 
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
