import { ADD_PROPERTIES, SELECTED_PROPERTY, LOGGED_IN, LOGGED_OUT } from "./actionTypes";

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

export const fetchLoggedInAction = (data) => ({
    type: LOGGED_IN,
    payload: {
        data,
    }
})

export const fetchLoggedOutAction = (data) => ({
    type: LOGGED_OUT,
    payload: {
        data,
    }
})