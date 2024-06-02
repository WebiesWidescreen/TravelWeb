import { createSelector } from "reselect";

const selectLogin = (state: { login: any; }) => state.login;

export const selectLoginResponse = createSelector(
    [selectLogin],
    (login) => login.loginResponse,
);

export const selectLoginStatus = createSelector(
    [selectLogin],
    (login) => login.loginStatus,
);