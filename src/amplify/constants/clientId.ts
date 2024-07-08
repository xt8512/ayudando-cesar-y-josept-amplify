import { v4 as uuid } from "uuid";

const STORAGE_KEY_CLIENT_ID = "clientId";

export function setClientId(clientId: string) {
  localStorage.setItem(STORAGE_KEY_CLIENT_ID, clientId);
}

export function generateIdToAmplify() {
  const StorageClientId = localStorage.getItem(STORAGE_KEY_CLIENT_ID);

  if (StorageClientId) {
    return StorageClientId;
  }

  const clientId = uuid();
  setClientId(clientId);

  return clientId;
}
