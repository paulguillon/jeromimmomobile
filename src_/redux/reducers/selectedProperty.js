import { SELECTED_PROPERTY } from "../actionTypes";

const defaultState = [];

export const selectedProperty = (state = defaultState, action) => {
  switch (action.type) {
    case SELECTED_PROPERTY:
      return action.payload.data;
    default:
      return state;
  }
};
