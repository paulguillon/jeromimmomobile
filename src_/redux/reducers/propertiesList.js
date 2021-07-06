import { ADD_PROPERTIES } from "../actionTypes";

const defaultState = [];

export const propertiesList = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_PROPERTIES:
      // payload : { data: data}
      return action.payload.data;
    default:
      return state;
  }
};
