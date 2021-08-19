import { combineReducers } from "redux";

import { propertiesList } from "./propertiesList";
import { selectedProperty } from "./selectedProperty";
import { propertyMap } from "./propertyMap";
import { filteredProperties } from "./filteredProperties";
import { filters } from "./filters";

export default combineReducers({
    propertiesList,
    selectedProperty,
    propertyMap,
    filteredProperties,
    filters
});