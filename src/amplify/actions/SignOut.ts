import { Auth } from "@aws-amplify/auth";
import { generateIdToAmplify, getDeviceKey, setClientId, setDeviceKey } from "../constants";

export async function handleSignOut() {
  const idClient = generateIdToAmplify();
  const deviceKey = getDeviceKey()

  try {
    await Auth.signOut();

    localStorage.clear();

    setClientId(idClient);
    setDeviceKey(deviceKey);
  } catch (error) {
    console.log("Error signing out: ", error);
  }
}
