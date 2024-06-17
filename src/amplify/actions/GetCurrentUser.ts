import { Auth } from "@aws-amplify/auth";

export async function handleGetCurrentUser() {
  try {
    const currentUser = await Auth.currentAuthenticatedUser();
    console.log("CURRENT_USER: ", currentUser);
  } catch (error) {
    console.log("Error getting current user: ", error);
  }
}
