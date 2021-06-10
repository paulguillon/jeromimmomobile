import { ADD_PROPERTIES, SELECTED_PROPERTY } from "./actionTypes";

export const fetchPropertiesAction = (data) => ({
    type: ADD_PROPERTIES,
    payload: {
        data,
    }
})

export const fetchSelectedPropertyAction = (data) => ({
    type: SELECTED_PROPERTY,
    payload: {
        data,
    }
})