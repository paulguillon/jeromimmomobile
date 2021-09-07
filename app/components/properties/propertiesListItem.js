import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';

import { useDispatch, useSelector } from "react-redux";

import { getFavorites } from "../../redux/selectors";
import { fetchToggleFavorite } from "../../services/properties/favorites";

import { useAuth } from "../../providers/Auth";

const URL_IMAGE = "http://jeromimmo.fr/public/img/properties/";

const PropertiesListItem = ({ item, navigation }) => {

  const {state} = useAuth();
  const [favorite, setFavorite] = useState("");

  const idUser = state.user !== null ? state.user.idUser : "";
  const dispatch = useDispatch();
  const favorites = useSelector(getFavorites);
  let icon = "heart-outline";

  // setFavorite(icon);

  {idUser && favorites.length > 0 && (
    favorites.map(propertyFavorite => (
      propertyFavorite.idProperty === item.idProperty && (
        icon = "heart"
      )
    ))
  )}
  
  {item.data && (
    item.data.map(propertyData => (
      propertyData.keyPropertyData === 'Chambres' && (
        item.chambers = propertyData.valuePropertyData + " chambres"
      ),
      propertyData.keyPropertyData === 'Surface' && (
        item.surface = propertyData.valuePropertyData
      ),
      propertyData.keyPropertyData === 'Nombre de pièces' && (
        item.rooms = propertyData.valuePropertyData
      ),
      propertyData.keyPropertyData === 'thumbnail' && (
        item.thumbnail = propertyData.valuePropertyData
      )
    ))
  )}

  return (
    <TouchableOpacity key={item.idProperty}
      onPress={() => {
        navigation.navigate("Propriété", {
          id: item.idProperty,
        });
      }}
    >
      <View style={styles.container}>
        <Image source={{ uri : item.thumbnail }} style={styles.image} />
        <Text style={styles.title}>{item.typeProperty}</Text>
        <Text style={styles.info}>{item.surface} . {item.rooms} . {item.chambers}</Text>
        <Text style={styles.info}>{item.zipCodeProperty} {item.cityProperty}</Text>
        <Text style={styles.price}>{item.priceProperty} €</Text>
        <TouchableOpacity style={styles.iconContainer} onPress={() => { 
          
              fetchToggleFavorite(dispatch, idUser, item.idProperty)
              // setFavorite(favorite === "heart" ? "heart-outline" : "heart")
         }}>
            <Ionicons style={styles.icons} name={icon} size={24} color="red" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "white",
  },
  image: {
    width: "100%",
    height: 150,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 25,
    marginTop: 10,
  },
  iconContainer: {
    backgroundColor: "white",
    borderRadius:150,
    width: 32,
    right:0,
    marginTop:138,
    marginRight:15,
    position:"absolute"
  },
  icons: {
    right:0,
    textAlign:"center"
  },
  info: {
    fontSize: 15,
    marginLeft: 25,
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    marginLeft: 25,
  },
});

export default PropertiesListItem;
