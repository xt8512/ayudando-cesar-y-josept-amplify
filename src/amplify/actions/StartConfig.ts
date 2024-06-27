import { Auth } from "@aws-amplify/auth";
import { awsConfig, awsConfigPublic } from "../config";
import { v4 as uuid } from "uuid";

const STORAGE_KEY_CLIENT_ID = "clientId";

export function generateIdToAmplify() {
  const StorageClientId = localStorage.getItem(STORAGE_KEY_CLIENT_ID);

  if (StorageClientId) {
    return StorageClientId;
  }

  const clientId = uuid();
  localStorage.setItem(STORAGE_KEY_CLIENT_ID, clientId);

  return clientId;
}

export function getDeviceKey(username: string) {
  const userPoolId = awsConfig.Auth.userPoolWebClientId;
  const key = `CognitoIdentityServiceProvider.${userPoolId}.${username}.deviceKey`;
  const deviceKey = localStorage.getItem(key);

  return deviceKey ?? "null";
}

export async function handleStartConfig() {
  console.log("iniciando cognito privado");
  return Auth.configure(awsConfig);
}

export async function handleStartConfigPublic() {
  console.log("iniciando cognito publico");
  return Auth.configure(awsConfigPublic);
}