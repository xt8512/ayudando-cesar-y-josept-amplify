import { Auth } from "@aws-amplify/auth";

export const handleGetCurrentCredentials = async () => {
  try {
    const currentCredentials = await Auth.currentCredentials();
    console.log("CURRENT_CREDENTIALS: ", currentCredentials);
  } catch (error) {
    console.error("Error getting current credentials:", error);
  }
};
