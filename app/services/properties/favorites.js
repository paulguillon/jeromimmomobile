import axios from "axios";

import {
    fetchFavoritesPropertiesAction,
    fetchToggleFavoriteAction
} from "../../redux/actions";

const ENDPOINT_PROPERTIES = "http://jeromimmo.fr/public/index.php/api/v1";

export const fetchFavoritesProperties = async (dispatch, userId) => {
  try {
    const response = await axios.get(ENDPOINT_PROPERTIES + "/users/" + userId + "/favorites");

    const favorites = response.data;
    console.log(favorites);

    dispatch(fetchFavoritesPropertiesAction(favorites));

  } catch (e) {
    console.log("error", e);
  }
};

export const fetchToggleFavorite = async (dispatch, userId, propertyId) => {
    try {
    //   const response = await axios.patch(ENDPOINT_PROPERTIES + "/favorites/?idUser=" + userId + "&idProperty=" + propertyId);
    //   const favorites = response;
    //   console.log(response);
    //   dispatch(fetchToggleFavoriteAction(favorites));

    const response = await axios({
        method: 'PATCH',
        url: `https://jeromimmo.fr/api/v1/favorites`,
        data: {
          idUser: userId,
          idProperty: propertyId,
        }
      });
      console.log(response);
  
    } catch (e) {
      console.log("error", e);
    }
  };