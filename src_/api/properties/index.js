import axios from "axios";

import {
    fetchPropertiesAction,
    fetchSelectedPropertyAction,
} from "../../redux/actions";

const ENDPOINT_PROPERTIES = "http://jeromimmo.fr/public/index.php/api/v1/properties";

export const fetchProperties = async (dispatch, cb, query) => {
  try {
    console.log("Dans fetch recipes");
    const response = await axios.get(ENDPOINT_PROPERTIES, {
      params: {
      },
    });
    console.log("La réponse =", response.data.properties);

    //A retirer si bug
    cb && cb();
    dispatch(fetchPropertiesAction(response.data.properties));
  } catch (e) {
    console.log("error requete properties", e);
  }
};

export const fetchSelectedProperty = async (dispatch, propertyId) => {
  try {
    console.log("Dans fetch selected recipe");
    const response = await axios.get(
      ENDPOINT_PROPERTIES + "/" + propertyId,
      {
        params: {
        },
      }
    );
    console.log("Response =", response.data);
    console.log("Response =", propertyId);


    dispatch(fetchSelectedPropertyAction(response.data));
  } catch (e) {
    console.log("error", e);
  }
};
