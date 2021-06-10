import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const URL_IMAGE = "http://jeromimmo.fr/public/img/properties/";

const PropertiesListItem = ({ item, navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("PropertyDetails", {
          id: item.idProperty,
        });
      }}
    >
      <View style={styles.container}>
        {item.data.length > 0 && (
            item.data.map(propertyData => (
            propertyData.keyPropertyData === 'thumbnail' && (
                <Image source={{ uri : propertyData.valuePropertyData }} style={styles.image} />
            )
            ))
        )}
        <Text style={styles.title}>{item.typeProperty}</Text>
        <Text style={styles.title}>{console.log(item.data)}</Text>
        <Text style={styles.title}>{console.log(item.data.length)}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "white",
  },
  image: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 25,
    marginTop: 10,
  },
});

export default PropertiesListItem;
