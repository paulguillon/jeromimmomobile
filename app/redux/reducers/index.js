import { combineReducers } from "redux";

import { propertiesList } from "./propertiesList";
import { selectedProperty } from "./selectedProperty";

export default combineReducers({
    propertiesList,
    selectedProperty
});