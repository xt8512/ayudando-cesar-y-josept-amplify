import { awsConfig } from "../config";

const STORAGE_KEY_DEVICE_KEY = "deviceKey";

export function setDeviceKey(deviceKey: string) {
  localStorage.setItem(STORAGE_KEY_DEVICE_KEY, deviceKey);
}

export function getDeviceKey() {
  const deviceKey = localStorage.getItem(STORAGE_KEY_DEVICE_KEY);
  return deviceKey ?? "null";
}

export function getDeviceKeyInCognito(username: string) {
  const userPoolId = awsConfig.Auth.userPoolWebClientId;
  const key = `CognitoIdentityServiceProvider.${userPoolId}.${username}.deviceKey`;
  const deviceKey = localStorage.getItem(key);

  return deviceKey ?? "null";
}
