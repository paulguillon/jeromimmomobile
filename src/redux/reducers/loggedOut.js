import { LOGGED_OUT } from "../actionTypes";

const  initialState = {
    isLoggedIn: false,
    user: null
};

export const authReducerLogout = (state = initialState, action) => {
    switch (action.type) {

        case LOGGED_OUT:{
            return {...state, ...initialState};
        }

        default:
            return state;
    }
};

export default authReducerLogout;