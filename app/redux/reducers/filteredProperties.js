import { FILTERED_PROPERTIES } from "../actionTypes";

const defaultState = [];

export const filteredProperties = (state = defaultState, action) => {
  switch (action.type) {
    case FILTERED_PROPERTIES:
      // payload : { data: data}
      return action.payload.data;
    default:
      return state;
  }
};
