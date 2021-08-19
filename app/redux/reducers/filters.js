import { FILTERS } from "../actionTypes";

const defaultState = [];

export const filters = (state = defaultState, action) => {
  switch (action.type) {
    case FILTERS:
      // payload : { data: data}
      return action.payload.data;
    default:
      return state;
  }
};
