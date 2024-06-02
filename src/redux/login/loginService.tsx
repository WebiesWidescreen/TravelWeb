import axios from "axios";
import { API_URL } from "../const";

export const userLogin = (postData: any) => {
    const data = {
        UserLoginToken: postData,
    };
    const url = `${API_URL}UserLogin`;
    return axios.post(url, data, { headers: { 'Content-type': 'application/json' } });
};