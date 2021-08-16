import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet,ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { getSelectedProperty } from "../../redux/selectors";
import { fetchSelectedProperty } from "../../services/properties";

const PropertyDetailsScreen = ({ route }) => {
  const { id } = route.params;
  const dispatch = useDispatch();

  const property = useSelector(getSelectedProperty);

  useEffect(() => {
    fetchSelectedProperty(dispatch, id);
  }, []);

  {property.data && (
    property.data.map(propertyData => (
      propertyData.keyPropertyData === 'thumbnail' && (
          property.thumbnail = propertyData.valuePropertyData
      ),
      propertyData.keyPropertyData === 'Chambres' && (
        property.chambers = propertyData.valuePropertyData + " chambres"
      ),
      propertyData.keyPropertyData === 'Type d\'achat' && (
        property.typeAchat = propertyData.valuePropertyData
      ),
      propertyData.keyPropertyData === 'Surface' && (
        property.surface = propertyData.valuePropertyData
      ),
      propertyData.keyPropertyData === 'Surface terrain' && (
        property.surfaceTerrain = propertyData.valuePropertyData
      ),
      propertyData.keyPropertyData === 'Nombre de pièces' && (
        property.rooms = propertyData.valuePropertyData
      ),
      propertyData.keyPropertyData === 'Exposition' && (
        property.exposition = propertyData.valuePropertyData
      )
    ))
)}

  return (
    <ScrollView>
      <View style={styles.container}>
        {property.thumbnail && (
    
                  <Image source={{ uri : property.thumbnail }} style={styles.image} />
        )}
        {/* {property.data && (
              property.data.map(propertyData => (
              propertyData.keyPropertyData === 'thumbnail' && (
                  <Image source={{ uri : propertyData.valuePropertyData }} style={styles.image} />
              )
              ))
        )} */}
        <Text style={styles.title}>{property.typeProperty}</Text>
        <Text style={styles.info}>{property.surface} . {property.rooms} . {property.chambers}</Text>
        <Text style={styles.info}>{property.zipCodeProperty} {property.cityProperty}</Text>
        <Text style={styles.price}>{property.priceProperty} €</Text>
        <View style={styles.descrContainer}>
          <Text style={styles.descr}>Description du bien :</Text>
          <Text style={styles.info}>Lorem ipsum dolor sit amet consectetur adipisicing elit. A nostrum aliquid dignissimos quo voluptate praesentium dolore iure fugit. Mollitia cupiditate voluptatum ipsam optio officia. Molestiae ipsum quidem molestias quae voluptatibus!</Text>
        </View>
        <View style={styles.dataContainer}>
          {property.data && (
                property.data.map(propertyData => (
                propertyData.valuePropertyData === 'true' && (
                  <Text style={styles.data}>{propertyData.keyPropertyData}</Text>
                )
                ))
          )}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    color: "#4f4f4f",
  },
  title: {
    marginTop: 10,
    fontSize: 17,
  },
  info: {
    fontSize: 15
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  descr: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "left",
  },
  image: {
    height: 200,
    width: "100%",
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 2,
  },
  data: {
    backgroundColor: "rgb(73, 84, 100)",
    color: "white",
    borderRadius: 25,
    margin: 3,
    padding: 8,
    fontSize: 12
  },
  dataContainer: {
    marginTop: 10,
    flexDirection:'row', 
    flexWrap:'wrap',
    justifyContent: 'center',
  },
  descrContainer: {
    textAlign: 'left',
  }
});

export default PropertyDetailsScreen;
