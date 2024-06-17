import { Auth } from "@aws-amplify/auth";

export async function handleGetCurrentSession() {
  try {
    const currentSession = await Auth.currentSession();
    console.log("CURRENT_SESSION: ", currentSession);
  } catch (error) {
    console.log("Error getting current session: ", error);
  }
}
