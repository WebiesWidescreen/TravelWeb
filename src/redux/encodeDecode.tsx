import JWT from 'expo-jwt';

// useJwt Token Encode
export const encodeJson = (encodeData: any, key: any) => JWT.encode(encodeData, key, { algorithm: 'HS512' as any });

// useJwt Token Decode
export const decodeJson = (decodeData: any, key: any) =>
    JWT.encode(JSON.parse(decodeData), key, { algorithm: 'HS512' as any });

// Decode
export const decodeTokenJson = (jsonData: any, key: any) => {
    const decodedData = JWT.decode(jsonData, key);
    return decodedData;
};