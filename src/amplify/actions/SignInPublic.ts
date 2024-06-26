import { Auth } from "@aws-amplify/auth";
import { generateIdToAmplify } from "./StartConfig";

export async function authSignInPublic() {
  const idClient = generateIdToAmplify();
  const credencials = import.meta.env.VITE_COGNITO_CREDENTIALS_PUBLIC as string;

  try {
    const [username, password] = credencials.split("-");

    console.log(username, password, idClient);

    return await Auth.signIn(username, password, {
      idClient,
    });
  } catch (e) {
    console.error(e);
  }
}
