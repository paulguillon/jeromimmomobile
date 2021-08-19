import { PROPERTY_MAP } from "../actionTypes";

const defaultState = [];

export const propertyMap = (state = defaultState, action) => {
  switch (action.type) {
    case PROPERTY_MAP:
      return action.payload.data;
    default:
      return state;
  }
};
