import { Auth } from "@aws-amplify/auth";
import { generateIdToAmplify } from "../constants";

export async function handleSignInPublic() {
  const idClient = generateIdToAmplify();
  const username = import.meta.env.VITE_AWS_USERNAME_PUBLIC;
  const password = import.meta.env.VITE_AWS_PASSWORD_PUBLIC;

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
