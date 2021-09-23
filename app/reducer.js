//Action Types
export const LOGGED_IN = `auth/LOGGED_IN`;
export const LOGGED_OUT = `auth/LOGGED_OUT`;

export const  initialState = {
    isLoggedIn: false,
    user: null,
    role: null
};

//REDUCER
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGGED_IN:{
            let { user, role } = action;

            return {...state, isLoggedIn: true, user, role};
        }

        case LOGGED_OUT:{
            return {...state, ...initialState};
        }

        default:
            return state;
    }
};

export default authReducer;