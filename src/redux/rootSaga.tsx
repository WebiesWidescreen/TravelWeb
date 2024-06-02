import { all, call } from 'redux-saga/effects';
import { loginSaga } from './login/loginSaga';

export default function* rootSaga() {
    yield all([
        call(loginSaga),
    ]);
}