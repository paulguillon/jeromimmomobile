import { ADD_PROPERTIES, SELECTED_PROPERTY, PROPERTY_MAP, FILTERED_PROPERTIES, FILTERS } from "./actionTypes";

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

export const fetchPropertyMapAction = (data) => ({
    type: PROPERTY_MAP,
    payload: {
        data,
    }
})

export const fetchFilteredPropertiesAction = (data) => ({
    type: FILTERED_PROPERTIES,
    payload: {
        data,
    }
})

export const fetchFiltersAction = (data) => ({
    type: FILTERS,
    payload: {
        data,
    }
})
