import { combineReducers } from "redux";

import { propertiesList } from "./propertiesList";
import { selectedProperty } from "./selectedProperty";
import { authReducer } from "./logged";

export default combineReducers({
    propertiesList,
    selectedProperty,
    authReducer
});