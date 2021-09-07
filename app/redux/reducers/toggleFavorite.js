import { TOGGLE_FAVORITE } from "../actionTypes";

const defaultState = [];

export const toggleFavorite = (state = defaultState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      return action.payload.data;
    default:
      return state;
  }
};