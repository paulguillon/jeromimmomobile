import React, { useState, useEffect } from "react";
import { View, Text, Modal, Pressable, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';

import { useDispatch } from "react-redux";

import { fetchFavoriteProperty } from "../../services/properties/favorites";
import { fetchToggleFavorite } from "../../services/properties/favorites";

import { useAuth } from "../../providers/Auth";

const URL_IMAGE = "http://jeromimmo.fr/public/img/properties/";

const PropertiesListItem = ({ item, navigation }) => {

  const {state} = useAuth();
  const [favorite, setFavorite] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const idUser = state.user !== null ? state.user.idUser : "";
  const dispatch = useDispatch();

  useEffect(() => {
    idUser ? fetchFavoriteProperty(dispatch, idUser, item.idProperty).then(data => setFavorite(data ? "heart" : "heart-outline")) : ""
  }, []);
  
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
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Vous devez être connecté pour avoir accès aux favoris</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.closeTextStyle}>Fermer</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Image source={{ uri : item.thumbnail }} style={styles.image} />
        <Text style={styles.title}>{item.typeProperty}</Text>
        <Text style={styles.info}>{item.surface} . {item.rooms} . {item.chambers}</Text>
        <Text style={styles.info}>{item.zipCodeProperty} {item.cityProperty}</Text>
        <Text style={styles.price}>{item.priceProperty} €</Text>
        <TouchableOpacity style={styles.iconContainer} onPress={() => { 
              idUser ? (fetchToggleFavorite(dispatch, idUser, item.idProperty) ? setFavorite(favorite === "heart" ? "heart-outline" : "heart") : "") : setModalVisible(true)
         }}>
            <Ionicons style={styles.icons} name={favorite ? favorite : "heart-outline"} size={24} color="red" />
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
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  closeTextStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  }
});

export default PropertiesListItem;
