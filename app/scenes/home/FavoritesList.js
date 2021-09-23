import React, { useEffect } from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useAuth } from "../../providers/Auth";

import { fetchFavoritesProperties } from "../../services/properties/favorites"
import PropertiesListItem from "../../components/properties/propertiesListItem";
import { getFavorites, getProperties } from "../../redux/selectors";
import { fetchProperties } from "../../services/properties"

export default function FavoritesListScreen({ navigation }) {

  const dispatch = useDispatch();
  const {state} = useAuth();
  const idUser = state.user !== null ? state.user.idUser : "";

  const favorites = useSelector(getFavorites);
  const properties = useSelector(getProperties);

  useEffect(() => {
    fetchFavoritesProperties(dispatch, idUser)
    fetchProperties(dispatch)
  }, []);

  let favoritesArray = [];
  let propertyArray = [];

  favorites.forEach(favorite => {
    favoritesArray.push(favorite.idProperty);
  });

  properties.forEach(property => {
    if (favoritesArray.includes(property.idProperty)) {
      propertyArray.push(property)
    }
  })

  const _renderItem = ({ item }) => {
    return <PropertiesListItem item={item} navigation={navigation} />
  }
 
  return (
    <View style={styles.container}>
      <FlatList data={propertyArray} keyExtractor={item => "item" + item.idProperty.toString()} renderItem={_renderItem} ItemSeparatorComponent={() => <View style={styles.separatorItems} />} /> 
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
  }, 
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  }
});
