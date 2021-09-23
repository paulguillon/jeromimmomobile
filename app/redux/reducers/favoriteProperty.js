import { FAVORITE_PROPERTY } from "../actionTypes";

const defaultState = [];

export const favoriteProperty = (state = defaultState, action) => {
  switch (action.type) {
    case FAVORITE_PROPERTY:
      // payload : { data: data}
      return action.payload.data;
    default:
      return state;
  }
};
