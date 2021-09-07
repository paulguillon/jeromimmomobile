import { FAVORITES_PROPERTIES } from "../actionTypes";

const defaultState = [];

export const favoritesProperties = (state = defaultState, action) => {
  switch (action.type) {
    case FAVORITES_PROPERTIES:
      // payload : { data: data}
      return action.payload.data;
    default:
      return state;
  }
};
