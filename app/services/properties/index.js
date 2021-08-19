import axios from "axios";

import {
    fetchPropertiesAction,
    fetchSelectedPropertyAction,
    fetchFilteredPropertiesAction
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

    dispatch(fetchSelectedPropertyAction(property));
  } catch (e) {
    console.log("error", e);
  }
};

export async function fetchFilteredProperties(dispatch, data){
  try {
    
  let filtersArray = [];

  if (data.typeProperty != "Tous") filtersArray.push(`typeProperty=${data.typeProperty}`);
  if (data.minPriceProperty) filtersArray.push(`minPriceProperty=${data.minPriceProperty}`);
  if (data.maxPriceProperty) filtersArray.push(`maxPriceProperty=${data.maxPriceProperty}`);
  if (data.zipCodeProperty) filtersArray.push(`zipCodeProperty=${data.zipCodeProperty}`);
  if (data.dataproperty) data.dataproperty.forEach((data) => filtersArray.push(`${data}=true`));

  let filters = "?" + filtersArray.join("&");

  const response = await axios.get(ENDPOINT_PROPERTIES + filters, {
    params: {
    },
  });

    const properties = response.data.properties;

    dispatch(fetchFilteredPropertiesAction("Aucun résultat"));

    if (properties.length) {
      for (let i = 0; i < properties.length; i++) {
        let property = properties[i];
        const propertyData = await axios.get(ENDPOINT_PROPERTIES + "/" + property.idProperty + "/data");
        const dataPropertyValue = propertyData.data.data;
        property.data = dataPropertyValue;
      }
      dispatch(fetchFilteredPropertiesAction(properties));
    }

  } catch (e) {
    console.log("error requete properties", e);
  }

}