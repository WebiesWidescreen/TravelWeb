import { takeLatest, put, all, call } from "redux-saga/effects";
import LoginActionTypes from "./loginTypes";
import { userLogin } from "./loginService";
import { loginActionSuccess, loginActionFaliure, loginActionChanged } from "./loginAction";
import { encodeJson } from "../encodeDecode";

export function* startLogin({ payload }: any): Generator<any, void, any> {
    try {
        const key = 'UserLoginKey';
        const jsonData = {
            PhoneNumber: payload.phoneNumber,
            UserName: payload.userName,
            Email: payload.mail,
        }
        const encodeData = encodeJson(jsonData, key);
        const responseData = yield call(userLogin, encodeData);
        if (responseData.data.statusCode == '100') {
            yield put(loginActionFaliure(responseData.data));
        } else {
            yield put(loginActionSuccess(responseData.data));
        }
    } catch (error) {
        yield put(loginActionFaliure(error));
    }

}

export function* resetLogin(): Generator<any, void, any> {
    yield put(loginActionChanged());
}

export function* onLoginStart() {
    yield takeLatest(LoginActionTypes.LOGIN_ACTION_START, startLogin);
}

export function* onLoginReset() {
    yield takeLatest(LoginActionTypes.LOGIN_ACTION_RESET, resetLogin);
}

export function* loginSaga() {
    yield all([
        call(onLoginStart),
        call(onLoginReset),
    ]);
}