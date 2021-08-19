import axios from "axios";

import {
    fetchPropertyMapAction,
} from "../../redux/actions";

export const fetchPropertyMap = async (dispatch, cb, localisation) => {
  try {
    const response = await axios.get(`https://api-adresse.data.gouv.fr/search/?q=${localisation.cityProperty}&postcode=${localisation.zipCodeProperty}&type=municipality`, {
      params: {
      },
    });

    const localisationGps = response.data.features[0].geometry.coordinates;

    console.log(localisationGps[1], localisationGps[0])

    //A retirer si bug
    cb && cb();
    dispatch(fetchPropertyMapAction(localisationGps));
  } catch (e) {
    console.log("error requete localisationGps", e);
  }
};
