import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet,ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { getSelectedProperty } from "../../redux/selectors";
import { fetchSelectedProperty } from "../../api/properties";

const PropertyDetails = ({ route, navigation }) => {
  const { id } = route.params;
  const dispatch = useDispatch();

  const property = useSelector(getSelectedProperty);

  useEffect(() => {
    fetchSelectedProperty(dispatch, id);
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        {property.data.length > 0 && (
            property.data.map(propertyData => (
            propertyData.keyPropertyData === 'thumbnail' && (
                <Image source={{ uri : propertyData.valuePropertyData }} style={styles.image} />
            )
            ))
        )}
          <Text style={styles.title}>{console.log(property.data)}</Text>
          <Text style={styles.title}>{property.typeProperty}</Text>
        <Text style={styles.title}>{property.cityProperty}</Text>
        <Text style={styles.title}>{console.log(property.typeProperty)}</Text>
        <Text style={styles.title}>{console.log(property.cityProperty)}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 25,
    marginTop: 50,
  }
});

export default PropertyDetails;
