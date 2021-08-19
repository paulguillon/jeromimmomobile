import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet,ScrollView } from "react-native";
import { MapContainer, TileLayer, Marker, CircleMarker } from 'react-leaflet';
import L from "leaflet";
import { useDispatch, useSelector } from "react-redux";

import { getPropertyMap } from "../../redux/selectors";
import { fetchPropertyMap } from "../../services/leafletMap";

const localisationGPSscreen = ({ route }) => {
  const { zipCode } = route.params;
  const dispatch = useDispatch();

  const localisation = useSelector(getPropertyMap);

  useEffect(() => {
    fetchPropertyMap(dispatch, zipCode);
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        {localisation ? (
                <MapContainer center={localisation} zoom={11} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={localisation}> </Marker>
                    <CircleMarker center={localisation} radius={40}></CircleMarker>
                </MapContainer>
            ) : (
                <Loader />
            )}
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
    maxHeight: "500px", 
    overflow: "hidden"
  }
});

export default localisationGPSscreen;
