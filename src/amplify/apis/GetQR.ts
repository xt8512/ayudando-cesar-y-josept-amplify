import { Auth } from "@aws-amplify/auth";
import { handleSignInPublic } from "../actions/SignInPublic";
import {
  generateIdToAmplify,
  handleStartConfigPublic,
} from "../actions/StartConfig";
import type { AmplifyUser } from "../types/Amplify.Cognito";
import { httpCient } from "../server-client";

export const handleGetQR = async () => {
  const config = await handleStartConfigPublic();

  console.log(config);  

  await handleSignInPublic();

  const user: AmplifyUser = await Auth.currentAuthenticatedUser();
  const clientId = generateIdToAmplify();

  try {
    const response = await httpCient.post("SEGURIDAD", "/security/qr", {
      identifier: user.attributes.sub,
      clientId,
    });
  
    console.log(response);
  } catch (error) {
    console.error(error);
    
  }
  
};
