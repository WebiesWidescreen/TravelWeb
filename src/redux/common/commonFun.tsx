import { decodeTokenJson } from "../encodeDecode";

export const docodeResponse = (response: any, key: any) => {
    const docodeVal = decodeTokenJson(response.response, key);
    return docodeVal.data;
};