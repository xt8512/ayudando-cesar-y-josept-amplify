import { Auth } from "@aws-amplify/auth";
import { generateIdToAmplify, setClientId } from "./StartConfig";

export async function handleSignOut() {
  const idClient = generateIdToAmplify();

  try {
    await Auth.signOut();

    localStorage.clear();

    setClientId(idClient);
  } catch (error) {
    console.log("Error signing out: ", error);
  }
}
