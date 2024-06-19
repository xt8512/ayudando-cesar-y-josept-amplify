import { Auth } from "@aws-amplify/auth";
import { awsConfig } from "../config";
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

export async function handleStartConfig() {
  console.log("iniciando con previewConfig");
  return Auth.configure(awsConfig);
}
