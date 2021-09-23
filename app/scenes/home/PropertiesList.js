import React, { useEffect } from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import {SearchBar} from 'react-native-elements';
import { useAuth } from "../../providers/Auth";

import { fetchProperties } from "../../services/properties"
import { fetchFavoritesProperties } from "../../services/properties/favorites"
import PropertiesListItem from "../../components/properties/propertiesListItem";
import { getFilteredProperties, getFilters, getProperties } from "../../redux/selectors";

export default function PropertiesListScreen({ navigation }) {

  const filteredProperties = useSelector(getFilteredProperties);

  const dispatch = useDispatch();
  const {state} = useAuth();
  const idUser = state.user !== null ? state.user.idUser : "";

  const properties = useSelector(getProperties);
  const filters = useSelector(getFilters);

  useEffect(() => {
    fetchProperties(dispatch)
  }, []);

  idUser ? fetchFavoritesProperties(dispatch, idUser) : "";

console.log("liste");
  const _renderItem = ({ item }) => {
    return <PropertiesListItem item={item} navigation={navigation} />
  }
 
  return (
    <View style={styles.container}>
      <SearchBar
          round={true}
          lightTheme={true}
          placeholder={filters.length !== 0 ? JSON.stringify(filters) : "Filtrer..."}
          autoCapitalize='none'
          autoCorrect={false}
          onFocus={() => {
            navigation.navigate("Filtres");
          }}
          clearIcon={null}
          value={filters.length !== 0 ? JSON.stringify(filters) : "Filtrer..."}
        />
      { filteredProperties !== "Aucun résultat" ? 
      <FlatList data={filteredProperties.length > 0 ? filteredProperties : properties} keyExtractor={item => "item" + item.idProperty.toString()} renderItem={_renderItem} ItemSeparatorComponent={() => <View style={styles.separatorItems} />} /> 
      : <Text>Aucun résultat</Text>}
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
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});
