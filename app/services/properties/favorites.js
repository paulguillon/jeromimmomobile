import axios from "axios";

import {
    fetchFavoritesPropertiesAction,
    fetchToggleFavoriteAction,
    fetchFavoritePropertyAction
} from "../../redux/actions";

const ENDPOINT_PROPERTIES = "http://jeromimmo.fr/public/index.php/api/v1";

export const fetchFavoritesProperties = async (dispatch, userId) => {
  try {
    const response = await axios.get(ENDPOINT_PROPERTIES + "/users/" + userId + "/favorites");

    const favorites = response.data;

    dispatch(fetchFavoritesPropertiesAction(favorites));

  } catch (e) {
    console.log("error fetch favorites", e);
  }
};

export const fetchFavoriteProperty = async (dispatch, userId, propertyId) => {
    try {
      const response = await axios.get(ENDPOINT_PROPERTIES + "/favorites/?idUser=" + userId + "&idProperty=" + propertyId);
      const favorite = response.data;

      const userFavorites = await axios.get(ENDPOINT_PROPERTIES + "/users/" + userId + "/favorites");
      const favorites = userFavorites.data;
      dispatch(fetchFavoritesPropertiesAction(favorites));
  
      return favorite;
  
    } catch (e) {
      console.log("error fetch favorite", e);
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

    } catch (e) {
      console.log("error toggle favorite", e);
    }
  };