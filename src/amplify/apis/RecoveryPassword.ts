import { Auth } from "@aws-amplify/auth";
import { httpCient } from "../server-client";
import { handleStartConfigPublic } from "../actions/StartConfig";
import { handleSignInPublic } from "../actions/SignInPublic";

export const handleRecoveryPassword = async () => {
  const config = await handleStartConfigPublic();
  console.log(config);  
  
  await handleSignInPublic();

  try {
    const currentUser = await Auth.currentUserInfo();

    const email = currentUser.attributes.email;    

    const response = await httpCient.post(
      "BROKERS",
      "/authentication/user/corredor/contrasena/recuperar",
      { email }
    );

    console.log(response);
  } catch (error) {
    console.error("Error recovery password:", error);
  }
};
