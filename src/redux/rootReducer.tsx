import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import AsyncStorage from '@react-native-async-storage/async-storage';
import loginReducer from "./login/loginReducer";

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['login'],
};

const rootReducer = combineReducers({
    login: loginReducer,
});

export default persistReducer(persistConfig, rootReducer);