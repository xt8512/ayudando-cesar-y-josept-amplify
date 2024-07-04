// import { Auth } from "@aws-amplify/auth";
import { generateIdToAmplify } from "./actions/StartConfig";
import { RestAPI } from "@aws-amplify/api-rest";

export const getHeadersAmplify = async () => {
  const clientId = generateIdToAmplify();
  // const { accessKeyId, secretAccessKey, sessionToken } =
  //   await Auth.currentCredentials();

  return {
    "id-client": clientId,
    // access_key: accessKeyId,
    // secret_key: secretAccessKey,
    // id_sesion: sessionToken,
    // "X-Api-Key": import.meta.env.VITE_X_API_KEY, 
  };
};

export const getBodyAmplify = async (data: unknown) => {
  const headers = await getHeadersAmplify();

  return {
    headers,
    body: data ? { payload: data } : undefined,
  };
};

export const httpCient = {
  get: async (api: string, path: string) => {
    const options = await getHeadersAmplify();
    return RestAPI.get(api, path, options);
  },
  post: async (api: string, path: string, data = {}) => {
    const body = await getBodyAmplify(data);

    console.log(path);    

    console.log(body);    

    return RestAPI.post(api, path, body);
  },
  patch: async (api: string, path: string, data = {}) => {
    const body = await getBodyAmplify(data);
    return RestAPI.patch(api, path, body);
  },
};
