import LoginActionTypes from "./loginTypes";

// LOGIN ACTION
export const loginActionStart = (start: any) => ({
    type: LoginActionTypes.LOGIN_ACTION_START,
    payload: start,
});

export const loginActionSuccess = (success: any) => ({
    type: LoginActionTypes.LOGIN_ACTION_SUCCESS,
    payload: success,
});

export const loginActionFaliure = (faliure: any) => ({
    type: LoginActionTypes.LOGIN_ACTION_FALIURE,
    payload: faliure,
});

export const loginActionChanged = () => ({
    type: LoginActionTypes.LOGIN_ACTION_CHANGED,
});

export const loginActionReset = () => ({
    type: LoginActionTypes.LOGIN_ACTION_RESET,
});