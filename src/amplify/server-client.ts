import { RestAPI } from "@aws-amplify/api-rest";
import { generateIdToAmplify } from "./constants";

function getHeadersBrokers() {
  const clientId = generateIdToAmplify();

  return {
    "id-client": clientId,
  };
}

function getHeadersSeguridad() {
  const clientId = generateIdToAmplify();

  return {
    "X-Api-Key": import.meta.env.VITE_X_API_KEY,
    "id-client": clientId,
  };
}

export const getHeadersAmplify = (apiName: string) => {
  const headers = {
    BROKERS: getHeadersBrokers(),
    SEGURIDAD: getHeadersSeguridad(),
  };

  return headers[apiName as keyof typeof headers];
};

export const getBodyAmplify = (apiName: string, data: unknown) => {
  const headers = getHeadersAmplify(apiName);

  return {
    headers,
    body: data ? { payload: data } : undefined,
  };
};

export const httpCient = {
  get: async <T>(api: string, path: string): Promise<T> => {
    const options = getHeadersAmplify(api);
    return RestAPI.get(api, path, options);
  },
  post: async <T = unknown>(api: string, path: string, data = {}): Promise<T> => {
    const body = getBodyAmplify(api, data);
    console.log(body);
    return RestAPI.post(api, path, body);
  },
  patch: async <T>(api: string, path: string, data = {}): Promise<T> => {
    const body = getBodyAmplify(api, data);
    return RestAPI.patch(api, path, body);
  },
};
