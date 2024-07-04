import { Auth } from "@aws-amplify/auth";
import { generateIdToAmplify } from "./StartConfig";

export async function handleSignInPublicBrokers() {
  const idClient = generateIdToAmplify();

  const [username, password] = import.meta.env.VITE_BROKERS_COGNITO_CREDENTIALS_PUBLIC.split("-");

  try {
    return await Auth.signIn(username, password, {
      idClient,
      userAgent: window.navigator.userAgent,
      channelCode: "BRK",
    });
  } catch (e) {
    console.error(e);
  }
}
