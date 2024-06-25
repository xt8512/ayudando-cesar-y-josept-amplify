import { Auth } from "@aws-amplify/auth";

export async function handleSignOut() {
  try {
    await Auth.signOut();

    localStorage.clear();
  } catch (error) {
    console.log("Error signing out: ", error);
  }
}
