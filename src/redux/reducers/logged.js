import { LOGGED_IN, LOGGED_OUT } from "../actionTypes";

const  initialState = {
    isLoggedIn: false,
    user: null
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGGED_IN:{
            let { user } = action;

            return {...state, isLoggedIn: true, user};
        }

        case LOGGED_OUT:{
            return {...state, ...initialState};
        }

        default:
            return state;
    }
};

export default authReducer;