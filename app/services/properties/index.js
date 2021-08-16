import axios from "axios";

import {
    fetchPropertiesAction,
    fetchSelectedPropertyAction,
} from "../../redux/actions";

const ENDPOINT_PROPERTIES = "http://jeromimmo.fr/public/index.php/api/v1/properties";

export const fetchProperties = async (dispatch, cb, query) => {
  try {
    const response = await axios.get(ENDPOINT_PROPERTIES, {
      params: {
      },
    });

    const properties = response.data.properties;

    for (let i = 0; i < properties.length; i++) {
      let property = properties[i];
      const propertyData = await axios.get(ENDPOINT_PROPERTIES + "/" + property.idProperty + "/data");
      const dataPropertyValue = propertyData.data.data;
      property.data = dataPropertyValue;
    }
    console.log(properties)

    //A retirer si bug
    cb && cb();
    dispatch(fetchPropertiesAction(properties));
  } catch (e) {
    console.log("error requete properties", e);
  }
};

export const fetchSelectedProperty = async (dispatch, propertyId) => {
  try {
    const response = await axios.get(ENDPOINT_PROPERTIES + "/" + propertyId);

    const property = response.data;

    const propertyData = await axios.get(ENDPOINT_PROPERTIES + "/" + property.idProperty + "/data");
    property.data = propertyData.data.data;
    console.log(property.data);
    dispatch(fetchSelectedPropertyAction(property));
  } catch (e) {
    console.log("error", e);
  }
};
