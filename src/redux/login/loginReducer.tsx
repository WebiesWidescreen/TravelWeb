import LoginActionTypes from "./loginTypes";

// Define the initial state
interface LoginState {
    loginResponse: any;
    loginStatus: string | null;
}

const INITIAL_STATE: LoginState = {
    loginResponse: null,
    loginStatus: null,
};

// Define the loginReducer
const loginReducer = (state: LoginState = INITIAL_STATE, action: any): LoginState => {
    switch (action.type) {
        case LoginActionTypes.LOGIN_ACTION_SUCCESS:
            return {
                ...state,
                loginResponse: action.payload,
                loginStatus: 'Success',
            };

        case LoginActionTypes.LOGIN_ACTION_FALIURE:
            return {
                ...state,
                loginResponse: action.payload,
                loginStatus: 'Failure',
            };

        case LoginActionTypes.LOGIN_ACTION_CHANGED:
            return {
                ...state,
                loginResponse: null,
                loginStatus: null,
            };
        default:
            return state;
    }
};

export default loginReducer;
